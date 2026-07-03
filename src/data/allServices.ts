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
    expertTitle: 'Accurate diagnosis is the foundation of effective treatment.',
    expertBody:
      'At Texas NeuroTrauma Institute, our specialists perform comprehensive NCV and EMG testing to accurately diagnose a wide range of neuromuscular conditions. These studies provide valuable information that guides treatment decisions, supports rehabilitation planning, and helps patients receive timely, targeted care.',
    offeringsEyebrow: 'Diagnostic Services',
    offeringsTitle: 'Our NCV & EMG Services',
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
    approachTitle: 'Identifying the source of dysfunction',
    approachTitleAccent: 'is essential to the best outcomes.',
    approachBody:
      'At Texas NeuroTrauma Institute, our NCV and EMG evaluations are performed with precision, interpreted by experienced specialists, and integrated into a comprehensive treatment strategy tailored to each patient\'s unique needs. Whether you are experiencing numbness, tingling, weakness, chronic pain, or loss of muscle function, our team is committed to providing accurate diagnoses, compassionate care, and evidence-based treatment recommendations that help restore mobility, improve function, and enhance your quality of life.',
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
    expertTitle: 'Accurate diagnosis begins with understanding the brain\'s electrical activity.',
    expertBody:
      'At Texas NeuroTrauma Institute, we utilize advanced EEG technology as part of a comprehensive neurological evaluation. Our experienced specialists perform detailed brainwave assessments to support accurate diagnosis, guide treatment decisions, and monitor neurological health over time.',
    offeringsEyebrow: 'Neurodiagnostic Services',
    offeringsTitle: 'Our Electroencephalography (EEG) Services',
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
    approachTitle: 'EEG is an essential component of',
    approachTitleAccent: 'comprehensive neurological care.',
    approachBody:
      'We combine advanced brainwave testing with expert clinical interpretation to provide accurate diagnoses and develop individualized treatment strategies that support each patient\'s neurological health. Whether evaluating seizures, unexplained neurological symptoms, or monitoring ongoing treatment, our goal is to provide timely, evidence-based care that helps patients receive the answers they need and the treatment they deserve.',
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
      'Brain mapping is an advanced diagnostic process that evaluates patterns of brain activity to provide a detailed understanding of how different regions of the brain are functioning. At Texas NeuroTrauma Institute, brain mapping is used to identify functional changes associated with traumatic brain injuries, concussions, neurological disorders, and cognitive challenges.',
    expertTitle: 'A deeper understanding of brain function supports better outcomes.',
    expertBody:
      'Using advanced neurodiagnostic technology, including Quantitative Electroencephalography (qEEG), our clinicians analyze brainwave activity to gain objective insights that complement neurological examinations, neurocognitive testing, and neuropsychological evaluations.',
    offeringsEyebrow: 'Functional Neurodiagnostics',
    offeringsTitle: 'Our Brain Mapping Services',
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
    approachTitle: 'Understanding how the brain is functioning',
    approachTitleAccent: 'improves patient care.',
    approachBody:
      'At Texas NeuroTrauma Institute, brain mapping is more than creating an image of brain activity—it is about understanding how the brain is functioning and using that knowledge to improve patient care. By combining advanced brain mapping technology with comprehensive clinical evaluations, we gain meaningful insights that help guide diagnosis, treatment, rehabilitation, and long-term recovery.',
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
      'Quantitative Electroencephalography (qEEG), commonly known as brain mapping, is an advanced, non-invasive diagnostic tool that measures and analyzes the brain\'s electrical activity. By identifying patterns in brainwave function, qEEG provides valuable information that can assist in evaluating neurological conditions, cognitive changes, and brain function following injury.',
    expertTitle: 'Every brain is unique.',
    expertBody:
      'At Texas NeuroTrauma Institute, qEEG is used as part of a comprehensive neurological evaluation to support clinical decision-making and develop individualized treatment strategies. When combined with a thorough medical assessment, qEEG offers deeper insight into brain function and helps guide patient-centered care.',
    offeringsEyebrow: 'Brain Mapping Services',
    offeringsTitle: 'Our qEEG Services',
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
    approachTitle: 'Effective neurological care begins with',
    approachTitleAccent: 'understanding brain function.',
    approachBody:
      'At Texas NeuroTrauma Institute, qEEG is one of several advanced diagnostic tools we use to better evaluate cognitive and neurological health, particularly in patients recovering from traumatic brain injuries, concussions, and other neurological conditions. By combining brain mapping with expert clinical evaluation and multidisciplinary care, we provide patients with accurate diagnoses, informed treatment recommendations, and ongoing support throughout their recovery journey.',
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
      'Neurocognitive testing provides an objective evaluation of how the brain is functioning by measuring key cognitive abilities such as memory, attention, processing speed, language, and executive functioning. At Texas NeuroTrauma Institute, we use comprehensive neurocognitive assessments to identify cognitive changes resulting from traumatic brain injuries, concussions, neurological disorders, stroke, and other conditions affecting brain health.',
    expertTitle: 'Your cognitive health is essential.',
    expertBody:
      'Our testing helps patients and healthcare providers better understand cognitive performance, establish accurate diagnoses, monitor recovery, and develop personalized treatment plans that support optimal neurological outcomes. Early assessment can lead to earlier intervention and better long-term recovery.',
    offeringsEyebrow: 'Cognitive Assessment',
    offeringsTitle: 'Our Neurocognitive Testing Services',
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
    approachTitle: 'Every patient\'s cognitive profile',
    approachTitleAccent: 'is unique.',
    approachBody:
      'We take a personalized approach to neurocognitive testing, combining advanced assessment tools with clinical expertise to identify strengths, uncover challenges, and create a roadmap for recovery. At Texas NeuroTrauma Institute, our goal is not only to evaluate brain function but to provide the information needed to support effective treatment, monitor progress, and help patients regain confidence, independence, and the highest possible quality of life.',
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
      'Neuropsychology explores how the brain influences thinking, memory, emotions, and behavior. At Texas NeuroTrauma Institute, our neuropsychology specialists provide comprehensive evaluations and personalized treatment plans to help individuals understand and overcome the cognitive, emotional, and behavioral challenges that can arise from neurological conditions and traumatic brain injuries.',
    expertTitle: 'Compassionate, evidence-based care for cognitive and emotional recovery.',
    expertBody:
      'Whether symptoms are the result of a concussion, traumatic brain injury, stroke, neurological disorder, or other medical condition, our team is committed to delivering care that supports recovery and improves quality of life.',
    offeringsEyebrow: 'Neuropsychological Care',
    offeringsTitle: 'Our Neuropsychology Services',
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
    approachTitle: 'Recovery involves more than treating symptoms—',
    approachTitleAccent: 'it requires understanding the whole person.',
    approachBody:
      'Our neuropsychology team combines advanced diagnostic evaluations, individualized cognitive rehabilitation, patient education, and collaborative care to help patients regain confidence, maximize independence, and achieve the best possible outcomes. At Texas NeuroTrauma Institute, we are committed to helping patients navigate the challenges of neurological injury and cognitive change with expertise, compassion, and a clear path toward recovery.',
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
    expertTitle: 'Effective headache treatment restores comfort and daily quality of life.',
    expertBody:
      'Our headache treatment options are designed to reduce pain and improve function through minimally invasive, research-backed techniques tailored to each patient\'s condition and recovery goals.',
    offeringsEyebrow: 'Pain Management',
    offeringsTitle: 'Our Headache Treatment Services',
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
    approachTitle: 'A holistic approach to',
    approachTitleAccent: 'headache relief.',
    approachBody:
      'At Texas NeuroTrauma Institute, we believe in combining nerve blocks, Botox therapy, and other advanced treatments to provide effective relief tailored to each patient\'s condition. Our goal is to minimize pain, reduce headache frequency, and improve overall well-being so patients can return to work, family life, and the activities they value most.',
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
    expertTitle: 'Emotional healing is an essential part of neurological recovery.',
    expertBody:
      'At Texas NeuroTrauma Institute, our Counseling Services provide compassionate, evidence-based support to help patients and their families navigate these challenges. Through individualized therapy and practical coping strategies, we help patients build resilience, improve emotional well-being, and regain confidence throughout their recovery journey.',
    offeringsEyebrow: 'Mental Wellness',
    offeringsTitle: 'Our Counseling Services',
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
    approachTitle: 'Neurological recovery involves',
    approachTitleAccent: 'both the brain and the mind.',
    approachBody:
      'Our counseling services are designed to help patients process the emotional impact of illness or injury while developing the skills needed to move forward with confidence. By combining evidence-based therapy, compassionate support, and collaborative neurological care, we empower patients and their families to build resilience, improve emotional health, and achieve a higher quality of life throughout every stage of recovery.',
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
    expertTitle: 'Strengthening cognitive function today builds greater independence tomorrow.',
    expertBody:
      'At Texas NeuroTrauma Institute, our Memory Training & Cognitive Rehabilitation program combines evidence-based therapeutic techniques with personalized care to improve memory, attention, executive functioning, and overall cognitive performance. Our goal is to help patients maximize their cognitive potential and achieve greater independence at home, at work, and in their communities.',
    offeringsEyebrow: 'Cognitive Rehabilitation',
    offeringsTitle: 'Our Memory & Cognitive Rehab Services',
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
    approachTitle: 'Cognitive rehabilitation is about',
    approachTitleAccent: 'living more independently and confidently.',
    approachBody:
      'Our comprehensive approach combines therapeutic exercises, individualized coaching, practical compensatory strategies, and ongoing progress monitoring to support meaningful cognitive recovery. Whether recovering from a brain injury, managing a neurological condition, or addressing age-related cognitive changes, our Memory Training & Cognitive Rehabilitation program is designed to help patients strengthen their cognitive abilities, improve everyday function, and achieve the highest possible quality of life.',
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
    expertTitle: 'Early evaluation is one of the most important steps toward protecting your brain.',
    expertBody:
      'Our multidisciplinary team delivers evidence-based care focused on accurate diagnosis, symptom management, and safe recovery. We help patients achieve the best possible recovery through structured clinical assessments and individualized treatment plans designed to support every stage of healing.',
    offeringsEyebrow: 'Concussion Care',
    offeringsTitle: 'Our Concussion Evaluation & Management Services',
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
    approachTitle: 'No two concussions are alike.',
    approachTitleAccent: 'Every recovery path is unique.',
    approachBody:
      'At Texas NeuroTrauma Institute, we recognize that each patient\'s symptoms, recovery timeline, and goals are unique. Our approach combines early diagnosis, advanced neurocognitive evaluation, individualized treatment, and continuous monitoring to help patients recover with confidence. From the initial assessment through a safe return to work, school, sports, and everyday life, we are committed to delivering compassionate, evidence-based care that promotes complete recovery and long-term brain health.',
    heroImageLabel: 'Concussion Evaluation',
    heroImageSrc: concussionManagementHero,
    heroImageAlt: 'Clinician conducting a post-concussion balance and coordination examination',
  },
];

export function getServiceBySlug(slug: string): ServicePageContent | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export function getServiceByPath(path: string): ServicePageContent | undefined {
  return ALL_SERVICES.find((s) => s.path === path);
}
