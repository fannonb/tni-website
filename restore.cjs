const fs = require('fs');
const path = require('path');

const transcriptPath = 'C:\\Users\\ELITEBOOK\\.cursor\\projects\\c-Users-ELITEBOOK-Downloads-Design-improvement-request-5-standalone-website\\agent-transcripts\\fb1f9992-318d-4352-810f-195406ac346f\\fb1f9992-318d-4352-810f-195406ac346f.jsonl';
const targetPath = 'src/pages/Home.tsx';

try {
  const content = fs.readFileSync(transcriptPath, 'utf8');
  const lines = content.split('\n');
  
  let homeContent = null;
  
  // Let's find the last tool use of Write or StrReplace on Home.tsx before it was emptied
  for (let i = lines.length - 1; i >= 0; i--) {
    if (!lines[i].trim()) continue;
    try {
      const data = JSON.parse(lines[i]);
      if (data.role === 'assistant' && data.message && data.message.content) {
        for (const block of data.message.content) {
          if (block.type === 'tool_use' && (block.name === 'Write' || block.name === 'StrReplace')) {
            const input = block.input;
            if (input && (input.path && input.path.includes('Home.tsx') || input.contents && input.contents.includes('export default function Home'))) {
              if (block.name === 'Write' && input.contents) {
                homeContent = input.contents;
                console.log(`Found Write tool use for Home.tsx at line ${i}`);
                break;
              }
            }
          }
        }
      }
      if (homeContent) break;
    } catch (e) {
      // ignore parse errors
    }
  }
  
  if (homeContent) {
    fs.writeFileSync(targetPath, homeContent, 'utf8');
    console.log('Successfully restored Home.tsx!');
  } else {
    console.log('Could not find Home.tsx content in transcript.');
  }
} catch (err) {
  console.error('Error restoring:', err);
}
