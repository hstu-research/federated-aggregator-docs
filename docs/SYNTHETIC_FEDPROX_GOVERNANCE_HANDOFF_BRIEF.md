# Synthetic FedProx Governance Handoff Brief

**Status:** Thesis-facing, documentation-only handoff. This brief consolidates the independent decisions and evidence that would be required before an empirical FedProx study could be considered. It does not request approval, contact a stakeholder, bind a dataset, select a model, or authorize any activity.

## Executive decision

The source-only synthetic FedProx branch is complete at its current boundary: it distinguishes study intent from empirical execution, preserves default-closed readiness, and keeps external adapters ineligible. The next step is **not implementation**. It is independent governance and protocol determination outside this project.

> **Current state:** Every external decision item is unassigned. Therefore, no empirical, adapter, storage, transport, training, model, metric, update, aggregation, runtime, hospital, or clinical activity may begin from this branch.

## Decision register

| Independent decision area | Decision that must exist before empirical work is considered | Minimum evidence class | Current state | This brief does not provide |
|---|---|---|---|---|
| Research authority | A responsible authority assigns a bounded non-clinical research purpose. | Independent governance record | Unassigned | A named approver, role, or authorization. |
| Ethics, legal, and consent | Responsible bodies determine the applicable ethical, legal, consent, and data-use posture. | Independent governance record | Unassigned | An ethics or legal conclusion. |
| Data stewardship | A steward defines lawful data categories, minimization, access, retention, and disposal controls. | Independent governance record | Unassigned | Data access, a dataset description, or protected data. |
| Protocol | A prespecified protocol defines question, population, design, comparator, stopping rules, and claim boundary. | Independent protocol record | Unassigned | A registered study or participant plan. |
| Model and evaluation | A controlled model boundary, metric plan, uncertainty treatment, and analysis rule are fixed. | Independent protocol record | Unassigned | A model, metric value, analysis, or result. |
| Reproducibility and safety | Execution, retention, security, privacy, incident, and change-control plans are independently defined. | Independent governance record | Unassigned | An execution environment, storage, or runtime proof. |
| Reporting and claims | Technical, privacy, clinical, and deployment claims are separated before result reporting. | Independent reporting plan | Unassigned | A performance, privacy, clinical, or deployment claim. |
| Concrete-adapter review | Ownership, scope, redaction, non-mutating contract, lifecycle, and proof preconditions are independently bound. | Focused adapter review record | Unassigned | Adapter code, configuration, connection, or credential. |

## Handoff sequence

The intended handoff sequence is strictly ordered. First, a responsible body must determine authority and governance. Second, the approved scope must support a separate protocol and stewardship record. Third, the protocol must bind model, metric, safety, and reporting plans. Only then can a focused concrete-adapter review be considered; a concrete adapter, deployment, and runtime proof remain separate later decisions.

Any missing, ambiguous, mutable, broadened, action-capable, or replayed condition returns the branch to terminal closure. The source-only implementation cannot substitute for any decision in this sequence.

## Thesis use

This brief can be included in the thesis limitations, governance, or future-work section. It supports a conclusion that the project delivers a bounded distinction between **proposed study intent** and **empirical execution**, while leaving empirical research to independently governed work. It must not be used to claim that an empirical evaluation is approved, planned with a specific institution, or ready to commence.

## Retained prohibitions

This handoff does not create or permit contact, approval, authorization, data access, model access, training, inference, metric calculation, update creation, submission, aggregation, external adapter design or implementation, storage, transport, provider access, remote query, target action, runtime invocation, hospital integration, clinical evaluation, privacy evaluation, or performance reporting.

## References

[1] [Synthetic FedProx pre-empirical evaluation readiness protocol](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_PREEMPIRICAL_EVALUATION_READINESS_PROTOCOL.md)

[2] [Synthetic FedProx thesis traceability appendix](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_TRACEABILITY_APPENDIX.md)

[3] [Hospital Node deployment and bounded-proof dossier](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/HOSPITAL_NODE_AGENT_DEPLOYMENT_AND_BOUNDED_PROOF.md)
