# Synthetic FedProx Thesis Manuscript Assembly and Citation Map

**Status:** Thesis-writing support map. This document organizes the completed source-only artifacts into a coherent manuscript sequence. It does not add an empirical result, dataset, model, metric, clinical claim, privacy outcome, operational result, or deployment evidence.

## Assembly principle

The manuscript should proceed from **problem framing** to **bounded method**, then to **source-only findings**, then to **limitations and independently governed future work**. The same evidence boundary must be retained in every chapter: a proposed synthetic FedProx protocol is not an executed empirical study.

> **Citation rule:** Cite each artifact for the narrow statement it supports. Do not cite a source-only validator, in-memory fake, or local quality record as evidence of model performance, privacy, clinical utility, hospital integration, deployment, or runtime behavior.

## Recommended chapter sequence

| Manuscript section | Primary artifact(s) | Claim-safe use | Required limitation or qualifier |
|---|---|---|---|
| Title, abstract, keywords | [Abstract and contributions draft](./SYNTHETIC_FEDPROX_THESIS_ABSTRACT_AND_CONTRIBUTIONS.md) | State the source-only governance contribution and research question. | State that no empirical result is reported. |
| Chapter 1: Introduction | [Evidence matrix](./SYNTHETIC_FEDPROX_THESIS_EVIDENCE_MATRIX.md); [related-work outline](./SYNTHETIC_FEDPROX_RELATED_WORK_OUTLINE.md) | Frame FedProx as proposed protocol context and identify the intent/result category problem. | Do not imply clinical motivation was empirically tested here. |
| Chapter 2: Related work | [Related-work outline](./SYNTHETIC_FEDPROX_RELATED_WORK_OUTLINE.md) | Position the thesis against FedProx, healthcare federated-learning, and governance literature. | External literature provides context, not a transferred result for this project. |
| Chapter 3: Methodology | [Methods and limitations draft](./SYNTHETIC_FEDPROX_THESIS_METHODS_AND_LIMITATIONS_DRAFT.md); [deployment dossier](./HOSPITAL_NODE_AGENT_DEPLOYMENT_AND_BOUNDED_PROOF.md) | Describe source-only descriptors, exact validation, terminal closure, replay suppression, and default-closed readiness. | This is a contract/conformance method, not an experimental ML protocol. |
| Chapter 4: Bounded implementation | [Traceability appendix](./SYNTHETIC_FEDPROX_THESIS_TRACEABILITY_APPENDIX.md); [deployment dossier](./HOSPITAL_NODE_AGENT_DEPLOYMENT_AND_BOUNDED_PROOF.md) | Describe the source-only controls at a high level and identify their evidence category. | Do not disclose sensitive source details or characterize the components as deployed. |
| Chapter 5: Results and discussion | [Results and Discussion draft](./SYNTHETIC_FEDPROX_THESIS_RESULTS_AND_DISCUSSION_DRAFT.md); [submission-readiness audit](./SYNTHETIC_FEDPROX_THESIS_SUBMISSION_READINESS_AUDIT.md) | Report local contract findings and explicit absence of empirical outcomes. | Include the non-results statement; exclude metric and performance tables. |
| Chapter 6: Conclusion and future work | [Conclusion and Future Work draft](./SYNTHETIC_FEDPROX_THESIS_CONCLUSION_AND_FUTURE_WORK_DRAFT.md); [governance handoff brief](./SYNTHETIC_FEDPROX_GOVERNANCE_HANDOFF_BRIEF.md) | Conclude with accountable study-intent governance and independent future-work gates. | Do not predict performance, privacy, clinical, or deployment outcomes. |
| Appendices | [Evidence matrix](./SYNTHETIC_FEDPROX_THESIS_EVIDENCE_MATRIX.md); [traceability appendix](./SYNTHETIC_FEDPROX_THESIS_TRACEABILITY_APPENDIX.md); [governance handoff brief](./SYNTHETIC_FEDPROX_GOVERNANCE_HANDOFF_BRIEF.md) | Provide auditability, claim control, and future-governance records. | Keep protected, operational, and empirical facts out of the appendices. |

## Internal citation map

| Statement type | Cite | Do not use as support for |
|---|---|---|
| Proposed-versus-executed study distinction | Evidence matrix; methods draft; traceability appendix. | Model accuracy, convergence, or clinical utility. |
| Local source-only control behavior | Deployment dossier; Results and Discussion draft. | Remote workflow behavior, deployment readiness, or end-to-end certification. |
| Literature context | Related-work outline and its cited publications. | A performance comparison produced by this project. |
| Claim boundary and limitations | Submission-readiness audit; governance handoff brief. | Authority, approval, ethics, legal, or data-use conclusion. |
| Future empirical pathway | Governance handoff brief; conclusion draft. | A study start, protocol registration, or external commitment. |

## Required cross-chapter statements

The manuscript should repeat these statements, in equivalent language, wherever claims could otherwise broaden:

1. **No empirical evaluation is reported.**
2. **No dataset, patient record, medical image, or model artifact entered the documented source-only boundary.**
3. **No training, inference, metric calculation, update, submission, or aggregation action occurred.**
4. **No privacy, clinical, hospital, operational, deployment, or runtime outcome is claimed.**
5. **Future empirical work requires independently governed authority, stewardship, protocol, evaluation, safety, reporting, and adapter-review decisions.**

## Pre-submission editorial check

Before submission, check each table, figure, abstract sentence, conclusion sentence, and oral-defense claim against the [submission-readiness audit](./SYNTHETIC_FEDPROX_THESIS_SUBMISSION_READINESS_AUDIT.md). Remove or rephrase any statement that converts a source-only finding into an empirical, clinical, privacy, operational, or deployment claim.

## References

[1] [Synthetic FedProx thesis evidence boundary matrix](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_EVIDENCE_MATRIX.md)

[2] [Synthetic FedProx thesis submission-readiness audit](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_SUBMISSION_READINESS_AUDIT.md)

[3] [Synthetic FedProx thesis Conclusion and Future Work draft](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_CONCLUSION_AND_FUTURE_WORK_DRAFT.md)
