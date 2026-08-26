# Synthetic FedProx Related Work and Literature-Positioning Outline

**Status:** Thesis-writing support outline. This document positions a source-only governance contribution in relation to published FedProx, healthcare federated-learning, and governance literature. It does not report a completed experiment, dataset analysis, clinical evaluation, or performance comparison by this project.

## 1. Positioning statement

The thesis is positioned **before empirical evaluation**. It does not introduce a new aggregation algorithm or claim a result for FedProx. Instead, it examines how a proposed synthetic FedProx protocol can be represented and governed so that a study declaration is not mistaken for an executed empirical result.

> **Related-work boundary:** Published FedProx and healthcare federated-learning studies establish context for the thesis. Their findings are not evidence about the performance, privacy, clinical utility, or deployment readiness of this project.

## 2. Algorithmic context: FedProx and heterogeneity

Li et al. introduce FedProx as a generalization and re-parameterization of FedAvg intended to address systems and statistical heterogeneity in federated optimization [1]. This provides the algorithmic context for naming FedProx in the thesis. The present project does not reproduce that work’s optimization experiments, convergence analysis, datasets, or reported comparisons. Therefore, the literature should be used to explain **why FedProx is a relevant proposed protocol family**, not to imply that the thesis validates FedProx in breast-cancer research.

## 3. Healthcare federated-learning context: translation remains distinct from prototypes

Teo et al.’s systematic review describes healthcare federated-learning literature as largely composed of proof-of-concept work and reports that only a small minority of its included studies involved real-life application [2]. This supports a careful distinction among technical design, prototype evaluation, real-world application, and clinical impact. The thesis occupies an earlier boundary still: it is a source-only contract and evidence-governance record, not even a prototype model-evaluation study.

The thesis should consequently avoid using healthcare federated-learning literature as evidence that its own proposed workflow is clinically useful, privacy-preserving in operation, or ready for deployment. Those outcomes require separate empirical and governance evidence.

## 4. Governance context: procedural, relational, and structural mechanisms

Eden et al. frame healthcare federated-learning governance through procedural, relational, and structural mechanisms, including formal agreements, policies, standards, roles, and ongoing controls [3]. The project’s source-only declarations, explicit closure states, and evidence-boundary records align most closely with a **narrow procedural and structural governance contribution**. They are not a complete governance framework and do not substitute for institutional authorization, data stewardship, ethics review, or operational monitoring.

## 5. Thesis contribution relative to related work

| Literature strand | What published work contributes | Narrow thesis position | What the thesis does not add |
|---|---|---|---|
| Federated optimization | A FedProx formulation for heterogeneous federated settings [1]. | Uses FedProx as the proposed protocol context. | A new optimizer, convergence proof, benchmark, or performance comparison. |
| Healthcare federated learning | Evidence of broad technical activity alongside translation barriers [2]. | Separates a proposed protocol from a claimed healthcare result. | A clinical prototype, multi-site study, model evaluation, or patient benefit claim. |
| Federated-learning governance | Governance mechanisms for healthcare FL [3]. | Provides a bounded source-only intent, closure, and traceability artifact. | Institutional governance, authorization, agreement, or compliance evidence. |

## 6. Suggested related-work paragraph

“FedProx has been proposed as a federated optimization approach for heterogeneous systems and data distributions [1]. Healthcare federated-learning literature, however, distinguishes technical activity from clinical translation, with systematic review evidence indicating that real-world application remains comparatively limited [2]. Governance scholarship further emphasizes procedural, relational, and structural controls for healthcare federated learning [3]. This thesis does not evaluate a FedProx model or clinical workflow. Rather, it contributes a source-only governance boundary that distinguishes a proposed synthetic FedProx study from an executed empirical result before data, model, training, metric, update, or aggregation actions are permitted.”

## 7. Claim-control checklist for the literature review

| Permitted use | Prohibited inference |
|---|---|
| Cite FedProx literature to describe the proposed algorithmic context. | Claim that this project improves on FedAvg or obtains the literature’s reported outcomes. |
| Cite healthcare FL reviews to motivate careful translation and evidence boundaries. | Claim that this project is a clinical FL application or has validated privacy in practice. |
| Cite governance literature to motivate explicit roles, scope, closure, and traceability. | Claim institutional approval, compliance, or governance effectiveness. |
| Cite the project’s own evidence matrix and traceability artifacts to describe source-only work. | Present local contract validation as empirical machine-learning evidence. |

## References

[1] Li, T., Sahu, A. K., Zaheer, M., Sanjabi, M., Talwalkar, A., & Smith, V. (2020). *Federated Optimization in Heterogeneous Networks*. MLSys. [arXiv:1812.06127](https://arxiv.org/abs/1812.06127)

[2] Teo, Z. L., Jin, L., Li, S., et al. (2024). Federated machine learning in healthcare: A systematic review on clinical applications and technical architecture. *Cell Reports Medicine, 5*(2), 101419. [Article](https://pmc.ncbi.nlm.nih.gov/articles/PMC10897620/)

[3] Eden, R., Chukwudi, I., Bain, C., et al. (2025). A scoping review of the governance of federated learning in healthcare. *npj Digital Medicine, 8*, 427. [Article](https://pmc.ncbi.nlm.nih.gov/articles/PMC12246253/)

[4] [Synthetic FedProx thesis evidence boundary matrix](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_EVIDENCE_MATRIX.md)
