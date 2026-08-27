# Thesis Governance Appendix Crosswalk: Proposed Breast-Cancer/FedProx Study

**Status:** Documentation-only crosswalk for the integrated source-only thesis manuscript. It identifies where the data-governance record can be cited or summarized without converting a proposed study or blank review aid into authorization, data use, or an empirical result. It does not amend the manuscript, register a study, or create new evidence.

> **Required thesis boundary:** The supplied dataset candidates remain `ineligible` for data use. The study remains proposed and unexecuted. No dataset asset, model, training run, inference output, metric, update, submission, aggregation, deployment, runtime artifact, clinical activity, or privacy outcome exists in this branch.

## 1. Purpose and use rule

This appendix helps the thesis writer and reviewer preserve a clear distinction between two kinds of record. The governance documents describe why a future empirical study cannot begin yet and what independent decisions would be required. The integrated manuscript describes the source-only contribution, its limitations, and the future-work boundary. Neither group of documents demonstrates rights, consent, approval, provenance, license sufficiency, data quality, model performance, privacy, clinical value, hospital integration, deployment, or runtime behavior.

The crosswalk may be cited as an editorial traceability aid. It must not be used to imply that an external authority has reviewed, completed, or approved the blank fields in any governance document.

## 2. Source-record to thesis-section crosswalk

| Governance record | Status represented | Thesis section(s) | Claim-safe use | Language that must be avoided |
|---|---|---|---|---|
| Public metadata and eligibility review | All candidates remain `ineligible`; public-page review only. | 1.3 Scope and contribution; 3.4 Validity, quality, and ethics considerations; 5.2 Explicit non-results; 6.1 Limitations. | State that public page information was reviewed only and did not establish data-use eligibility. | “The dataset was acquired,” “the data were reviewed,” or “the license allowed the study.” |
| Independent data-use governance dossier | Required authority, rights, governance, isolation, and analysis-plan gates remain unresolved. | 1.2 Research question and objectives; 3.3 Analysis plan and interpretation rule; 3.4; 6.2 Independently governed future work. | State that the study is default-closed pending independently evidenced gate decisions. | “Governance approval was obtained,” “data protection was ensured,” or “the project is ready for patient data.” |
| Authority-ready data-use decision worksheet | Blank, non-authoritative fields only; no decision recorded. | 4.2 Evidence traceability; 5.2; 6.2. | State that a blank reviewer worksheet exists to support a future independent process. | “The reviewer signed off,” “the study was authorized,” or “the worksheet proves compliance.” |
| Supervisor governance handoff | Documentation-only routing note; no authority decision made. | 1.4 Thesis organization; 3.4; 6.2. | State that the handoff identifies the accountable review route without requesting access. | “The supervisor approved use,” “the handoff grants permission,” or “institutional approval exists.” |
| Blank pre-empirical protocol-registration checklist | Study-design fields are blank; proposed and non-executing only. | 2.1 FedProx as proposed protocol context; 3.1 Methodological positioning; 3.2 Source-only procedure; 3.3; 5.2; 6.2. | State that questions, design, model, evaluation, reproducibility, and reporting choices must be prespecified before execution. | “The protocol was registered,” “the model was specified and tested,” or “the evaluation plan was executed.” |

## 3. Chapter-level placement guide

| Chapter | Recommended placement | Permitted thesis function | Mandatory boundary statement |
|---|---|---|---|
| Chapter 1: Introduction | Scope and contribution section. | Explain why the thesis reports a source-only governance and traceability contribution rather than a clinical or performance study. | No dataset asset or empirical study was accessed or executed. |
| Chapter 2: Related Work and Positioning | Governance context subsection. | Position external FedProx and healthcare literature as context for a future study, not as this project’s result. | Published results are not evidence that this project achieved comparable outcomes. |
| Chapter 3: Methodology | Methodological positioning, procedure, analysis rule, and ethics/quality subsections. | Describe the default-closed sequence: independent data-use gates and protocol decisions must precede future empirical work. | The checklist and worksheet are preparatory records, not completed approvals or methods execution. |
| Chapter 4: Bounded Implementation and Traceability | Evidence traceability subsection or a thesis appendix pointer. | Link each governance artifact to the claim it constrains and the evidence it does not provide. | Local source-only controls do not become data intake, privacy, hospital, or runtime proof. |
| Chapter 5: Results and Discussion | Explicit non-results and discussion. | Explain that the governance record prevents unsupported empirical claims and records why no performance result is reported. | No training, inference, metric, update, submission, or aggregation result is available. |
| Chapter 6: Limitations, Future Work, and Conclusion | Independently governed future-work section. | State the required order of independent authority, rights, governance, protocol, and only then a separate technical decision. | Future work remains conditional; it is neither approved nor started. |

## 4. Evidence taxonomy for thesis editing

| Evidence category | Present in the thesis-support record | Not present in the thesis-support record |
|---|---|---|
| Documentation evidence | Public-page metadata review boundary, governance gates, blank review worksheets, supervisor-routing note, blank protocol checklist, and chronological dossier entries. | Independent approvals, primary-source rights findings, license conclusions, consent records, or data-protection determinations. |
| Local source-only engineering evidence | Deterministic generated-marker controls and their local evidence record. | Patient-data detection, transfer prevention in a live system, data-loss prevention, privacy proof, hospital integration, or production operation. |
| Empirical evidence | None. | Dataset acquisition, data inspection, preprocessing, model construction, training, inference, performance evaluation, comparisons, metrics, or statistical results. |
| Operational evidence | None for the data-use/protocol branch. | Authorized research environment, credentials, access process, deployment, runtime use, hospital workflow, or clinical evaluation. |

## 5. Claim-control wording

The following wording is appropriate when the thesis needs to explain the governance record:

> “Public listing information was reviewed only; the candidates remained ineligible for data use pending independent rights, governance, and protocol decisions.”

> “The work provides documentation-first traceability for a proposed study and does not report dataset access, model training, or empirical performance.”

> “Blank governance and protocol records identify decisions that must precede a future study; they are not evidence that those decisions have been made.”

The thesis must not describe a candidate as “used,” “validated,” “approved,” “licensed for this research,” “private,” “de-identified,” “secure,” “clinically suitable,” or “performance-tested” unless independent evidence for that exact claim is separately obtained, reviewed, and cited in a new bounded record.

## 6. Editorial review checklist

| Check | Required editorial outcome |
|---|---|
| Dataset references | Identify candidates only as public-page-review candidates unless independent records establish more. |
| Governance language | Use `ineligible`, `unassigned`, `unresolved`, `proposed`, or `not executed` where applicable. |
| Results language | Preserve the explicit absence of data/model, training, inference, metric, update, submission, aggregation, clinical, privacy, deployment, and runtime results. |
| Citations | Cite the governance record for the project’s boundary; cite literature only for external context. |
| Future-work language | Express a conditional sequence, not a commitment, authorization, or prediction. |

## 7. Appendix closure

This crosswalk is complete as an editorial aid. It does not create a study protocol, alter the current `ineligible` candidate status, or enable any data/model action. Any future independent authority record must be reviewed in a new documentation increment before the thesis or project makes a stronger statement.

## References

[1] [Integrated six-chapter source-only thesis manuscript](./SYNTHETIC_FEDPROX_THESIS_INTEGRATED_MANUSCRIPT.md)

[2] [Public metadata and eligibility review](./KAGGLE_BREAST_CANCER_DATASET_PUBLIC_METADATA_AND_ELIGIBILITY_REVIEW.md)

[3] [Independent data-use governance dossier](./KAGGLE_BREAST_CANCER_DATASET_INDEPENDENT_DATA_USE_GOVERNANCE_DOSSIER.md)

[4] [Authority-ready data-use decision worksheet](./KAGGLE_BREAST_CANCER_DATASET_DATA_USE_DECISION_WORKSHEET.md)

[5] [Supervisor governance handoff](./KAGGLE_BREAST_CANCER_DATASET_SUPERVISOR_GOVERNANCE_HANDOFF.md)

[6] [Blank pre-empirical protocol-registration checklist](./SYNTHETIC_FEDPROX_PREEMPIRICAL_PROTOCOL_REGISTRATION_CHECKLIST.md)
