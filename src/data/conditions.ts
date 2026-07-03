export interface FocusArea {
  title: string;
  body: string;
}

export const conditionsPageCopy = {
  heroLead:
    'Physician-directed evaluation for concussion and post-traumatic symptoms — including functional injury MRI may not show.',
  heroNote: 'Objective brain mapping · Evidence-based care · Medically defensible documentation',
  symptomsIntro:
    'Patient presentations we see most often at intake — the symptom profiles that bring people through our doors.',
  focusIntro:
    'Clinical specialties our team applies to diagnosis, treatment, and documentation — each area goes deeper than any single presentation above.',
} as const;

export const conditions: string[] = [
  'Concussion',
  'Mild Traumatic Brain Injury (mTBI)',
  'Post-Concussion Syndrome',
  'Head Injury After Motor Vehicle Accident',
  'Persistent Headache After Trauma',
  'Dizziness and Balance Dysfunction',
  'Cognitive Dysfunction After Injury',
];

export const focusAreas: FocusArea[] = [
  { title: 'Traumatic Brain Injury', body: 'Comprehensive evaluation of brain injury following trauma, including objective diagnostic testing and functional assessment.' },
  { title: 'Post-Concussion Syndrome', body: 'Structured management of persistent symptoms following concussion, including cognitive, vestibular, and headache complaints.' },
  { title: 'Motor Vehicle–Related Brain Injury', body: 'Evaluation of neurological symptoms following motor vehicle accidents, with documentation suited to medical and legal review.' },
  { title: 'Whiplash & Neurological Symptoms', body: 'Assessment of neurological symptoms associated with whiplash and cervical acceleration-deceleration injury.' },
  { title: 'Persistent Headache After Accident', body: 'Evaluation and targeted treatment for headache and migraine that develop or worsen following a traumatic event.' },
];
