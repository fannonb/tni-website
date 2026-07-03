# SITE SPEC: Texas NeuroTrauma Institute

> Source-of-truth content file for building the website. Each page block below contains: url, seo target, status, ready-to-use copy, and outstanding TODOs. `status: ready` = copy can be used as-is. `status: draft` = talking points only, needs real copy. `status: missing` = no content provided, placeholder needed.

---

## GLOBAL

```yaml
brand_name: Texas NeuroTrauma Institute
tagline: "Advanced Neurotrauma Diagnostics & Functional Restoration"
sub_tagline: "Objective Brain Mapping. Evidence-Based Care. Forensic-Grade Documentation."
legal_entity: Randdolf Physicians PLLC
parent_brand: StarMED Clinic
brand_hierarchy: "Randdolf Physicians PLLC > StarMED Clinic > Texas NeuroTrauma Institute (specialty division)"
footer_line: "Texas NeuroTrauma Institute — Advancing the Standard of Neurotrauma Care in Texas"
disclosure_line: "Texas NeuroTrauma Institute — A Division of StarMED Clinic — Randdolf Physicians PLLC"
```

```yaml
brand_voice:
  approved_terms:
    - Objective
    - Evidence-based
    - Physician-directed
    - Functional restoration
    - Structured documentation
    - Neurotrauma evaluation
    - Brain injury recovery
    - Neurofunctional diagnostics
  banned_terms:
    - "Guaranteed results"
    - "Maximize settlement"
    - "Attorney-friendly"
    - "Fast cash treatment"
    - "Trauma center"
    - "Emergency trauma services"
  positioning_rule: >
    Always present as a high-specialty OUTPATIENT neurotrauma center.
    Never imply hospital-level, ER, or academic-accreditation status.
    Applies to titles, meta descriptions, alt text, and body copy.
  physician_title_options:
    - Neurotrauma Physician
    - Brain Injury Medicine Physician
    - Physician — Neurotrauma and Concussion Care
    - Medical Director — Texas NeuroTrauma Institute
  physician_title_avoid:
    - "Trauma Specialist"
```

```yaml
technical_requirements:
  schema_markup: [MedicalOrganization, Physician]
  ssl: required
  accessibility: ADA compliant
  performance: "page load < 2.5s"
  url_structure: clean, kebab-case
  blog_cadence: "2 articles/month, author bio required on every article"
  internal_linking: "Conditions <-> Diagnostics <-> For Attorneys"
```

```yaml
global_todos:
  - Physician full name, credentials, headshot, bio
  - Clinic phone number
  - Clinic email
  - Physical address(es) — Houston, San Antonio confirmed as planned locations
  - Scheduling/booking tool to embed at /schedule
  - Confirm PLLC / DBA / assumed-name filing status before publishing entity language publicly
  - Attorney case-review portal URL
```

---

## PAGE: Homepage

```yaml
url: /
keyword: "Traumatic Brain Injury Evaluation Texas"
status: ready
```

**Hero**
```
H1: Texas NeuroTrauma Institute
H2: Advanced Neurotrauma Diagnostics & Functional Restoration
Subhead: Objective Brain Mapping. Evidence-Based Care. Forensic-Grade Documentation.
Body: Physician-directed specialty center dedicated to the comprehensive evaluation and treatment of traumatic brain and neurological injury across Texas.
CTA 1: Request Evaluation
CTA 2: Attorney Referral Portal
```

**Authority statement**
```
Precision in Diagnosis. Integrity in Documentation.

Texas NeuroTrauma Institute provides structured, medically defensible evaluation and management of:
- Traumatic Brain Injury (TBI)
- Concussion & Post-Concussive Syndrome
- Motor Vehicle–Related Neurological Injury
- Cognitive Impairment After Trauma
- Trauma-Associated Headache & Migraine
- Functional Neurocognitive Decline

Our model integrates objective diagnostics with evidence-based medical management to restore cognitive performance and functional capacity.
```

**Differentiator list (icon row / feature grid)**
```
- Physician-Led Brain Injury Care
- Advanced Neurofunctional Evaluation
- Quantitative EEG Brain Mapping
- Individualized Recovery Strategies
- Objective Clinical Documentation
```

**Conditions teaser (links to /conditions)**
```
- Concussion
- Mild Traumatic Brain Injury (mTBI)
- Post-Concussion Syndrome
- Head Injury After Motor Vehicle Accident
- Persistent Headache After Trauma
- Dizziness and Balance Dysfunction
- Cognitive Dysfunction After Injury
```

```yaml
todo:
  - Final CTA links (booking tool, attorney portal)
  - Hero image / photography direction
```

---

## PAGE: About

```yaml
url: /about
keyword: "Neurotrauma Institute Texas"
status: draft
sections: [Medical Director, Clinical Philosophy, Documentation Standards, Evidence-Based Model, Institutional Mission]
```

**Mission statement (ready)**
```
Texas NeuroTrauma Institute exists to provide precise clinical evaluation, advanced neurodiagnostics, and targeted recovery strategies for patients suffering from traumatic brain injury and post-concussive neurological dysfunction.

Our mission is to restore neurological function, cognitive clarity, and quality of life through physician-directed care, advanced brain mapping technology, and individualized neurorehabilitation strategies.
```

```yaml
todo:
  - Medical Director bio, credentials, headshot
  - Clinical Philosophy copy
  - Documentation Standards copy
  - Evidence-Based Model copy
```

---

## PAGE: Conditions (hub)

```yaml
url: /conditions
keyword: "Traumatic Brain Injury Treatment Texas"
status: draft
intro_copy: "reuse homepage 'Conditions We Evaluate' list as hub intro"
```

### Subpages (all status: missing — clinical content, needs physician review before publishing)

```yaml
- url: /conditions/traumatic-brain-injury
  keyword: "Traumatic Brain Injury Doctor Texas"
  status: missing
- url: /conditions/post-concussion-syndrome
  keyword: "Post Concussion Syndrome Treatment Texas"
  status: missing
- url: /conditions/motor-vehicle-brain-injury
  keyword: "Brain Injury After Car Accident Texas"
  status: missing
- url: /conditions/whiplash-neurological-symptoms
  keyword: "Neurological Symptoms After Whiplash"
  status: missing
- url: /conditions/persistent-headache-after-accident
  keyword: "Headache After Car Accident"
  status: missing
```

```yaml
todo:
  - Clinical description, symptoms, and evaluation approach per condition (physician-authored/reviewed — this is medical claims content)
```

---

## PAGE: Diagnostics (hub)

```yaml
url: /diagnostics
keyword: "Objective Brain Testing Texas"
status: ready
```

**Hub copy (ready)**
```
Our institute utilizes quantitative EEG (qEEG) brain mapping to evaluate functional brain activity and identify dysregulated neural networks that may contribute to persistent symptoms following head trauma.

This advanced neurodiagnostic tool allows physicians to develop more precise treatment strategies tailored to each patient.

Purpose: Identify functional brain dysregulation that is not visible on CT or MRI.
```

### Subpages

```yaml
- url: /diagnostics/qeeg-brain-mapping
  keyword: "qEEG Brain Mapping Texas"
  status: draft
  must_include: [What qEEG is, Clinical indications, Medical necessity language, "What qEEG is NOT (compliance safeguard)"]
- url: /diagnostics/neurocognitive-testing
  keyword: "Neurocognitive Testing Texas"
  status: missing
- url: /diagnostics/functional-impairment-assessment
  keyword: "Functional Impairment Evaluation Texas"
  status: missing
```

```yaml
todo:
  - Full copy for all 3 subpages
  - "What qEEG is NOT" language needs physician sign-off — medico-legal exposure if overstated
```

---

## PAGE: Treatment

```yaml
url: /treatment/...
keyword: null
status: missing
tone: "educational + authoritative; avoid treatment guarantee language"
```

```yaml
subpages:
  - /treatment/neurotrauma-management
  - /treatment/neurofeedback
  - /treatment/headache-management
  - /treatment/ultrasound-guided-injections
```

**Seed copy — treatment philosophy (usable as intro across subpages)**
```
Our treatment philosophy focuses on restoring neurological function through:
- targeted medical management
- neurofeedback therapy
- symptom stabilization protocols
- cognitive recovery strategies
- individualized care planning
```

```yaml
todo:
  - Full copy for all 4 treatment subpages
```

---

## PAGE: For Attorneys

```yaml
url: /for-attorneys
keyword: "TBI Expert Witness Texas"
status: ready
```

**Section copy (ready)**
```
Texas NeuroTrauma Institute provides objective clinical evaluation and medical documentation for patients suffering neurological symptoms following motor vehicle accidents and other traumatic events.

Our reports focus on: mechanism of injury analysis, clinical findings, symptom progression, functional impairment documentation.

Texas NeuroTrauma Institute provides:
- Structured causation analysis
- Functional impairment documentation
- Treatment rationale supported by medical literature
- Clearly separated clinical vs forensic billing
- Expert medical reporting (when retained)

We prioritize clinical integrity and objective medical analysis.
```

```yaml
required_subsections_missing_copy:
  - Referral Process
  - Clinical vs Forensic Distinction
  - Report Types Offered
  - Fee Structure (request form only — do not publish pricing)
  - Retention Process
cta_elements:
  - "Download Referral Packet -> links to Attorney Referral Packet PDF"
  - "Secure Case Review Portal (URL needed)"
```

---

## PAGE: Clinical Standards

```yaml
url: /clinical-standards
keyword: null
status: missing
purpose: "Establishes institutional/courtroom credibility"
sections: [Evidence-based protocols, Structured SOAP methodology, ICD-10 compliance, Peer-reviewed references]
```

```yaml
todo:
  - All body content — should be physician-authored, carries legal weight
```

---

## PAGE: Locations

```yaml
url: /locations
keyword: null
status: missing
planned_locations: [Houston, San Antonio]
note: "Each location gets its own SEO subpage"
```

```yaml
todo:
  - Confirmed addresses, hours, phone per location, map embeds
```

---

## PAGE: Resources / Blog

```yaml
url: /resources
keyword: null
status: ready
cadence: "2 articles/month"
requirement: "author bio on every post"
```

**Starter topics**
```
- What Is Post-Concussion Syndrome?
- Does Brain Injury Show on MRI?
- Objective Testing After Car Accident
- How Long Do Concussion Symptoms Last?
- Understanding Cognitive Impairment After Trauma
```

---

## PAGE: Schedule Appointment

```yaml
url: /schedule
keyword: null
status: missing
```

```yaml
todo:
  - Scheduling tool/system to embed or link
```

---

## NON-PAGE ASSETS (downloadable, referenced from /for-attorneys)

```yaml
- name: Attorney Referral Packet
  format: PDF download
  status: ready
  structure: [Cover page, Introduction letter, Services Available, Clinical Documentation Provided, Why This Matters, Referral Process, Contact block]
  intro_copy: >
    Dear Counselor, Texas NeuroTrauma Institute provides physician-directed evaluation and treatment
    for patients experiencing neurological symptoms following traumatic injury, particularly motor
    vehicle accidents and concussive events. Many individuals with traumatic brain injury experience
    persistent neurological symptoms despite normal structural imaging studies such as CT or MRI scans.
    Our institute focuses on identifying functional neurological disturbances and documenting clinical
    findings through detailed physician evaluation.
  todo: "Contact block (phone/email/website) — currently blank in source notes"

- name: Forensic Neurotrauma Report Template
  format: internal clinical/legal template, not a public page
  status: reference_only
  sections: [Purpose, Materials Reviewed, History of Present Illness, Neurological Exam Findings, Diagnostic Testing, Diagnostic Impression, Causation Analysis, Functional Impairment Assessment, Treatment Recommendations, Statement of Independence]
  site_usage: "Reference on /for-attorneys that this report format exists and is available upon retention"
```
