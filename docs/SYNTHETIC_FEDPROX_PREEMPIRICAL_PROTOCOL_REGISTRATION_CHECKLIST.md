# Blank Pre-Empirical Protocol-Registration Checklist: Proposed Breast-Cancer/FedProx Study

**Document status:** Blank, documentation-only preparation checklist. It records the decisions that an independently governed study would need to settle before any data access, model construction, training, inference, metric calculation, update creation, submission, aggregation, deployment, or runtime activity is considered. It is not a study registration, protocol approval, ethics approval, data-use authorization, implementation specification, or empirical result.

> **Current posture:** The study remains proposed and unexecuted. All supplied dataset candidates remain `ineligible` for data use. No dataset asset, model, training run, inference output, metric, update, submission, aggregation, deployment, or runtime artifact exists in this branch.

## 1. Registration identity and authority

| Field | Required entry |
|---|---|
| Protocol reference | `[blank — assigned by the responsible authority]` |
| Study title | `[blank]` |
| Protocol version and date | `[blank]` |
| Principal research role | `[blank]` |
| Supervisor or accountable academic authority | `[blank]` |
| Governance / ethics / data-protection decision reference | `[blank]` |
| Protocol status | `not registered; no action authorized` |
| Re-review, amendment, and expiry condition | `[blank]` |

## 2. Question, rationale, and evidence boundary

The research question, rationale, hypotheses, and intended contribution must be written before data or model activity. They must distinguish the proposed empirical study from the completed source-only documentation and deterministic local-control records. Published literature may provide context, but it may not be transferred as an observed result for this project.

| Protocol element | Required pre-registered content |
|---|---|
| Primary question | `[blank]` |
| FedProx rationale and intended comparison | `[blank]` |
| Hypotheses | `[blank]` |
| Scope and population/setting statement | `[blank]` |
| Existing evidence that may be cited as contextual only | `[blank]` |
| Explicit non-claims | `No clinical effectiveness, privacy, hospital-integration, or deployment claim without separately obtained evidence.` |

## 3. Independent data-use gate

No protocol field below becomes actionable until the candidate passes the independent data-use gate. The public metadata review, governance dossier, decision worksheet, and supervisor handoff currently provide no positive gate outcome.

| Prerequisite | Required independent record | Current status |
|---|---|---|
| Named authority and study responsibility | Written accountable authority decision. | `unassigned` |
| Primary-source provenance and rights chain | Verified original-source and permitted-use analysis. | `unresolved` |
| License conditions | Review for exact intended use, derivatives, retention, reporting, and sharing. | `unresolved` |
| Ethics and data protection | Applicable review of consent, privacy, safeguards, and retention. | `unassigned` |
| Data-management and isolated environment | Approved minimization, access, handling, retention, and disposal design. | `unassigned` |
| Candidate-specific eligibility | Positive independent decision for the exact purpose and protocol. | `ineligible` |

## 4. Proposed design fields

The following fields are intentionally blank. They do not define an executed experiment, identify a dataset asset, or authorize a model operation.

| Design item | Required pre-registered content |
|---|---|
| Study design and unit of analysis | `[blank]` |
| Participant/site/client eligibility criteria | `[blank]` |
| Inclusion and exclusion criteria | `[blank]` |
| Data split strategy and leakage controls | `[blank]` |
| Client heterogeneity rationale and characterization plan | `[blank]` |
| Baseline method(s) | `[blank]` |
| Proposed FedProx configuration and selection rationale | `[blank]` |
| Preprocessing and augmentation plan | `[blank]` |
| Stopping criteria and change-control process | `[blank]` |

## 5. Model, training, and federation fields

No model, training data, client, or round has been created. The fields below must be prespecified, reproducible, proportionate to the independently approved study, and separately reviewed before any execution is considered.

| Item | Required pre-registered content |
|---|---|
| Model family and version | `[blank]` |
| Initialization, hyperparameters, and search limits | `[blank]` |
| Local training schedule and resource limits | `[blank]` |
| Federation/client sampling plan | `[blank]` |
| Aggregation configuration and failure handling | `[blank]` |
| Privacy and security controls to be evaluated | `[blank — no privacy conclusion may be implied]` |
| Update, submission, and aggregation authorization boundary | `[blank — no authorization exists]` |

## 6. Evaluation and statistical-analysis fields

Metrics, effect thresholds, statistical methods, subgroup policy, and reporting rules must be fixed before any evaluation. The registration must distinguish model evaluation from clinical validation and must not use a metric alone as evidence of clinical suitability, fairness, privacy, safety, or deployment readiness.

| Item | Required pre-registered content |
|---|---|
| Primary outcome and metric | `[blank]` |
| Secondary outcomes and metrics | `[blank]` |
| Comparator(s) | `[blank]` |
| Statistical-analysis method | `[blank]` |
| Sample-size or power rationale | `[blank]` |
| Uncertainty intervals and reporting thresholds | `[blank]` |
| Missing-data and failed-run policy | `[blank]` |
| Subgroup, bias, and fairness analysis plan | `[blank]` |
| Error analysis and clinical-interpretation boundary | `[blank]` |

## 7. Reproducibility, transparency, and limitations

| Item | Required pre-registered content |
|---|---|
| Version-control, environment, and dependency record | `[blank]` |
| Randomness, seeds, and deterministic-replay policy | `[blank]` |
| Data-management and reproducibility access controls | `[blank]` |
| Planned artefacts and permitted reporting outputs | `[blank]` |
| Limitations and external-validity plan | `[blank]` |
| Amendment and deviation-reporting policy | `[blank]` |
| Independent review checkpoints | `[blank]` |

## 8. Mandatory non-execution and closure conditions

The protocol must remain non-executing if any required authority, rights, license, governance, data-protection, isolation, study-design, model, evaluation, reproducibility, or reporting field is absent, ambiguous, expired, or inconsistent. A closure event means no workaround, no replacement candidate, no informal access, no unregistered model iteration, and no post hoc metric selection.

The documentation site and source-only Hospital Node Agent must not collect, access, download, open, copy, process, inspect, store, transfer, train on, infer from, evaluate, upload, submit, aggregate, deploy, or run any data or model workload under this checklist.

## 9. Independent sign-off record

These fields must remain blank until completed by the responsible independent process. A signature or approval must not be simulated, inferred, or pre-filled.

| Record | Independent authority entry |
|---|---|
| Gate outcome | `[blank]` |
| Conditions and scope | `[blank]` |
| Effective date and expiry | `[blank]` |
| Amendment trigger | `[blank]` |
| Responsible authority | `[blank]` |
| Evidence reference | `[blank]` |

## References

[1] [Thesis pre-empirical evaluation readiness protocol](./SYNTHETIC_FEDPROX_PREEMPIRICAL_EVALUATION_READINESS_PROTOCOL.md)

[2] [Public metadata and eligibility review](./KAGGLE_BREAST_CANCER_DATASET_PUBLIC_METADATA_AND_ELIGIBILITY_REVIEW.md)

[3] [Independent data-use governance dossier](./KAGGLE_BREAST_CANCER_DATASET_INDEPENDENT_DATA_USE_GOVERNANCE_DOSSIER.md)

[4] [Authority-ready data-use decision worksheet](./KAGGLE_BREAST_CANCER_DATASET_DATA_USE_DECISION_WORKSHEET.md)

[5] [Supervisor governance handoff](./KAGGLE_BREAST_CANCER_DATASET_SUPERVISOR_GOVERNANCE_HANDOFF.md)
