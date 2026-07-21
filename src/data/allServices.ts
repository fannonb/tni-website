import ncvEmgHero from '../assets/images/ncv_emg_hero.png';
import eegHero from '../assets/images/eeg_hero.png';
import brainMappingHero from '../assets/images/brain_mapping_hero.png';
import qeegHero from '../assets/images/qeeg_hero.png';
import neurocognitiveTestingHero from '../assets/images/neurocognitive_testing_hero.png';
import neuropsychologyHero from '../assets/images/neuropsychology_hero.png';
import headacheTreatmentHero from '../assets/images/headache_treatment_hero.png';
import counselingHero from '../assets/images/counseling_hero.png';
import memoryRehabHero from '../assets/images/memory_rehab_hero.png';
import concussionManagementHero from '../assets/images/concussion_management_hero.png';

export interface ServiceOffering {
  title: string;
  body: string;
}

export interface WhyChooseItem {
  title: string;
  body: string;
}

export interface ServicePageContent {
  slug: string;
  path: string;
  pageTitle: string;
  domain: string;
  heroTitle: string;
  heroTitleAccent?: string;
  tagline: string;
  heroIntro: string;
  expertEyebrow?: string;
  expertTitle: string;
  expertBody: string;
  expertItems?: string[];
  offeringsEyebrow: string;
  offeringsTitle: string;
  offeringsIntro?: string;
  offerings: ServiceOffering[];
  whyChooseIntro: string;
  whyChoose: WhyChooseItem[];
  approachEyebrow?: string;
  approachTitle: string;
  approachTitleAccent?: string;
  approachBody: string;
  approachItems?: string[];
  heroImageLabel: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  /** Visual style for offerings & why-choose lists. Default: pathway */
  listStyle?: 'numbered' | 'pathway';
}

export const ALL_SERVICES: ServicePageContent[] = [
  {
    slug: 'ncv-emg',
    path: '/ncv-emg',
    pageTitle: 'NCV & EMG — Texas NeuroTrauma Institute',
    domain: 'Diagnostics',
    heroTitle: 'Nerve Conduction Studies (NCV)',
    heroTitleAccent: '& Electromyography (EMG)',
    tagline: 'Advanced testing for nerve and muscle disorders.',
    heroIntro:
      'Healthy nerves and muscles work together to control movement, sensation, and coordination. When nerve damage or muscle dysfunction occurs, it can lead to numbness, tingling, weakness, pain, muscle cramps, or difficulty with movement. NCV and EMG are advanced diagnostic tests that evaluate peripheral nerve and muscle function to identify the underlying cause of these symptoms.',
    expertTitle: 'Who NCV & EMG Testing Is For',
    expertBody:
      'NCV and EMG testing may be appropriate when symptoms suggest a problem affecting peripheral nerves, muscles, or the connection between them.',
    expertItems: [
      'Numbness, tingling, or altered sensation',
      'Muscle weakness, cramps, or loss of function',
      'Radiating pain or suspected nerve-root injury',
      'Possible nerve compression or peripheral neuropathy',
    ],
    offeringsEyebrow: 'Diagnostic Services',
    offeringsTitle: 'What NCV & EMG Testing Includes',
    offeringsIntro:
      'Comprehensive diagnostic evaluations help identify disorders affecting the nerves, muscles, and neuromuscular system.',
    offerings: [
      { title: 'Nerve Conduction Studies (NCV)', body: 'Measuring the speed and strength of electrical signals traveling through peripheral nerves to detect nerve damage, compression, or dysfunction.' },
      { title: 'Electromyography (EMG)', body: 'Evaluating the electrical activity of muscles to identify disorders affecting the muscles or the nerves that control them.' },
      { title: 'Peripheral Neuropathy Evaluation', body: 'Assessing nerve damage associated with diabetes, traumatic injuries, infections, and other neurological disorders.' },
      { title: 'Entrapment Neuropathy Testing', body: 'Diagnosing nerve compression conditions such as carpal tunnel syndrome, cubital tunnel syndrome, and other peripheral nerve entrapments.' },
      { title: 'Neuromuscular Disorder Assessment', body: 'Evaluating muscle weakness, muscle pain, and neuromuscular conditions to support accurate diagnosis and treatment planning.' },
      { title: 'Nerve Injury & Radiculopathy Evaluation', body: 'Identifying nerve root injuries, spinal nerve compression, and other conditions affecting movement, sensation, and reflexes.' },
    ],
    whyChooseIntro:
      'Our experienced neurology team combines advanced diagnostic technology with clinical expertise to provide accurate, comprehensive evaluations for patients experiencing nerve and muscle disorders.',
    whyChoose: [
      { title: 'Advanced Diagnostic Technology', body: 'State-of-the-art NCV and EMG equipment that delivers precise, reliable neuromuscular assessments.' },
      { title: 'Experienced Neurological Specialists', body: 'Clinicians skilled in diagnosing complex nerve, muscle, and neuromuscular disorders through expert interpretation of test results.' },
      { title: 'Comprehensive Neurological Care', body: 'NCV and EMG findings are integrated with neurological examinations, imaging studies, and other diagnostic evaluations to develop a complete understanding of each patient\'s condition.' },
      { title: 'Collaborative, Multidisciplinary Approach', body: 'Coordination with neurologists, rehabilitation specialists, physical therapists, and other healthcare professionals to ensure comprehensive care throughout recovery.' },
    ],
    approachTitle: 'How Results Guide Treatment',
    approachBody:
      'NCV and EMG findings are interpreted alongside the clinical examination and available records to identify the likely source of dysfunction and guide targeted treatment.',
    approachItems: [
      'Clinical interpretation of nerve and muscle findings',
      'Treatment recommendations based on identified dysfunction',
      'Rehabilitation planning when indicated',
      'Coordination with relevant specialists',
    ],
    heroImageLabel: 'NCV & EMG Testing',
    heroImageSrc: ncvEmgHero,
    heroImageAlt: 'Nerve Conduction Studies and Electromyography testing equipment and clinical setup',
  },
  {
    slug: 'eeg',
    path: '/eeg',
    pageTitle: 'Electroencephalography (EEG) — Texas NeuroTrauma Institute',
    domain: 'Diagnostics',
    heroTitle: 'Electroencephalography',
    heroTitleAccent: '(EEG)',
    tagline: 'Advanced brainwave testing for accurate neurological diagnosis.',
    heroIntro:
      'An Electroencephalogram (EEG) is a safe, painless, and non-invasive diagnostic test that records the brain\'s electrical activity. By measuring brainwave patterns, EEG helps physicians evaluate neurological function and identify abnormalities associated with seizures, epilepsy, altered consciousness, sleep disorders, and other neurological conditions.',
    expertTitle: 'Who EEG Testing Is For',
    expertBody:
      'EEG testing may be appropriate when symptoms or episodes could be related to abnormal electrical activity in the brain.',
    expertItems: [
      'Suspected seizures or epilepsy',
      'Unexplained fainting or altered consciousness',
      'Episodes of confusion or unusual behavior',
      'Neurological treatment monitoring',
    ],
    offeringsEyebrow: 'Neurodiagnostic Services',
    offeringsTitle: 'What EEG Testing Includes',
    offeringsIntro:
      'EEG services are designed to evaluate brain function and assist in diagnosing a wide range of neurological conditions.',
    offerings: [
      { title: 'Routine EEG Testing', body: 'Recording brainwave activity to identify abnormal electrical patterns that may indicate neurological disorders.' },
      { title: 'Extended & Ambulatory EEG Monitoring', body: 'Long-duration monitoring for patients whose symptoms require observation over an extended period during normal daily activities.' },
      { title: 'Seizure & Epilepsy Evaluation', body: 'Assessing abnormal brainwave activity to assist in diagnosing seizure disorders and guiding treatment decisions.' },
      { title: 'Diagnostic Support for Neurological Conditions', body: 'EEG testing as part of the evaluation of unexplained episodes of altered consciousness, fainting, confusion, sleep disturbances, or other neurological symptoms.' },
      { title: 'Treatment Monitoring', body: 'Follow-up EEG studies to evaluate changes in brain activity and monitor the effectiveness of ongoing treatment when clinically appropriate.' },
    ],
    whyChooseIntro:
      'Our team combines advanced neurodiagnostic technology with specialized neurological expertise to provide accurate, timely, and patient-focused care.',
    whyChoose: [
      { title: 'Advanced EEG Technology', body: 'State-of-the-art equipment that delivers high-quality brainwave recordings for reliable clinical evaluation.' },
      { title: 'Experienced Neurological Specialists', body: 'Skilled clinicians with expertise in interpreting EEG studies and managing complex neurological conditions.' },
      { title: 'Comprehensive Diagnostic Approach', body: 'EEG findings are integrated with neurological examinations, imaging studies, neurocognitive testing, and other diagnostic evaluations when appropriate.' },
      { title: 'Personalized Patient Care', body: 'Every evaluation is tailored to the patient\'s symptoms, medical history, and individual healthcare needs.' },
    ],
    approachTitle: 'How EEG Results Guide Care',
    approachBody:
      'EEG findings are reviewed in clinical context to help explain neurological episodes, support diagnostic decisions, and determine whether treatment or additional evaluation is needed.',
    approachItems: [
      'Interpretation of recorded brainwave activity',
      'Correlation with reported episodes and symptoms',
      'Recommendations for treatment or further testing',
      'Follow-up monitoring when clinically appropriate',
    ],
    heroImageLabel: 'EEG Brainwave Testing',
    heroImageSrc: eegHero,
    heroImageAlt: 'Professional Electroencephalography cap and monitoring screen displaying brainwave activity',
  },
  {
    slug: 'brain-mapping',
    path: '/brain-mapping',
    pageTitle: 'Brain Mapping — Texas NeuroTrauma Institute',
    domain: 'Diagnostics',
    heroTitle: 'Brain Mapping',
    tagline: 'Visualizing brain function to guide personalized neurological care.',
    heroIntro:
      'Brain mapping is the clinical picture produced from recorded brain activity, often using qEEG analysis. Unlike CT or MRI, which show brain structure, it helps clinicians examine functional patterns that may relate to post-injury cognitive or neurological symptoms.',
    expertTitle: 'Who Brain Mapping Is For',
    expertBody:
      'Brain mapping may support patients whose neurological or cognitive symptoms require a functional view of brain activity alongside clinical evaluation.',
    expertItems: [
      'Persistent symptoms after concussion or TBI',
      'Changes in attention, memory, mood, or performance',
      'Need for objective functional baseline data',
      'Monitoring during treatment or recovery',
    ],
    offeringsEyebrow: 'Functional Neurodiagnostics',
    offeringsTitle: 'What Brain Mapping Includes',
    offeringsIntro:
      'Brain mapping evaluations provide detailed information about brain function to support diagnosis, treatment planning, and ongoing recovery.',
    offerings: [
      { title: 'Comprehensive Brain Function Analysis', body: 'Assessing patterns of brain activity to identify areas of altered function that may contribute to cognitive, emotional, or neurological symptoms.' },
      { title: 'Brain Mapping with qEEG Technology', body: 'Utilizing advanced quantitative electroencephalography to measure and analyze brainwave activity as part of a comprehensive neurological evaluation.' },
      { title: 'Personalized Treatment Planning', body: 'Integrating brain mapping findings with clinical assessments to develop individualized care plans tailored to each patient\'s unique needs.' },
      { title: 'Recovery & Progress Monitoring', body: 'Comparing brain activity over time to help evaluate treatment response and monitor neurological recovery.' },
      { title: 'Integrated Neurological Assessment', body: 'Combining brain mapping results with neurocognitive testing, neuropsychological evaluations, and physician assessments to provide a complete picture of brain health.' },
    ],
    whyChooseIntro:
      'Our multidisciplinary team combines advanced diagnostic technology with specialized expertise to deliver comprehensive evaluations that support informed clinical decisions.',
    whyChoose: [
      { title: 'Advanced Neurodiagnostic Technology', body: 'Modern brain mapping systems designed to provide detailed, objective insights into brain function.' },
      { title: 'Experienced Clinical Specialists', body: 'Brain mapping interpreted by clinicians with expertise in neurotrauma, neurological disorders, and cognitive health.' },
      { title: 'Individualized Care Plans', body: 'Every patient\'s evaluation is used to develop personalized recommendations based on their symptoms, diagnosis, and recovery goals.' },
      { title: 'Collaborative, Comprehensive Care', body: 'Brain mapping is integrated into a multidisciplinary approach involving neurologists, neuropsychologists, rehabilitation specialists, and therapists when appropriate.' },
    ],
    approachTitle: 'How Brain Mapping Guides Care',
    approachBody:
      'Brain mapping findings are considered with clinical and cognitive assessments to clarify functional patterns and inform individualized care.',
    approachItems: [
      'Functional brain-activity findings',
      'Clinical correlation with symptoms and testing',
      'Individualized treatment recommendations',
      'Progress comparison when repeat testing is indicated',
    ],
    heroImageLabel: 'Brain Mapping',
    heroImageSrc: brainMappingHero,
    heroImageAlt: 'Monitor showing a detailed 3D topographic neural brain map of functional network connectivity',
  },
  {
    slug: 'qeeg',
    path: '/qeeg-service',
    pageTitle: 'qEEG Brain Mapping — Texas NeuroTrauma Institute',
    domain: 'Diagnostics',
    heroTitle: 'Quantitative Electroencephalography',
    heroTitleAccent: '(qEEG)',
    tagline: 'Advanced brain mapping for personalized neurological care.',
    heroIntro:
      'Quantitative Electroencephalography (qEEG) is the non-invasive recording and statistical analysis method used to measure brainwave activity. When clinically indicated, those measurements can produce a functional brain map that adds context to neurological and cognitive evaluation.',
    expertTitle: 'Who qEEG Is For',
    expertBody:
      'qEEG may be appropriate when objective brainwave data could add useful context to a neurological, cognitive, or post-injury evaluation.',
    expertItems: [
      'Concussion or traumatic brain injury symptoms',
      'Cognitive or neurological changes',
      'Planning for selected neurofeedback protocols',
      'Monitoring functional change over time',
    ],
    offeringsEyebrow: 'Brain Mapping Services',
    offeringsTitle: 'What qEEG Includes',
    offeringsIntro:
      'qEEG evaluations provide objective data that complements traditional neurological assessments and helps inform treatment planning.',
    offerings: [
      { title: 'Comprehensive Brain Mapping', body: 'Recording and analyzing brainwave activity to identify functional patterns that may be associated with neurological or cognitive symptoms.' },
      { title: 'Neurological Function Assessment', body: 'Supporting the evaluation of patients experiencing symptoms following concussion, traumatic brain injury, or other neurological conditions.' },
      { title: 'Personalized Treatment Planning', body: 'Using qEEG findings alongside clinical evaluations to help guide individualized treatment and rehabilitation recommendations.' },
      { title: 'Treatment Progress Monitoring', body: 'Comparing brainwave activity over time to assess changes during recovery and evaluate treatment response.' },
      { title: 'Integrated Diagnostic Support', body: 'Incorporating qEEG results into a comprehensive neurological assessment alongside neurocognitive testing, neuropsychological evaluations, and clinical examinations.' },
    ],
    whyChooseIntro:
      'Our specialists combine advanced neurodiagnostic technology with clinical expertise to deliver meaningful insights that support accurate diagnosis and effective treatment planning.',
    whyChoose: [
      { title: 'Advanced Brain Mapping Technology', body: 'Modern qEEG systems designed to provide detailed, objective analysis of brainwave activity.' },
      { title: 'Experienced Clinical Interpretation', body: 'Brainwave data reviewed by clinicians with expertise in neurotrauma, neurological disorders, and cognitive health.' },
      { title: 'Comprehensive Neurological Care', body: 'qEEG findings are integrated with other diagnostic evaluations to create a complete picture of each patient\'s neurological health.' },
      { title: 'Personalized, Evidence-Informed Care', body: 'Every assessment contributes to an individualized treatment plan tailored to each patient\'s symptoms, diagnosis, and recovery goals.' },
    ],
    approachTitle: 'How qEEG Findings Guide Care',
    approachBody:
      'qEEG is interpreted as one part of a broader clinical assessment, helping the care team understand brainwave patterns and determine whether they should influence treatment planning.',
    approachItems: [
      'Quantified brainwave findings',
      'Correlation with clinical and cognitive results',
      'Treatment-planning support',
      'Follow-up comparison when clinically indicated',
    ],
    heroImageLabel: 'qEEG Brain Mapping',
    heroImageSrc: qeegHero,
    heroImageAlt: 'Patient undergoing qEEG brain mapping wearing a clinical sensor cap during analysis',
  },
  {
    slug: 'neurocognitive-testing',
    path: '/neurocognitive-testing',
    pageTitle: 'Neurocognitive Testing — Texas NeuroTrauma Institute',
    domain: 'Assessment',
    heroTitle: 'Neurocognitive Testing',
    tagline: 'Advanced cognitive assessments for accurate diagnosis and recovery.',
    heroIntro:
      'Neurocognitive testing uses standardized measures of memory, attention, processing speed, language, and executive function. It provides objective cognitive scores that can document change after injury or illness and track recovery over time.',
    expertTitle: 'Who Neurocognitive Testing Is For',
    expertBody:
      'Neurocognitive testing may be appropriate when changes in thinking or performance need to be measured objectively and connected to daily function.',
    expertItems: [
      'Memory, attention, or concentration concerns',
      'Slower processing or reaction time',
      'Changes after concussion, TBI, stroke, or illness',
      'Return-to-work, school, or activity planning',
    ],
    offeringsEyebrow: 'Cognitive Assessment',
    offeringsTitle: 'What Neurocognitive Testing Includes',
    offeringsIntro:
      'Advanced testing services provide valuable insights into cognitive function and help guide individualized care and rehabilitation.',
    offerings: [
      { title: 'Memory & Attention Assessments', body: 'Evaluating short-term and long-term memory, concentration, attention span, and information processing abilities.' },
      { title: 'Executive Function Testing', body: 'Assessing planning, organization, reasoning, decision-making, problem-solving, and cognitive flexibility.' },
      { title: 'Processing Speed & Reaction Time Evaluations', body: 'Measuring how efficiently the brain receives, processes, and responds to information, particularly following concussion or traumatic brain injury.' },
      { title: 'Cognitive Screening for Neurological Disorders', body: 'Identifying cognitive changes associated with dementia, Alzheimer\'s disease, Parkinson\'s disease, stroke, and other neurological conditions.' },
      { title: 'Concussion & Brain Injury Evaluations', body: 'Baseline and post-injury assessments to monitor cognitive recovery and guide safe return to work, school, sports, and daily activities.' },
    ],
    whyChooseIntro:
      'Our team combines advanced diagnostic technology with specialized clinical expertise to deliver accurate, meaningful cognitive assessments that inform every stage of care.',
    whyChoose: [
      { title: 'Specialized Cognitive Assessment Experts', body: 'Experienced clinicians trained in evaluating cognitive function across a wide range of neurological conditions.' },
      { title: 'Evidence-Based Testing Protocols', body: 'Comprehensive assessments supported by current neuroscience research and clinical best practices.' },
      { title: 'Detailed, Actionable Reports', body: 'Clear findings and practical recommendations that help patients, families, and referring providers make informed treatment decisions.' },
      { title: 'Collaborative, Multidisciplinary Care', body: 'Close coordination with neurologists, neuropsychologists, rehabilitation specialists, therapists, and primary care providers to ensure comprehensive patient care.' },
    ],
    approachTitle: 'How Results Guide Recovery',
    approachBody:
      'Results identify cognitive strengths and challenges, provide a baseline for comparison, and help shape treatment, rehabilitation, and activity recommendations.',
    approachItems: [
      'A clear profile of measured cognitive abilities',
      'Clinical interpretation of strengths and challenges',
      'Recommendations for treatment or rehabilitation',
      'Progress monitoring and activity guidance',
    ],
    heroImageLabel: 'Neurocognitive Testing',
    heroImageSrc: neurocognitiveTestingHero,
    heroImageAlt: 'Patient performing a neurocognitive tablet assessment in a modern clinical room',
  },
  {
    slug: 'neuropsychology',
    path: '/neuropsychology',
    pageTitle: 'Neuropsychology — Texas NeuroTrauma Institute',
    domain: 'Assessment',
    heroTitle: 'Neuropsychology',
    tagline: 'Understanding the connection between brain function and everyday life.',
    heroIntro:
      'A neuropsychological evaluation goes beyond cognitive scores to examine how thinking, emotion, behavior, and medical history affect everyday function. This broader clinical interpretation helps clarify complex changes after neurological injury or illness and informs practical care planning.',
    expertTitle: 'Who Neuropsychological Evaluation Is For',
    expertBody:
      'Neuropsychological evaluation may be appropriate when cognitive, emotional, or behavioral changes are affecting everyday life after injury or neurological illness.',
    expertItems: [
      'Cognitive changes after concussion, TBI, or stroke',
      'Mood or behavioral changes linked to neurological health',
      'Complex questions about diagnosis and function',
      'Return-to-work or return-to-school planning',
    ],
    offeringsEyebrow: 'Neuropsychological Care',
    offeringsTitle: 'What Neuropsychological Care Includes',
    offeringsIntro:
      'Comprehensive neuropsychology services identify cognitive strengths and challenges while developing individualized treatment strategies for lasting improvement.',
    offerings: [
      { title: 'Comprehensive Neuropsychological Evaluations', body: 'In-depth assessments of memory, attention, processing speed, executive functioning, language, reasoning, and other cognitive abilities.' },
      { title: 'Cognitive & Emotional Assessments', body: 'Evaluation of emotional, behavioral, and psychological changes associated with neurological injuries and disorders.' },
      { title: 'Cognitive Rehabilitation Therapy', body: 'Personalized interventions to improve cognitive performance, compensate for deficits, and promote greater independence in daily living.' },
      { title: 'Return-to-Work & Return-to-School Evaluations', body: 'Recommendations and accommodations that support a safe and successful transition back to work, school, or other daily activities.' },
      { title: 'Progress Monitoring', body: 'Ongoing assessments to measure recovery, evaluate treatment effectiveness, and adjust care plans as patients progress.' },
    ],
    whyChooseIntro:
      'Every brain injury and neurological condition is unique. Our multidisciplinary approach ensures that every patient receives individualized care focused on restoring function and enhancing overall well-being.',
    whyChoose: [
      { title: 'Experienced Neuropsychology Specialists', body: 'Experts in the relationship between brain function, cognition, behavior, and emotional health.' },
      { title: 'Evidence-Based Care', body: 'Assessment tools and therapeutic interventions grounded in the latest clinical research and best practices.' },
      { title: 'Integrated Neurological Care', body: 'Collaborative treatment alongside neurologists, rehabilitation specialists, therapists, and other healthcare professionals.' },
      { title: 'Patient-Centered Treatment Plans', body: 'Personalized care designed around each individual\'s goals, lifestyle, and recovery journey.' },
    ],
    approachTitle: 'How Findings Guide Treatment',
    approachBody:
      'Findings connect cognitive performance, emotional health, and daily function so treatment recommendations and accommodations address the whole clinical picture.',
    approachItems: [
      'Integrated cognitive and emotional findings',
      'Practical treatment recommendations',
      'Work, school, or daily-living accommodations',
      'A baseline for monitoring progress',
    ],
    heroImageLabel: 'Neuropsychology',
    heroImageSrc: neuropsychologyHero,
    heroImageAlt: 'A neuropsychology consultation where the clinician is explaining findings and rehab exercises',
  },
  {
    slug: 'headache-treatment',
    path: '/headache-treatment',
    pageTitle: 'Headache Treatment — Texas NeuroTrauma Institute',
    domain: 'Rehabilitation',
    heroTitle: 'Headache Treatment',
    tagline: 'Targeted therapies for chronic headaches and migraines.',
    heroIntro:
      'Chronic headaches and migraines can significantly impact daily life, causing pain, discomfort, and disruptions to normal activities. At Texas NeuroTrauma Institute, our headache treatment services offer targeted therapies—including Occipital Nerve Blocks (ONB), Botox injections, and Sphenopalatine Ganglion (SPG) Blocks—to provide relief from persistent headaches and migraines.',
    expertTitle: 'Who Headache Treatment Is For',
    expertBody:
      'Treatment may be appropriate when recurring or persistent headaches are disrupting function and require a targeted medical approach.',
    expertItems: [
      'Chronic or frequent migraines',
      'Occipital or tension-type headache pain',
      'Persistent headaches after neurological injury',
      'Symptoms not adequately controlled by current care',
    ],
    offeringsEyebrow: 'Pain Management',
    offeringsTitle: 'What Headache Treatment Includes',
    offeringsIntro:
      'Minimally invasive, research-backed techniques designed to reduce pain and improve function.',
    offerings: [
      { title: 'Occipital Nerve Blocks (ONB)', body: 'A localized injection to block pain signals from the occipital nerves, often used to treat chronic migraines and tension headaches.' },
      { title: 'Botox for Migraines', body: 'FDA-approved injections that help prevent migraines by reducing muscle tension and nerve sensitivity.' },
      { title: 'Sphenopalatine Ganglion (SPG) Block', body: 'A targeted nerve block that alleviates headaches by reducing nerve irritation and inflammation.' },
    ],
    whyChooseIntro:
      'Our specialized headache treatment team offers state-of-the-art therapies to effectively manage and reduce headache frequency and intensity.',
    whyChoose: [
      { title: 'Minimally Invasive Treatments', body: 'Cutting-edge techniques that provide relief without the need for surgery.' },
      { title: 'Personalized Pain Management Plans', body: 'Each treatment plan is customized to meet the individual needs of our patients.' },
      { title: 'Experienced Neurology Specialists', body: 'Experts in headache and migraine treatment, ensuring high-quality, evidence-based care.' },
      { title: 'Integrated Neurological Care', body: 'Headache treatment coordinated with broader neurological evaluation and recovery planning when appropriate.' },
    ],
    approachTitle: 'How Treatment Is Personalized',
    approachBody:
      'Treatment selection is based on the headache pattern, clinical history, prior response to care, and the patient\'s functional goals.',
    approachItems: [
      'Selection of an appropriate treatment option',
      'A plan based on symptom pattern and history',
      'Monitoring of headache frequency and response',
      'Adjustment or referral when additional care is needed',
    ],
    heroImageLabel: 'Headache Treatment',
    heroImageSrc: headacheTreatmentHero,
    heroImageAlt: 'A sterile procedure room equipped for advanced migraine and nerve block treatments',
  },
  {
    slug: 'counseling',
    path: '/counseling',
    pageTitle: 'Counseling Services — Texas NeuroTrauma Institute',
    domain: 'Rehabilitation',
    heroTitle: 'Counseling Services',
    tagline: 'Compassionate support for emotional health, recovery, and resilience.',
    heroIntro:
      'Living with a traumatic brain injury, concussion, neurological condition, chronic pain, or other life-changing health challenge can have a profound impact on emotional well-being. Feelings of anxiety, depression, stress, grief, frustration, and adjustment difficulties are common and can affect recovery, relationships, work, and everyday life.',
    expertTitle: 'Who Counseling Services Are For',
    expertBody:
      'Counseling may help patients and families manage the emotional and practical effects of neurological injury, chronic symptoms, or major health changes.',
    expertItems: [
      'Anxiety, depression, stress, or mood changes',
      'Trauma, grief, or adjustment difficulties',
      'Changes affecting relationships, work, or daily life',
      'Family members and caregivers needing support',
    ],
    offeringsEyebrow: 'Mental Wellness',
    offeringsTitle: 'What Counseling Services Include',
    offeringsIntro:
      'Counseling programs tailored to meet the unique emotional and psychological needs of each patient while supporting long-term recovery and well-being.',
    offerings: [
      { title: 'Individual Counseling', body: 'One-on-one therapy focused on emotional support, personal growth, stress management, and healthy coping strategies.' },
      { title: 'Cognitive Behavioral Therapy (CBT)', body: 'Evidence-based therapy that helps patients identify unhelpful thought patterns, improve emotional regulation, and develop healthier behaviors.' },
      { title: 'Anxiety & Depression Support', body: 'Comprehensive treatment for anxiety, depression, mood changes, and emotional challenges related to neurological conditions or life circumstances.' },
      { title: 'Trauma & Grief Counseling', body: 'Support for individuals coping with traumatic experiences, brain injuries, loss, major life transitions, or post-traumatic stress.' },
      { title: 'Adjustment to Neurological Conditions', body: 'Counseling to help patients and families adapt to changes resulting from traumatic brain injuries, concussions, stroke, or chronic neurological disorders.' },
      { title: 'Family & Caregiver Support', body: 'Guidance and education for family members and caregivers as they navigate the emotional and practical challenges of supporting a loved one.' },
    ],
    whyChooseIntro:
      'Our counseling team works as part of a multidisciplinary neurological care program, ensuring patients receive comprehensive support for both their emotional and physical recovery.',
    whyChoose: [
      { title: 'Licensed, Experienced Mental Health Professionals', body: 'Compassionate clinicians trained in evidence-based therapeutic approaches and neurological rehabilitation.' },
      { title: 'Personalized Treatment Plans', body: 'Therapy tailored to each patient\'s diagnosis, personal goals, emotional needs, and stage of recovery.' },
      { title: 'Integrated Neurological Care', body: 'Close collaboration with neurologists, neuropsychologists, rehabilitation specialists, and other members of the care team to support whole-person healing.' },
      { title: 'Evidence-Based Therapeutic Approaches', body: 'Proven interventions designed to strengthen emotional resilience, improve coping skills, and enhance overall well-being.' },
    ],
    approachTitle: 'How Counseling Supports Recovery',
    approachBody:
      'Counseling supports recovery by helping patients process change, strengthen coping skills, and address emotional barriers that affect function and quality of life.',
    approachItems: [
      'Individualized therapeutic goals',
      'Practical coping and emotional-regulation strategies',
      'Support for adjustment and resilience',
      'Coordination with the broader care team when appropriate',
    ],
    heroImageLabel: 'Counseling Services',
    heroImageSrc: counselingHero,
    heroImageAlt: 'A serene and comfortable counseling office space with facing armchairs',
  },
  {
    slug: 'memory-cognitive-rehab',
    path: '/memory-cognitive-rehab',
    pageTitle: 'Memory & Cognitive Rehabilitation — Texas NeuroTrauma Institute',
    domain: 'Rehabilitation',
    heroTitle: 'Memory Training',
    heroTitleAccent: '& Cognitive Rehabilitation',
    tagline: 'Strengthening memory, restoring cognitive function, and enhancing everyday life.',
    heroIntro:
      'Memory is essential to learning, decision-making, communication, and independent living. When memory and cognitive function are affected by a traumatic brain injury, concussion, stroke, neurological condition, or age-related cognitive changes, everyday tasks can become more challenging. Through structured memory training and cognitive rehabilitation, patients can strengthen cognitive abilities, develop effective compensatory strategies, and regain confidence in their daily lives.',
    expertTitle: 'Who Cognitive Rehabilitation Is For',
    expertBody:
      'Cognitive rehabilitation may help when changes in memory, attention, processing, or executive function are limiting independence and daily performance.',
    expertItems: [
      'Memory or attention difficulties',
      'Slower processing and reduced mental flexibility',
      'Planning, organization, or problem-solving challenges',
      'Difficulty returning to work, school, or daily routines',
    ],
    offeringsEyebrow: 'Cognitive Rehabilitation',
    offeringsTitle: 'What Cognitive Rehabilitation Includes',
    offeringsIntro:
      'Individualized programs designed to improve cognitive performance while equipping patients with practical strategies for everyday success.',
    offerings: [
      { title: 'Memory Enhancement Training', body: 'Structured exercises that strengthen short-term memory, long-term recall, working memory, and information retention.' },
      { title: 'Attention & Cognitive Processing Therapy', body: 'Activities designed to improve concentration, mental flexibility, processing speed, and sustained attention.' },
      { title: 'Executive Function Rehabilitation', body: 'Targeted interventions that enhance planning, organization, problem-solving, decision-making, and task management.' },
      { title: 'Personalized Cognitive Coaching', body: 'One-on-one sessions focused on each patient\'s strengths, challenges, goals, and functional needs.' },
      { title: 'Neuroplasticity-Based Cognitive Therapy', body: 'Evidence-informed techniques that encourage the brain\'s natural ability to adapt, reorganize, and strengthen neural pathways during recovery.' },
      { title: 'Compensatory Strategy Training', body: 'Teaching practical memory aids, organizational tools, and daily routines that help patients manage cognitive challenges more effectively.' },
      { title: 'Technology-Assisted Cognitive Training', body: 'Incorporating digital cognitive exercises and interactive tools to support rehabilitation and monitor progress.' },
    ],
    whyChooseIntro:
      'Our multidisciplinary team provides individualized cognitive rehabilitation using evidence-based practices designed to support meaningful recovery and long-term brain health.',
    whyChoose: [
      { title: 'Experienced Cognitive Rehabilitation Specialists', body: 'Professionals dedicated to helping patients recover cognitive function following neurological injury or illness.' },
      { title: 'Personalized Treatment Plans', body: 'Every rehabilitation program is tailored to each patient\'s diagnosis, symptoms, recovery goals, and lifestyle.' },
      { title: 'Evidence-Based Rehabilitation', body: 'Therapeutic interventions grounded in neuroscience research and current clinical best practices.' },
      { title: 'Focus on Real-World Function', body: 'Therapy designed to improve performance in daily activities, work, school, and social environments.' },
    ],
    approachTitle: 'How Rehabilitation Builds Daily Function',
    approachBody:
      'Therapeutic exercises, coaching, and compensatory strategies are organized around practical goals at home, work, school, and in the community.',
    approachItems: [
      'Individualized cognitive goals',
      'Practical strategies for everyday tasks',
      'Structured exercises and coaching',
      'Progress review and plan adjustment',
    ],
    heroImageLabel: 'Memory & Cognitive Rehab',
    heroImageSrc: memoryRehabHero,
    heroImageAlt: 'Patient practicing interactive memory and cognitive rehabilitation tasks with a therapist',
  },
  {
    slug: 'concussion-management',
    path: '/concussion-management',
    pageTitle: 'Concussion Evaluation & Management — Texas NeuroTrauma Institute',
    domain: 'Rehabilitation',
    heroTitle: 'Concussion Evaluation',
    heroTitleAccent: '& Management',
    tagline: 'Expert diagnosis, treatment, and recovery for concussions.',
    heroIntro:
      'A concussion is a mild traumatic brain injury (mTBI) that can affect memory, concentration, balance, vision, mood, and overall brain function. While many people recover fully with appropriate care, an undiagnosed or poorly managed concussion can lead to prolonged symptoms and long-term complications. At Texas NeuroTrauma Institute, we provide comprehensive concussion evaluation and management for children, adolescents, and adults — whether your injury resulted from a sports-related impact, motor vehicle accident, workplace injury, fall, or recreational activity.',
    expertTitle: 'Who Concussion Evaluation Is For',
    expertBody:
      'Evaluation may be appropriate after a head impact when symptoms are new, persistent, worsening, or interfering with school, work, sports, or daily activity.',
    expertItems: [
      'Recent head impact with concussion symptoms',
      'Persistent headaches, dizziness, or cognitive changes',
      'Difficulty returning to work, school, or sports',
      'Need for structured recovery monitoring',
    ],
    offeringsEyebrow: 'Concussion Care',
    offeringsTitle: 'What Concussion Care Includes',
    offeringsIntro:
      'Personalized concussion care using advanced clinical assessments and individualized treatment plans designed to support every stage of recovery.',
    offerings: [
      { title: 'Comprehensive Concussion Evaluations', body: 'Thorough neurological and cognitive assessments to diagnose concussion severity and identify symptoms affecting brain function.' },
      { title: 'Baseline & Post-Injury Neurocognitive Testing', body: 'Objective testing to evaluate cognitive performance before and after injury, helping monitor recovery and guide clinical decisions.' },
      { title: 'Individualized Recovery Plans', body: 'Customized treatment strategies that address physical, cognitive, emotional, and behavioral symptoms while promoting safe healing.' },
      { title: 'Symptom Management', body: 'Treatment recommendations for headaches, dizziness, balance problems, sleep disturbances, vision changes, cognitive difficulties, and other concussion-related symptoms.' },
      { title: 'Return-to-Work, School & Sports Programs', body: 'Evidence-based, stepwise protocols that ensure patients safely resume daily activities without increasing the risk of reinjury.' },
      { title: 'Ongoing Recovery Monitoring', body: 'Regular follow-up evaluations to track progress, adjust treatment plans, and identify patients who may require additional rehabilitation services.' },
    ],
    whyChooseIntro:
      'Recovering from a concussion requires specialized expertise and a coordinated approach to care. Our team is dedicated to helping patients recover safely while minimizing the risk of persistent symptoms.',
    whyChoose: [
      { title: 'Specialized Concussion Experts', body: 'Clinicians experienced in diagnosing and treating sports-related, occupational, and accident-related concussions.' },
      { title: 'Evidence-Based Care', body: 'Advanced assessment tools and treatment protocols based on the latest concussion research and clinical guidelines.' },
      { title: 'Multidisciplinary Treatment', body: 'Collaborative care involving neurologists, neuropsychologists, rehabilitation specialists, therapists, and other healthcare professionals when needed.' },
      { title: 'Personalized Recovery Plans', body: 'Every treatment plan is tailored to the patient\'s symptoms, lifestyle, occupation, and recovery goals.' },
      { title: 'Continuity of Care', body: 'Comprehensive follow-up and ongoing support throughout every stage of recovery.' },
    ],
    approachTitle: 'How Concussion Care Progresses',
    approachBody:
      'Care progresses from initial assessment to symptom management, monitored activity increases, and a safe return to work, school, sports, and everyday life.',
    approachItems: [
      'A baseline clinical and symptom assessment',
      'An individualized recovery plan',
      'Monitoring and adjustment as symptoms change',
      'Stepwise return-to-activity guidance',
    ],
    heroImageLabel: 'Concussion Evaluation',
    heroImageSrc: concussionManagementHero,
    heroImageAlt: 'Clinician conducting a post-concussion balance and coordination examination',
  },
  {
    slug: 'physician-neurotrauma-evaluation',
    path: '/physician-neurotrauma-evaluation',
    pageTitle: 'Physician Neurotrauma Evaluation — Texas NeuroTrauma Institute',
    domain: 'Assessment',
    heroTitle: 'Physician Neurotrauma',
    heroTitleAccent: 'Evaluation',
    tagline: 'Comprehensive physician-led evaluation for traumatic brain injury and complex neurological symptoms.',
    heroIntro:
      'Every evaluation brings the injury history, neurological examination, symptom pattern, mechanism of injury, and available imaging into one clinical picture. The goal is a clear, medically grounded plan for what should happen next.',
    expertTitle: 'Who This Evaluation Is For',
    expertBody:
      'A physician neurotrauma evaluation may be appropriate when neurological or cognitive symptoms persist after an injury and require a coordinated clinical assessment.',
    expertItems: [
      'Motor vehicle collisions',
      'Workplace injuries',
      'Falls and other traumatic events',
      'Sports-related impacts',
    ],
    offeringsEyebrow: 'Clinical Evaluation',
    offeringsTitle: 'What This Evaluation Includes',
    offeringsIntro:
      'A structured, physician-directed workup that establishes diagnosis, severity, and next steps for care.',
    offerings: [
      { title: 'Comprehensive Clinical History', body: 'Detailed review of injury mechanism, symptom onset and progression, prior medical history, and functional impact on work, school, and daily life.' },
      { title: 'Neurological Examination', body: 'Physician examination assessing neurological function, cognitive presentation, balance, coordination, and related clinical findings.' },
      { title: 'Mechanism of Injury Analysis', body: 'Careful analysis of how the injury occurred and how biomechanical forces may relate to the patient\'s clinical presentation.' },
      { title: 'Imaging & Records Review', body: 'Review of available CT, MRI, and prior clinical records to place functional findings in the broader diagnostic context.' },
      { title: 'Individualized Recommendations', body: 'Clear treatment, testing, and rehabilitation recommendations tailored to the patient\'s symptoms, goals, and clinical priorities.' },
    ],
    whyChooseIntro:
      'Physician-directed evaluation ensures that advanced testing and rehabilitation are guided by clinical judgment — not isolated test results.',
    whyChoose: [
      { title: 'Physician-Led Care', body: 'Evaluations directed by clinicians experienced in neurotrauma, concussion, and complex post-injury presentations.' },
      { title: 'Integrated Clinical Reasoning', body: 'History, examination, imaging, and diagnostic findings are interpreted together for a coherent clinical picture.' },
      { title: 'Actionable Next Steps', body: 'Patients leave with a clear plan for testing, treatment, rehabilitation, and follow-up.' },
      { title: 'Documentation Ready for Care Partners', body: 'Findings support coordinated care with referring providers and, when appropriate, structured medical documentation.' },
    ],
    approachTitle: 'What Happens After the Evaluation',
    approachBody:
      'Findings are translated into practical next steps, so patients and care partners understand the clinical picture, whether further testing is indicated, and how treatment or rehabilitation should proceed.',
    approachItems: [
      'Clear clinical findings and diagnostic context',
      'Recommendations for indicated testing',
      'An individualized treatment or rehabilitation plan',
      'Structured documentation and follow-up guidance',
    ],
    heroImageLabel: 'Physician Neurotrauma Evaluation',
    heroImageSrc: concussionManagementHero,
    heroImageAlt: 'Physician conducting a comprehensive neurotrauma clinical evaluation with a patient',
  },
  {
    slug: 'vestibular-balance',
    path: '/vestibular-balance',
    pageTitle: 'Vestibular & Balance Evaluation — Texas NeuroTrauma Institute',
    domain: 'Diagnostics',
    heroTitle: 'Vestibular & Balance',
    heroTitleAccent: 'Evaluation',
    tagline: 'Assessment of dizziness, imbalance, and vestibular dysfunction following head injury.',
    heroIntro:
      'Dizziness, imbalance, visual motion sensitivity, and vestibular dysfunction are common after concussion and traumatic brain injury. These symptoms can disrupt work, driving, school, and everyday confidence. Texas NeuroTrauma Institute provides structured vestibular and balance evaluation to identify contributing factors and guide targeted rehabilitation.',
    expertTitle: 'Who Vestibular & Balance Evaluation Is For',
    expertBody:
      'Evaluation may be appropriate when dizziness, imbalance, or visual-motion symptoms persist after concussion or neurological trauma.',
    expertItems: [
      'Dizziness or lightheadedness',
      'Imbalance, gait changes, or fall risk',
      'Visual-motion sensitivity',
      'Activity intolerance or spatial disorientation',
    ],
    offeringsEyebrow: 'Balance Assessment',
    offeringsTitle: 'What Vestibular & Balance Evaluation Includes',
    offeringsIntro:
      'Focused evaluation for patients experiencing dizziness, imbalance, and motion sensitivity after neurological trauma.',
    offerings: [
      { title: 'Post-Traumatic Dizziness Assessment', body: 'Clinical evaluation of dizziness and lightheadedness following concussion, TBI, or related neurological injury.' },
      { title: 'Balance & Gait Evaluation', body: 'Assessment of postural stability, gait changes, and fall risk associated with vestibular or neurological dysfunction.' },
      { title: 'Visual Motion Sensitivity Screening', body: 'Evaluation of visual-vestibular interaction problems that can worsen symptoms in busy environments or during screen use.' },
      { title: 'Vestibular Dysfunction Assessment', body: 'Clinical assessment of vestibular contributions to imbalance, spatial disorientation, and activity intolerance.' },
      { title: 'Rehabilitation Planning', body: 'Recommendations for vestibular therapy and related multidisciplinary care based on evaluation findings.' },
    ],
    whyChooseIntro:
      'Post-traumatic dizziness is often multifactorial. Our approach focuses on clarity, clinical correlation, and practical next steps.',
    whyChoose: [
      { title: 'Trauma-Focused Expertise', body: 'Evaluation framed around concussion and neurotrauma presentations rather than isolated ear or sinus assumptions.' },
      { title: 'Integrated Interpretation', body: 'Findings are considered alongside physician evaluation, cognitive symptoms, and other diagnostic data when available.' },
      { title: 'Clear Functional Impact', body: 'Assessments address how dizziness and imbalance affect work, driving, school, and daily activity.' },
      { title: 'Pathway to Recovery', body: 'Results guide vestibular therapy and coordinated rehabilitation rather than leaving patients without a plan.' },
    ],
    approachTitle: 'How Findings Guide Rehabilitation',
    approachBody:
      'Findings help distinguish vestibular, visual, and neurological contributors so rehabilitation can target the problems affecting balance and activity.',
    approachItems: [
      'Clinical explanation of contributing factors',
      'Targeted vestibular-therapy recommendations',
      'Safety and fall-risk guidance',
      'Coordination with related neurological care',
    ],
    heroImageLabel: 'Vestibular & Balance Evaluation',
    heroImageSrc: concussionManagementHero,
    heroImageAlt: 'Clinician assessing patient balance and vestibular function after head injury',
  },
  {
    slug: 'neurofeedback',
    path: '/neurofeedback',
    pageTitle: 'Neurofeedback Therapy — Texas NeuroTrauma Institute',
    domain: 'Rehabilitation',
    heroTitle: 'Neurofeedback',
    heroTitleAccent: 'Therapy',
    tagline: 'Evidence-informed neurofeedback individualized with clinical findings and qEEG when appropriate.',
    heroIntro:
      'Neurofeedback is a non-invasive training approach that uses real-time brain activity feedback to support regulation of attention, arousal, and related neurological patterns. At Texas NeuroTrauma Institute, neurofeedback protocols are individualized using clinical findings and quantitative EEG (qEEG) when appropriate — never as a one-size-fits-all program.',
    expertTitle: 'Who Neurofeedback Is For',
    expertBody:
      'Neurofeedback may be considered for selected patients when clinical findings support its use as part of a broader physician-directed recovery plan.',
    expertItems: [
      'Attention or self-regulation goals',
      'Persistent symptoms after concussion or TBI',
      'qEEG findings that may help guide training',
      'A coordinated rehabilitation plan already in place',
    ],
    offeringsEyebrow: 'Neurofeedback Care',
    offeringsTitle: 'What Neurofeedback Includes',
    offeringsIntro:
      'Individualized protocols designed to complement objective diagnostics and physician-directed recovery planning.',
    offerings: [
      { title: 'Clinically Guided Protocol Selection', body: 'Neurofeedback plans informed by physician evaluation, symptom presentation, and available neurodiagnostic findings.' },
      { title: 'qEEG-Informed Training When Appropriate', body: 'Use of quantitative EEG findings to help individualize training targets for selected patients.' },
      { title: 'Attention & Regulation Support', body: 'Protocols that may support attention, cognitive efficiency, and self-regulation as part of a broader recovery plan.' },
      { title: 'Progress Monitoring', body: 'Ongoing review of response to training with adjustments based on clinical progress and patient goals.' },
      { title: 'Integrated Care Coordination', body: 'Neurofeedback coordinated with cognitive rehabilitation, headache management, and other indicated therapies.' },
    ],
    whyChooseIntro:
      'Our neurofeedback program is embedded in a specialty neurotrauma institute — guided by evaluation, not marketed as a standalone cure.',
    whyChoose: [
      { title: 'Evidence-Informed Approach', body: 'Protocols selected and adjusted based on clinical findings and current best-practice considerations.' },
      { title: 'Diagnostic Context', body: 'Training informed by physician assessment and, when indicated, qEEG and related neurodiagnostic data.' },
      { title: 'Individualized Care', body: 'No generic templates — protocols are tailored to the patient\'s presentation and recovery priorities.' },
      { title: 'Part of a Larger Plan', body: 'Neurofeedback is one component of coordinated rehabilitation when clinically appropriate.' },
    ],
    approachTitle: 'How Neurofeedback Is Personalized',
    approachBody:
      'Training protocols are selected from the patient\'s presentation, recovery goals, and available diagnostic findings, then adjusted according to clinical response.',
    approachItems: [
      'Careful patient selection',
      'Individualized training targets',
      'Ongoing response monitoring',
      'Coordination with diagnostics and rehabilitation',
    ],
    heroImageLabel: 'Neurofeedback Therapy',
    heroImageSrc: qeegHero,
    heroImageAlt: 'Patient participating in clinician-guided neurofeedback training session',
  },
  {
    slug: 'multidisciplinary-rehab',
    path: '/multidisciplinary-rehab',
    pageTitle: 'Multidisciplinary Rehabilitation — Texas NeuroTrauma Institute',
    domain: 'Rehabilitation',
    heroTitle: 'Multidisciplinary',
    heroTitleAccent: 'Rehabilitation',
    tagline: 'Coordinated rehabilitation across therapy disciplines for neurotrauma recovery.',
    heroIntro:
      'Recovery after traumatic brain injury and concussion often requires more than one form of care. Multidisciplinary rehabilitation coordinates physical therapy, vestibular therapy, speech therapy, occupational therapy, behavioral health, pain management, and specialty providers around a shared clinical plan — so patients are not left navigating fragmented care alone.',
    expertTitle: 'Who Multidisciplinary Rehabilitation Is For',
    expertBody:
      'Coordinated rehabilitation may be appropriate when recovery involves several symptom areas or requires more than one therapy discipline.',
    expertItems: [
      'Combined physical, cognitive, or vestibular symptoms',
      'Communication, mood, pain, or daily-living challenges',
      'Multiple therapy recommendations that need coordination',
      'Changing needs across different stages of recovery',
    ],
    offeringsEyebrow: 'Coordinated Rehab',
    offeringsTitle: 'What Multidisciplinary Rehabilitation Includes',
    offeringsIntro:
      'Care coordination across disciplines to support function, independence, and quality of life after neurological trauma.',
    offerings: [
      { title: 'Physical & Vestibular Therapy Coordination', body: 'Support for mobility, balance, dizziness, and physical recovery needs following head injury.' },
      { title: 'Speech & Cognitive Communication Therapy', body: 'Coordination of therapy for language, communication, and cognitive-communication challenges when indicated.' },
      { title: 'Occupational Therapy Collaboration', body: 'Support for return to daily activities, work tasks, and functional independence.' },
      { title: 'Behavioral Health Integration', body: 'Coordination with counseling and behavioral health resources for mood, adjustment, and resilience after injury.' },
      { title: 'Pain Management & Specialty Referral', body: 'Collaboration with pain management and other specialty providers when headache, musculoskeletal, or related symptoms require focused care.' },
      { title: 'Unified Progress Review', body: 'Ongoing alignment of rehabilitation goals with physician recommendations and diagnostic findings.' },
    ],
    whyChooseIntro:
      'Multidisciplinary care works when someone is responsible for connecting the pieces. That is the role of our institute model.',
    whyChoose: [
      { title: 'Physician-Directed Coordination', body: 'Rehabilitation priorities are guided by clinical evaluation rather than disconnected referrals.' },
      { title: 'Whole-Person Focus', body: 'Physical, cognitive, vestibular, emotional, and functional needs are considered together.' },
      { title: 'Clear Care Pathways', body: 'Patients understand which therapies are recommended and why.' },
      { title: 'Continuity Across Recovery Stages', body: 'Plans evolve as symptoms improve and goals shift toward work, school, and daily life.' },
    ],
    approachTitle: 'How the Care Team Coordinates Recovery',
    approachBody:
      'Therapy disciplines are organized around physician findings, shared functional goals, and regular progress review so patients are not left navigating disconnected care.',
    approachItems: [
      'A shared physician-directed rehabilitation plan',
      'Clear roles across therapy disciplines',
      'Unified functional goals and progress review',
      'Adjustments as recovery needs change',
    ],
    heroImageLabel: 'Multidisciplinary Rehabilitation',
    heroImageSrc: memoryRehabHero,
    heroImageAlt: 'Rehabilitation specialists coordinating multidisciplinary care for a neurotrauma patient',
  },
];

export function getServiceBySlug(slug: string): ServicePageContent | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export function getServiceByPath(path: string): ServicePageContent | undefined {
  return ALL_SERVICES.find((s) => s.path === path);
}
