import { useId } from 'react';

/**
 * Signature brand visual: a top-down qEEG "brain map" — an EEG 10-20 electrode
 * mesh over a soft topographic activity field, echoing the neural motif in the
 * institute logo. Fully self-contained SVG (no external image), scales cleanly,
 * and renders in a light ("sand") or dark ("navy") context.
 */

type Tone = 'navy' | 'sand';

interface Node {
  id: string;
  x: number; // -1..1 (right positive)
  y: number; // -1..1 (down positive, nose at top)
  hot?: boolean; // copper accent node
}

// Approx. international 10-20 electrode layout, top-down, nose up.
const NODES: Node[] = [
  { id: 'Fp1', x: -0.42, y: -0.82 },
  { id: 'Fp2', x: 0.42, y: -0.82 },
  { id: 'F7', x: -0.78, y: -0.44 },
  { id: 'F3', x: -0.42, y: -0.42, hot: true },
  { id: 'Fz', x: 0, y: -0.44 },
  { id: 'F4', x: 0.42, y: -0.42 },
  { id: 'F8', x: 0.78, y: -0.44, hot: true },
  { id: 'T3', x: -0.94, y: 0 },
  { id: 'C3', x: -0.48, y: 0 },
  { id: 'Cz', x: 0, y: 0, hot: true },
  { id: 'C4', x: 0.48, y: 0 },
  { id: 'T4', x: 0.94, y: 0 },
  { id: 'T5', x: -0.78, y: 0.44 },
  { id: 'P3', x: -0.42, y: 0.42 },
  { id: 'Pz', x: 0, y: 0.44 },
  { id: 'P4', x: 0.42, y: 0.42, hot: true },
  { id: 'T6', x: 0.78, y: 0.44 },
  { id: 'O1', x: -0.4, y: 0.82 },
  { id: 'O2', x: 0.4, y: 0.82 },
];

const CX = 200;
const CY = 205;
const R = 150;
const px = (n: Node) => CX + n.x * R;
const py = (n: Node) => CY + n.y * R;

// Connect nodes whose normalized distance is below a threshold → tidy mesh.
const EDGES: [number, number][] = [];
for (let i = 0; i < NODES.length; i++) {
  for (let j = i + 1; j < NODES.length; j++) {
    const dx = NODES[i].x - NODES[j].x;
    const dy = NODES[i].y - NODES[j].y;
    if (Math.hypot(dx, dy) < 0.62) EDGES.push([i, j]);
  }
}

export function BrainMapVisual({ tone = 'navy', style }: { tone?: Tone; style?: React.CSSProperties }) {
  const uid = useId().replace(/:/g, '');
  const clip = `clip-${uid}`;
  const glowA = `glowA-${uid}`;
  const glowB = `glowB-${uid}`;
  const glowC = `glowC-${uid}`;
  const bg = `bg-${uid}`;
  const soft = `soft-${uid}`;

  const dark = tone === 'navy';
  const line = dark ? 'rgba(233,224,211,0.28)' : 'rgba(7,53,94,0.28)';
  const nodeFill = dark ? '#f3ece1' : '#ffffff';
  const nodeStroke = dark ? 'rgba(7,53,94,0.35)' : 'rgba(7,53,94,0.5)';
  const headStroke = dark ? 'rgba(233,224,211,0.45)' : 'rgba(7,53,94,0.4)';

  return (
    <svg
      viewBox="0 0 400 430"
      role="img"
      aria-label="Quantitative EEG brain map showing electrode network and functional activity"
      style={{ width: '100%', height: 'auto', display: 'block', ...style }}
    >
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          {dark ? (
            <>
              <stop offset="0" stopColor="#0a3f6e" />
              <stop offset="1" stopColor="#062038" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#fbf6ee" />
              <stop offset="1" stopColor="#f1e6d6" />
            </>
          )}
        </linearGradient>
        <radialGradient id={glowA}>
          <stop offset="0" stopColor="#e16d22" stopOpacity="0.9" />
          <stop offset="1" stopColor="#e16d22" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={glowB}>
          <stop offset="0" stopColor="#f0a860" stopOpacity="0.75" />
          <stop offset="1" stopColor="#f0a860" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={glowC}>
          <stop offset="0" stopColor={dark ? '#3f9ad1' : '#2f7fb0'} stopOpacity="0.6" />
          <stop offset="1" stopColor={dark ? '#3f9ad1' : '#2f7fb0'} stopOpacity="0" />
        </radialGradient>
        <filter id={soft} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <clipPath id={clip}>
          <path d="M200 47 C120 47 74 108 74 205 C74 300 122 363 200 363 C278 363 326 300 326 205 C326 108 280 47 200 47 Z" />
        </clipPath>
      </defs>

      {/* panel background */}
      <rect x="0" y="0" width="400" height="430" rx="24" fill={`url(#${bg})`} />

      {/* topographic activity field, clipped to the head */}
      <g clipPath={`url(#${clip})`}>
        <g filter={`url(#${soft})`}>
          <circle cx="150" cy="150" r="90" fill={`url(#${glowC})`} />
          <circle cx="262" cy="140" r="86" fill={`url(#${glowB})`} />
          <circle cx="235" cy="245" r="96" fill={`url(#${glowA})`} />
          <circle cx="150" cy="270" r="70" fill={`url(#${glowB})`} />
        </g>
      </g>

      {/* head outline with a small nose bump at top */}
      <path
        d="M200 47 C120 47 74 108 74 205 C74 300 122 363 200 363 C278 363 326 300 326 205 C326 108 280 47 200 47 Z"
        fill="none"
        stroke={headStroke}
        strokeWidth="2"
      />
      <path d="M188 50 L200 32 L212 50" fill="none" stroke={headStroke} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

      {/* mesh edges */}
      <g stroke={line} strokeWidth="1">
        {EDGES.map(([a, b], i) => (
          <line key={i} x1={px(NODES[a])} y1={py(NODES[a])} x2={px(NODES[b])} y2={py(NODES[b])} />
        ))}
      </g>

      {/* electrode nodes */}
      <g>
        {NODES.map((n) => (
          <circle
            key={n.id}
            cx={px(n)}
            cy={py(n)}
            r={n.hot ? 6.5 : 4.5}
            fill={n.hot ? '#e16d22' : nodeFill}
            stroke={n.hot ? 'rgba(255,255,255,0.5)' : nodeStroke}
            strokeWidth={n.hot ? 1.5 : 1}
          />
        ))}
      </g>

      {/* qEEG waveform strip along the bottom */}
      <g transform="translate(0 388)">
        <path
          d="M40 12 q10 -14 20 0 t20 0 q8 -20 16 0 t20 2 q10 -16 20 0 t20 0 q8 -22 16 0 t20 1 q10 -14 20 0 t20 0 q9 -18 18 0 t20 0 q10 -12 20 0"
          fill="none"
          stroke="#e16d22"
          strokeWidth="2"
          strokeLinecap="round"
          opacity={dark ? 0.85 : 0.7}
        />
      </g>
    </svg>
  );
}
