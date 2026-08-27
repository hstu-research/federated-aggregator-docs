# Synthetic FedProx Thesis Citation and Claim-Boundary Audit

**Status:** Final documentation-only citation and claim-scope audit for the integrated thesis manuscript and review package. This audit verifies the cited sources’ available metadata and the narrow role assigned to them in the manuscript. It is not a formal bibliographic-index review, academic submission decision, ethics determination, empirical-study approval, clinical assessment, privacy assessment, operational certification, deployment certification, or runtime proof.

## Audit purpose

The integrated manuscript uses three external scholarly references for contextual framing and several project records for source-only evidence. This audit checks two questions: whether the external reference metadata and broad subject matter match the cited manuscript statements, and whether citation use remains within the documented claim boundary. It does not use external literature to fill an absent project result.

> **Citation rule:** A published result may explain the FedProx, healthcare federated-learning, or governance context. It does not establish performance, privacy, clinical value, hospital integration, deployment readiness, or runtime behavior for this project.

## External reference verification

| Manuscript reference | Available source confirmation | Permitted use in this thesis | Excluded inference |
|---|---|---|---|
| Li et al. (2020), *Federated Optimization in Heterogeneous Networks* | The cited record identifies FedProx as a framework for federated heterogeneity and describes it as a generalization and re-parameterization of FedAvg. [1] | Explain why FedProx is the proposed protocol context. | That this project executed FedProx, reproduced its experiments, or achieved any reported result. |
| Teo et al. (2024), *Federated machine learning in healthcare* | The cited systematic review identifies its healthcare FL scope and discusses proof-of-concept versus real-life application. [2] | Frame the distinction between technical activity and clinical translation. | That this project is a healthcare prototype, clinical application, or real-world implementation. |
| Eden et al. (2025), *A scoping review of the governance of federated learning in healthcare* | The cited review describes procedural, relational, and structural governance mechanisms for healthcare FL. [3] | Frame the relevance of a narrow procedural and structural governance boundary. | That this project has institutional governance, approval, compliance, or operational controls in practice. |

The available metadata for the three external references matches the author, publication year, title, and publication context stated in the integrated manuscript. The manuscripts’ use of those sources remains contextual: it does not quote their performance findings or import their empirical outcomes into the source-only branch.

## Internal-record citation coverage

| Manuscript section | Cited project records | Audit result |
|---|---|---|
| Abstract and Chapter 1 | Evidence matrix and methodology record. [4] [5] | Supports the research question, source-only scope, and contribution boundary. |
| Chapter 3 | Evidence matrix, methodology record, results draft, and consistency audit. [4] [5] [6] [8] | Supports descriptor-based methodology and local-contract interpretation only. |
| Chapter 4 | Evidence matrix, results draft, traceability appendix, submission audit, consistency audit, and conclusion draft. [4] [6] [7] [8] [9] [10] | Supports high-level local controls and claim-to-evidence traceability only. |
| Chapter 5 | Evidence matrix and Results and Discussion draft. [4] [6] | Supports bounded local findings and explicit non-results only. |
| Chapter 6 and appendices | Methodology record, Results and Discussion draft, submission audit, consistency audit, and conclusion draft. [5] [6] [8] [9] [10] | Supports limitations, editorial controls, and independently governed future work only. |

## Claim-boundary check

| Check | Audit result | Required retention |
|---|---|---|
| FedProx literature use | Pass | Refer to FedProx as proposed protocol context, never as a local experiment or benchmark. |
| Healthcare FL literature use | Pass | Use only to motivate careful separation of technical design and clinical translation. |
| Governance literature use | Pass | Use only to motivate the project’s narrow governance framing. |
| Local contract citations | Pass | Attribute them to bounded source-only validation, not external, deployment, or runtime behavior. |
| Empirical results | Pass | Retain that no empirical evaluation, data/model use, training, inference, metrics, updates, submission, or aggregation action occurred. |
| Privacy, clinical, hospital, operational, deployment, and runtime claims | Pass | Retain that no outcome in these categories is claimed. |
| Future-work language | Pass | Retain independently governed authority, stewardship, protocol, evaluation, safety, reporting, and adapter-review prerequisites. |

## Audit conclusion

The reviewed citations support the roles assigned to them: FedProx supplies algorithmic context; healthcare federated-learning literature supplies translation context; governance literature supplies a conceptual governance context; and project records support the local source-only contribution. No citation was identified as support for an empirical performance, privacy, clinical, hospital, operational, deployment, or runtime result in this project.

The editorial package remains appropriate for bounded manuscript review when the following statements are retained in equivalent language: **no empirical evaluation is reported; no dataset, patient record, medical image, or model artifact entered the documented source-only boundary; no training, inference, metric calculation, update, submission, or aggregation action occurred; no privacy, clinical, hospital, operational, deployment, or runtime outcome is claimed; and any future empirical study requires separate independent governance.** [8] [9]

## Editorial follow-through

The final copy-edit should retain the reference entries in the citation style required by the institution and check every new or altered citation against the same narrow-use rule. If a reviewer requests a result, metric, data/model, privacy, clinical, operational, deployment, or runtime statement, the request is not a citation-formatting issue: it is unsupported by the present branch and must remain outside this manuscript.

## References

[1] Li, T., Sahu, A. K., Zaheer, M., Sanjabi, M., Talwalkar, A., & Smith, V. (2020). *Federated Optimization in Heterogeneous Networks*. MLSys. [arXiv:1812.06127](https://arxiv.org/abs/1812.06127)

[2] Teo, Z. L., Jin, L., Li, S., et al. (2024). Federated machine learning in healthcare: A systematic review on clinical applications and technical architecture. *Cell Reports Medicine, 5*(2), 101419. [Article](https://pmc.ncbi.nlm.nih.gov/articles/PMC10897620/)

[3] Eden, R., Chukwudi, I., Bain, C., et al. (2025). A scoping review of the governance of federated learning in healthcare. *npj Digital Medicine, 8*, 427. [Article](https://pmc.ncbi.nlm.nih.gov/articles/PMC12246253/)

[4] [Synthetic FedProx thesis evidence boundary matrix](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_EVIDENCE_MATRIX.md)

[5] [Synthetic FedProx methodology and limitations draft](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_METHODS_AND_LIMITATIONS_DRAFT.md)

[6] [Synthetic FedProx thesis Results and Discussion draft](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_RESULTS_AND_DISCUSSION_DRAFT.md)

[7] [Synthetic FedProx thesis traceability appendix](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_TRACEABILITY_APPENDIX.md)

[8] [Synthetic FedProx thesis consistency and claim audit](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_CONSISTENCY_AND_CLAIM_AUDIT.md)

[9] [Synthetic FedProx thesis submission-readiness audit](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_SUBMISSION_READINESS_AUDIT.md)

[10] [Synthetic FedProx thesis conclusion and future-work draft](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_CONCLUSION_AND_FUTURE_WORK_DRAFT.md)
