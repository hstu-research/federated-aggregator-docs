# Synthetic FedProx Thesis Traceability Appendix

**Status:** Thesis-support traceability record. This appendix maps only documented, bounded evidence to thesis-safe statements and labels every unperformed empirical, clinical, and runtime area as absent evidence.

## How to read this appendix

Each row connects a thesis statement to a bounded evidence category. A row marked **source-only** supports a statement about local contract behavior only. A row marked **absent** means the thesis must not present a finding in that category.

> **Traceability rule:** An artifact that prevents an execution-capable state is not evidence that an experiment, model evaluation, workflow observation, deployment, or clinical study occurred.

## Claim-to-evidence map

| ID | Thesis-safe statement | Evidence category | Supporting record | Status | Explicit non-claim |
|---|---|---|---|---|---|
| T1 | The thesis defines a research question about separating proposed synthetic FedProx intent from executed results. | Documentation and research framing | [Evidence matrix](./SYNTHETIC_FEDPROX_THESIS_EVIDENCE_MATRIX.md) | Documented | That a FedProx experiment was run. |
| T2 | A frozen descriptor can represent a proposed non-executing study posture. | Source-only contract behavior | [Deployment dossier](./HOSPITAL_NODE_AGENT_DEPLOYMENT_AND_BOUNDED_PROOF.md) | Locally validated | That a trainer, dataset, or model was used. |
| T3 | Invalid, broadened, or replayed study-intent declarations are terminally closed by the bounded contract. | Source-only control behavior | [Methodology draft](./SYNTHETIC_FEDPROX_THESIS_METHODS_AND_LIMITATIONS_DRAFT.md) | Locally validated | That the protocol is clinically or statistically valid. |
| T4 | The remote quality-state boundary remains not attempted and default-ineligible. | Source-only closure behavior | [Deployment dossier](./HOSPITAL_NODE_AGENT_DEPLOYMENT_AND_BOUNDED_PROOF.md) | Locally validated | That a remote workflow was queried, passed, failed, or changed. |
| T5 | Bounded modules have local source-quality evidence. | Local engineering evidence | [Evidence matrix](./SYNTHETIC_FEDPROX_THESIS_EVIDENCE_MATRIX.md) | Locally validated | Full release certification, deployment readiness, or end-to-end system quality. |
| A1 | No empirical evaluation is reported. | Dataset/model/training evidence | Not available | Absent | Accuracy, loss, F1, AUC, convergence, fairness, communication, or comparative performance. |
| A2 | No clinical or hospital evaluation is reported. | Clinical and operational evidence | Not available | Absent | Diagnostic utility, patient benefit, privacy outcome, regulatory readiness, or institutional fit. |
| A3 | No runtime or target proof is reported for this thesis branch. | Deployment and runtime evidence | Not available | Absent | Live operational reliability, remote workflow behavior, or production suitability. |

## Thesis section traceability

| Thesis section | Permitted source material | Required qualification |
|---|---|---|
| Problem statement | T1 and the need to prevent intent/result category errors. | Describe a governance problem, not a verified clinical problem. |
| Methodology | T2–T4 and the source-only procedure. | State that this is a contract/conformance method, not an empirical ML protocol. |
| Implementation | T2–T5 at bounded source-only level. | Do not reproduce sensitive source details or characterize the system as deployed. |
| Results | T3–T5 only. | State that results concern local contract behavior; add “no empirical evaluation is reported.” |
| Discussion | T1–T5 plus A1–A3. | Separate contribution, limitation, and future-work statements. |
| Conclusion | The distinction between proposed intent and executed result. | Avoid performance, clinical, privacy, or deployment conclusions. |

## Required absence statements

The following statements should appear, in equivalent form, in the thesis limitations or results section:

1. No research dataset, patient record, medical image, or model artifact entered the documented source-only boundary.
2. No training, inference, metric calculation, update creation, submission, or aggregation action was performed.
3. No remote workflow, target environment, deployment, runtime, hospital system, or clinical workflow was evaluated.
4. Consequently, the thesis reports no empirical machine-learning, privacy, clinical, or operational-performance outcome.

## Future-work traceability gap

A future empirical contribution must replace A1–A3 with separately governed evidence. It requires an approved protocol; lawful data and model controls; a prespecified metric and analysis plan; reproducible experimental records; and an explicit boundary between technical findings and clinical claims. Those prerequisites are not derived from the source-only evidence listed here.

## References

[1] [Synthetic FedProx thesis evidence boundary matrix](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_EVIDENCE_MATRIX.md)

[2] [Synthetic FedProx methodology and limitations draft](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_METHODS_AND_LIMITATIONS_DRAFT.md)

[3] [Hospital Node deployment and bounded-proof dossier](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/HOSPITAL_NODE_AGENT_DEPLOYMENT_AND_BOUNDED_PROOF.md)
