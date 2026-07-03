export interface Service {
  num: string;
  domain: string;
  title: string;
  body: string;
  hasLink: boolean;
  path?: string;
}

export type JourneyIcon = 'reach' | 'diagnostics' | 'findings' | 'recovery';

export interface JourneyStep {
  icon: JourneyIcon;
  label: string;
  copy: string;
}

const SERVICE_PATH_MAP: Record<string, string> = {
  'qEEG Brain Mapping': '/qeeg-service',
  'Electroencephalography (EEG)': '/eeg',
  'Brain Mapping': '/brain-mapping',
  'Nerve Conduction & EMG': '/ncv-emg',
  'Neurocognitive Testing': '/neurocognitive-testing',
  'Neuropsychology': '/neuropsychology',
  'Concussion Management': '/concussion-management',
  'Memory & Cognitive Rehab': '/memory-cognitive-rehab',
  'Headache Treatment': '/headache-treatment',
  'Counseling': '/counseling',
};

export const services: Service[] = [
  { num: '01', domain: 'Diagnostics', title: 'qEEG Brain Mapping', body: 'Non-invasive measurement of brainwave activity to reveal functional patterns behind persistent symptoms.', hasLink: true, path: SERVICE_PATH_MAP['qEEG Brain Mapping'] },
  { num: '02', domain: 'Diagnostics', title: 'Electroencephalography (EEG)', body: "Safe, painless recording of the brain's electrical activity to evaluate seizures, altered consciousness, and more.", hasLink: true, path: SERVICE_PATH_MAP['Electroencephalography (EEG)'] },
  { num: '03', domain: 'Diagnostics', title: 'Brain Mapping', body: 'Comprehensive analysis of brain function, integrating qEEG with clinical evaluation for precise planning.', hasLink: true, path: SERVICE_PATH_MAP['Brain Mapping'] },
  { num: '04', domain: 'Diagnostics', title: 'Nerve Conduction & EMG', body: 'Testing of peripheral nerve and muscle function to identify nerve damage or neuromuscular disorders.', hasLink: true, path: SERVICE_PATH_MAP['Nerve Conduction & EMG'] },
  { num: '05', domain: 'Assessment', title: 'Neurocognitive Testing', body: 'Objective evaluation of memory, attention, processing speed, and executive function.', hasLink: true, path: SERVICE_PATH_MAP['Neurocognitive Testing'] },
  { num: '06', domain: 'Assessment', title: 'Neuropsychology', body: 'Assessment of the cognitive, emotional, and behavioral effects of neurological injury.', hasLink: true, path: SERVICE_PATH_MAP['Neuropsychology'] },
  { num: '07', domain: 'Rehabilitation', title: 'Concussion Management', body: 'Structured, evidence-based care for concussion and mild TBI, from diagnosis to safe return to activity.', hasLink: true, path: SERVICE_PATH_MAP['Concussion Management'] },
  { num: '08', domain: 'Rehabilitation', title: 'Memory & Cognitive Rehab', body: 'Rehabilitation that strengthens memory, attention, and executive function to rebuild independence.', hasLink: true, path: SERVICE_PATH_MAP['Memory & Cognitive Rehab'] },
  { num: '09', domain: 'Rehabilitation', title: 'Headache Treatment', body: 'Targeted, minimally invasive therapies for chronic headache and migraine after injury.', hasLink: true, path: SERVICE_PATH_MAP['Headache Treatment'] },
  { num: '10', domain: 'Rehabilitation', title: 'Counseling', body: 'Compassionate emotional support for patients and families navigating recovery and adjustment.', hasLink: true, path: SERVICE_PATH_MAP['Counseling'] },
];

// Authority statement — the medically-defensible focus list (spec: Homepage).
export const authorityConditions: string[] = [
  'Traumatic Brain Injury (TBI)',
  'Concussion & Post-Concussive Syndrome',
  'Motor Vehicle–Related Neurological Injury',
  'Cognitive Impairment After Trauma',
  'Trauma-Associated Headache & Migraine',
  'Functional Neurocognitive Decline',
];

export const conditions: string[] = [
  'Concussion',
  'Mild Traumatic Brain Injury',
  'Post-Concussion Syndrome',
  'Brain Injury After a Car Accident',
  'Persistent Headache After Trauma',
  'Dizziness & Balance Problems',
  'Memory & Attention Changes',
  'Mood Changes After Injury',
];

export const journey: JourneyStep[] = [
  { icon: 'reach', label: 'Reach Out', copy: 'Tell us what happened. Our team helps direct you to the right evaluation.' },
  { icon: 'diagnostics', label: 'Objective Diagnostics', copy: 'Non-invasive qEEG, EEG, and neurocognitive measurement — no guesswork.' },
  { icon: 'findings', label: 'Clear Findings', copy: 'We interpret and explain your results in a structured, understandable way.' },
  { icon: 'recovery', label: 'Recovery Together', copy: 'An individualized plan with therapy, cognitive training, and follow-up.' },
];
