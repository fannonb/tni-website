export interface ConditionGroup {
  id: string;
  title: string;
  items?: string[];
  /** Optional nested labels within a group (e.g. cognitive / physical / emotional). */
  subgroups?: { title: string; items: string[] }[];
}

export interface EvaluationPathway {
  title: string;
  body: string;
  path: string;
  linkLabel: string;
}

export const conditionsPageCopy = {
  heroLead:
    'After concussion or traumatic brain injury, CT and MRI often look normal while symptoms persist. Our physician-led evaluations use advanced functional neurodiagnostics to clarify what is wrong and guide recovery.',
  heroNote: 'Physician-led evaluation · Advanced neurodiagnostics · Evidence-informed care',
  groupsIntro:
    'Find the category that best matches your situation to identify a clear starting point for evaluation.',
  evaluateIntro:
    'We match your injury history and symptoms to the clinical pathway that fits — then connect you with the appropriate service.',
  ctaLead:
    'Share your injury history and symptoms. Our team will help direct you to the right evaluation — whether you are a patient or an attorney seeking a referral pathway.',
} as const;

export const conditionGroups: ConditionGroup[] = [
  {
    id: 'diagnoses',
    title: 'Brain injuries & diagnoses',
    items: [
      'Traumatic Brain Injury (TBI)',
      'Mild Traumatic Brain Injury (mTBI)',
      'Concussion',
      'Persistent Post-Concussion Symptoms',
      'Whiplash-Associated Neurological Injury',
      'Neurocognitive Dysfunction',
    ],
  },
  {
    id: 'mechanisms',
    title: 'How the injury occurred',
    items: [
      'Motor Vehicle Collision Injuries',
      'Sports-Related Concussion',
      'Workplace Head Injury',
      'Fall-Related Brain Injury',
      'Blast Injury',
    ],
  },
  {
    id: 'symptoms',
    title: 'Cognitive, physical & emotional symptoms',
    subgroups: [
      {
        title: 'Cognitive',
        items: [
          'Memory Impairment',
          'Attention & Concentration Problems',
          'Brain Fog',
          'Executive Dysfunction',
        ],
      },
      {
        title: 'Physical',
        items: [
          'Chronic Headaches',
          'Post-Traumatic Migraine',
          'Dizziness',
          'Vertigo',
          'Balance Disorders',
          'Visual Disturbance',
          'Light & Sound Sensitivity',
          'Sleep Disturbance',
        ],
      },
      {
        title: 'Emotional',
        items: ['Mood Changes After Brain Injury', 'Post-Traumatic Anxiety'],
      },
    ],
  },
];

/** Flat list of all evaluated items (for any consumers that need a simple array). */
export const conditions: string[] = conditionGroups.flatMap((group) =>
  group.subgroups ? group.subgroups.flatMap((sg) => sg.items) : (group.items ?? []),
);

export const evaluationPathways: EvaluationPathway[] = [
  {
    title: 'Physician neurotrauma evaluation',
    body: 'Start here. A physician reviews your history, exam findings, and determines which diagnostics and recovery services are appropriate.',
    path: '/physician-neurotrauma-evaluation',
    linkLabel: 'Physician evaluation',
  },
  {
    title: 'Cognitive & neuropsychological assessment',
    body: 'Objective testing of memory, attention, processing speed, and related functions when cognitive symptoms persist after injury.',
    path: '/neurocognitive-testing',
    linkLabel: 'Cognitive testing',
  },
  {
    title: 'Vestibular & balance evaluation',
    body: 'Assessment of dizziness, vertigo, and imbalance that can follow concussion or head injury.',
    path: '/vestibular-balance',
    linkLabel: 'Vestibular evaluation',
  },
  {
    title: 'Headache management',
    body: 'Evaluation and treatment of post-traumatic headache and migraine linked to brain injury.',
    path: '/headache-treatment',
    linkLabel: 'Headache treatment',
  },
  {
    title: 'Rehabilitation',
    body: 'Coordinated recovery across therapy disciplines, aligned to clinical findings and functional goals.',
    path: '/multidisciplinary-rehab',
    linkLabel: 'Rehabilitation',
  },
];
