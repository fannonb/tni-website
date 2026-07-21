export const aboutHero = {
  name: 'Dr. Derrick Randdolf, MD',
  role: 'Founder of Texas NeuroTrauma Institute and StarMED Clinic',
  summary:
    'A physician integrating neurotrauma evaluation, cognitive recovery, preventive medicine, and whole-person care.',
} as const;

export const aboutCredentials = [
  { label: 'Medical Licensure', value: 'Texas · New Mexico · Maryland' },
  { label: 'Clinical Background', value: 'Family Medicine · Emergency Medicine' },
  { label: 'Clinical Focus', value: 'Neurotrauma · Neurocognitive Health' },
  { label: 'Practice Leadership', value: 'Founder of TNI · Founder of StarMED' },
] as const;

export const clinicalBackground = [
  'Dr. Derrick Randdolf is a physician licensed in Texas, New Mexico, and Maryland with a clinical background in Family Medicine and Emergency Medicine. He specializes in wellness-focused healthcare, integrative medicine, neurocognitive health, and traumatic brain injury evaluation and treatment.',
  'He is recognized for combining evidence-based medical care with advanced wellness and neurofunctional approaches designed to optimize patient recovery, performance, and long-term health outcomes.',
  'As the founder of Texas NeuroTrauma Institute and StarMED Clinic, Dr. Randdolf has developed a modern medical practice model that integrates primary care, wellness medicine, preventive health, neurocognitive assessment, and restorative therapies within a patient-centered environment. His approach emphasizes whole-person care—focusing not only on disease management, but also on health optimization, functional recovery, vitality, and quality of life.',
  'Dr. Randdolf’s background in Emergency Medicine and Family Medicine provides a comprehensive systems-based perspective that bridges acute medical care, chronic disease management, neurological recovery, and preventive wellness medicine. His experience managing both acute and long-term conditions has shaped a practical, patient-focused approach centered on functional improvement, evidence-based care, and measurable outcomes.',
] as const;

export const practices = [
  {
    id: 'tni',
    name: 'Texas NeuroTrauma Institute',
    focus: 'Neurotrauma evaluation and neurological recovery',
    body:
      'Dr. Randdolf maintains focused expertise in traumatic brain injury (TBI), concussion care, neurocognitive dysfunction, post-concussive syndrome, and neurofunctional rehabilitation.',
    detail:
      'His approach includes quantitative EEG (qEEG) brain mapping, neurocognitive evaluation, neurofeedback therapy, and individualized neurorehabilitation strategies designed to support cognitive recovery and neurological performance.',
  },
  {
    id: 'starmed',
    name: 'StarMED Clinic',
    focus: 'Wellness and integrative medical care',
    body:
      'Through StarMED Clinic, Dr. Randdolf provides preventive medicine, weight management, IV infusion therapy, men’s and women’s health, hormone and metabolic wellness, neuro-wellness services, recovery-focused therapies, and integrative health optimization programs.',
    detail:
      'His clinical philosophy combines traditional medicine with advanced therapeutic technologies and personalized treatment strategies tailored to each patient’s goals and functional needs.',
  },
] as const;

export const medicoLegal = {
  body:
    'Dr. Randdolf is actively involved in medico-legal and forensic neurotrauma evaluations, providing objective medical assessments for injury-related cases.',
  services: [
    'Medical record review',
    'Injury mechanism analysis',
    'Neurocognitive symptom correlation',
    'Narrative medical reporting',
    'Evidence-based documentation of neurological impairment and recovery',
  ],
} as const;

export const education = [
  {
    institution: 'Universidad Autónoma de Guadalajara School of Medicine',
    detail: 'Medical education · International Program',
  },
  {
    institution: 'New York Medical College',
    detail: 'Postgraduate clinical training',
  },
  {
    institution: 'Texas Tech University Health Sciences Center',
    detail: 'Postgraduate clinical training',
  },
] as const;

export const interestGroups = [
  {
    title: 'Wellness & Preventive Care',
    items: [
      'Wellness and Preventive Medicine',
      'Integrative and Functional Health Optimization',
      'IV Infusion and Recovery Therapies',
      'Weight Management and Metabolic Wellness',
      'Men’s and Women’s Health',
      'Ketamine-Assisted and Neuro-Wellness Therapies',
    ],
  },
  {
    title: 'Neurotrauma & Recovery',
    items: [
      'Traumatic Brain Injury (TBI) Medicine',
      'Concussion and Post-Concussive Syndrome',
      'Neurofeedback and qEEG Brain Mapping',
      'Cognitive Rehabilitation and Neuroperformance',
    ],
  },
  {
    title: 'Clinical Evaluation',
    items: ['Emergency and Acute Care Medicine', 'Medico-Legal Neurotrauma Evaluation'],
  },
] as const;

export const aboutClosing =
  'Dr. Randdolf continues to expand innovative wellness and neuro-recovery medical services through a model focused on preventive care, patient accessibility, advanced diagnostics, restorative therapies, and evidence-based integrative medicine. His vision is centered on helping patients not only recover from illness and injury, but also achieve higher levels of long-term health, cognitive performance, and overall wellness.';
