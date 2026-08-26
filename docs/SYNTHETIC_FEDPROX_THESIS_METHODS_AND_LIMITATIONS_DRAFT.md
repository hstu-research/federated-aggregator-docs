# Synthetic FedProx Thesis Methodology and Limitations Draft

**Status:** Thesis-writing support draft. This text describes a documented source-only governance and contract-analysis method. It does **not** report a completed federated learning experiment, data analysis, model evaluation, hospital deployment, or clinical study.

## 1. Methodological positioning

This thesis investigates a narrow research-governance problem in federated learning: how a system can distinguish a **proposed synthetic FedProx study** from an **executed empirical result** before any trainer, dataset, model, metric, update, or aggregation action is available. The methodological contribution is therefore a contract and evidence-boundary analysis, not an accuracy or convergence evaluation.

> **Scope statement for the thesis:** The work evaluates whether source-only, descriptor-based controls can preserve a non-executing study posture. It does not evaluate whether FedProx improves breast-cancer classification or any other clinical outcome.

## 2. Research question and objectives

### Research question

Can a descriptor-only synthetic FedProx study-intent declaration distinguish a proposed breast-cancer/FedProx protocol from an executed empirical result before any trainer, data, model, metric, update, or aggregation action occurs?

### Objectives

| Objective | Operational interpretation in this draft | Evidence boundary |
|---|---|---|
| Represent study intent | Require a frozen descriptor that declares a proposed, non-executing posture. | No protocol execution, data access, or model use. |
| Prevent category errors | Reject malformed, broadened, mutable, or replayed declarations before they can be interpreted as results. | A rejection is contract behavior, not a scientific finding. |
| Preserve non-execution | Bind the absence of trainer, data/model, metric, update, submission, aggregation, and runtime activity into the source-only posture. | Absence is local-contract evidence only; it is not a privacy or clinical proof. |
| Keep external observation separate | Preserve remote quality-state observation as unattempted and default-ineligible. | No remote workflow was queried, classified, or changed. |

## 3. Study design

The design is a **documentation-first, source-only contract study**. Its unit of analysis is a frozen scalar declaration and its associated scalar receipt, not a patient record, medical image, model weight, metric value, or workflow run. The independent artifact is the declared intent; the analytic outcome is whether the declaration is accepted as a proposed non-executing study posture or terminally closed.

The design uses deterministic in-memory fixtures. Each fixture represents only an allowlisted state class and contains no dataset reference, model identifier, hyperparameter value, metric, result, credential, path, locator, provider response, or free-text diagnostic. The study intentionally does not construct a training loop, data partition, model architecture, local optimizer, update package, submission channel, or aggregation round.

## 4. Procedure

| Step | Method action | Permitted evidence | Prohibited action or claim |
|---|---|---|---|
| 1. Declare | Create one exact frozen proposed-study descriptor. | Scalar proposed/non-executing classes. | Dataset/model selection, training start, or empirical protocol execution. |
| 2. Validate | Apply a source-only validator to confirm exact shape and retained non-execution posture. | Accepted or terminal closure receipt. | Metric calculation, model inference, or clinical interpretation. |
| 3. Consume once | Pass the validated receipt to a one-use source-only consumer. | Scalar consumed or closed outcome. | Retry, replacement declaration, trainer invocation, update creation, or aggregation. |
| 4. Preserve adjacent closure | Classify remote observation as not attempted and default-ineligible. | Scalar local closure only. | Remote query, dispatch, cancellation, configuration change, or workflow modification. |
| 5. Report evidence | Record local source-quality and bounded contract behavior. | Local quality conclusion and claim boundary. | Full release certification, deployment readiness, or a completed empirical result. |

## 5. Analysis plan

The analysis is conformance-oriented. The primary question is whether the documented contract accepts only the intended frozen non-executing declaration and closes unsafe or replayed input. The following outcomes are reportable:

| Reportable outcome | Interpretation |
|---|---|
| Exact proposed-study declaration is accepted | The source-only contract distinguishes a declared proposal from malformed input. |
| Invalid or broadened declaration is closed | The contract rejects a category-breaking state before any execution capability. |
| Replay is suppressed | The contract prevents a declaration from becoming a reusable execution authorization. |
| Remote observation remains not attempted | The project preserves separation between local classification and external workflow access. |

No numeric performance analysis is permitted under this method. There are no accuracy, loss, F1, AUC, sensitivity, specificity, convergence, communication, fairness, or privacy metrics to calculate or compare. A thesis results section based on this method must state that **no empirical outcome was generated**.

## 6. Validity and quality considerations

The method emphasizes **construct validity** for the distinction between intent and execution. Exact schemas, frozen values, one-use consumption, deterministic fixtures, replay suppression, and import isolation limit the chance that a study proposal can silently become an execution-capable request. Local source-quality checks provide evidence about these bounded modules only.

Internal validity is limited because no empirical causal or comparative claim is tested. External validity is also limited: no dataset, model, institution, patient population, or hospital environment was sampled. The method is reproducible at the source-contract level, but it does not establish reproducibility of a clinical or machine-learning experiment.

## 7. Limitations

| Limitation | Consequence for the thesis |
|---|---|
| No dataset or model was accessed | The thesis cannot report data quality, preprocessing, generalizability, or model validity. |
| No training or inference occurred | The thesis cannot report predictive performance, optimization behavior, or FedProx effectiveness. |
| No metric pipeline exists in this boundary | The thesis cannot include a results table, statistical test, or model comparison. |
| No remote workflow was observed | The thesis cannot characterize remote quality-state behavior or workflow reliability. |
| No hospital or clinical setting was evaluated | The thesis cannot claim patient benefit, diagnostic utility, workflow fit, privacy outcome, or regulatory readiness. |

## 8. Thesis-ready results wording

The following wording is appropriate for a methodology or bounded-results subsection:

> “The implemented artifacts were evaluated only as source-level controls for distinguishing a proposed synthetic FedProx study from an executed result. The controls accepted exact frozen non-executing declarations, closed invalid or replayed input, and retained a non-observation posture for external workflows. No dataset, model, trainer, metric, update, aggregation, or clinical evaluation was performed; consequently, no empirical performance results are reported.”

## 9. Requirements for a future empirical study

Any future empirical FedProx evaluation must be established as a separate research activity. At minimum, it needs a lawful data and model boundary, an approved protocol, defined participant and partitioning logic, prespecified metrics and statistical analysis, governance review, reproducible execution controls, result-retention rules, and an explicit clinical-claim policy. None of those requirements is satisfied by the source-only work described here.

## References

[1] [Synthetic FedProx thesis evidence boundary matrix](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_EVIDENCE_MATRIX.md)

[2] [Hospital Node deployment and bounded-proof dossier](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/HOSPITAL_NODE_AGENT_DEPLOYMENT_AND_BOUNDED_PROOF.md)
