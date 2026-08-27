# Blank Deviation-and-Amendment Log: Proposed Breast-Cancer/FedProx Study

**Document status:** Blank, documentation-only change-control record. It defines how an independently governed protocol might record a future deviation or amendment. It is not a protocol, approval, data-use authorization, technical change request, or record of an executed change.

> **Current posture:** No amendment is recorded. The study remains proposed and unexecuted. All supplied dataset candidates remain `ineligible` for data use. No dataset asset, model, training run, inference output, metric, update, submission, aggregation, deployment, runtime artifact, clinical activity, or privacy outcome exists in this branch.

## 1. Purpose and closed change-control rule

This log prevents informal scope change. Any proposed change to purpose, candidate, provenance assumption, license condition, governance requirement, data-management plan, technical environment, study design, preprocessing plan, model, federation configuration, evaluation plan, reporting rule, or claim boundary must be treated as a new review question. No proposed amendment may become effective through this log alone.

The source-only documentation site and Hospital Node Agent are not change-approval systems. They must not collect, access, download, open, copy, process, store, transfer, train on, infer from, evaluate, upload, submit, aggregate, deploy, or run a data or model workload because an amendment is drafted or logged.

## 2. Amendment identity and version chain

| Field | Required entry |
|---|---|
| Amendment or deviation reference | `[blank — assigned by independent authority]` |
| Base protocol reference and version | `[blank]` |
| Proposed effective date | `[blank]` |
| Submitting accountable role | `[blank]` |
| Independent review authority | `[blank]` |
| Change classification | `[blank]` |
| Current disposition | `no amendment recorded` |
| Related governance or evidence reference | `[blank — redacted reference only]` |

The version chain must preserve the pre-amendment record. It must not replace prior conditions, evidence, limitations, or closure decisions. It may cite only redacted, non-sensitive references; it must never store patient information, dataset content, a file name, an access locator, credential, private link, raw document, model artifact, metric output, or free-text diagnostic material.

## 3. Changes that require a new independent review

| Proposed change class | Examples of affected boundary | Required disposition before any action |
|---|---|---|
| Purpose or population scope | Study question, intended use, or setting changes. | `ineligible pending new authority and protocol review` |
| Candidate or source-chain condition | New candidate, new source fact, transformation, provenance issue, or license condition. | `ineligible pending primary-source, permitted-use, and governance review` |
| Ethics, privacy, or data-management condition | Consent, de-identification, access, retention, sharing, security, disposal, or environment change. | `ineligible pending applicable institutional review` |
| Study design or analysis rule | Split, preprocessing, model, federation, comparator, metric, statistical method, subgroup, or error-analysis change. | `not executable pending protocol amendment review` |
| Reporting or claim boundary | New wording about performance, privacy, clinical relevance, deployment, or operational behavior. | `not publishable pending evidence and editorial review` |
| Technical capability | Storage, transport, account, credential, API, model execution, update, submission, aggregation, deployment, or runtime request. | `prohibited pending separate boundary dossier and independent authorization` |

## 4. Required impact assessment

The accountable reviewer must assess each proposed change against the full gate register, not only the field that triggered the amendment. A favorable conclusion in one area does not authorize another area.

| Assessment dimension | Required blank entry |
|---|---|
| Exact change requested | `[blank]` |
| Reason for change | `[blank]` |
| Affected thesis sections and claims | `[blank]` |
| Affected public-metadata, rights, license, or provenance position | `[blank]` |
| Affected ethics, data-protection, or data-management condition | `[blank]` |
| Affected model, evaluation, reproducibility, or reporting plan | `[blank]` |
| New risks and required controls | `[blank]` |
| Evidence required before reconsideration | `[blank]` |
| Effect on current `ineligible` disposition | `[blank — cannot be changed without independent authority]` |

## 5. Review states and terminal closure

| State | Meaning | Permitted project action |
|---|---|---|
| `not_recorded` | No amendment or deviation has been submitted. | Preserve current closure. |
| `draft` | A change question is being described. | Documentation only; no external or empirical activity. |
| `submitted_for_independent_review` | The responsible authority has received a bounded review question through its own process. | Preserve current closure. |
| `returned_or_insufficient` | Evidence is missing, unclear, expired, conflicting, or broader than the base record. | Close the request; no workaround or access attempt. |
| `withdrawn` | The requester withdraws the proposed change. | Preserve the base record and current closure. |
| `separately_decided` | A responsible authority records an outcome through its own process. | Requires a new bounded documentation record before any technical step is considered. |

No status in this log grants access, execution, or publication authority. A request must close if it would cause data access, model activity, a privacy or clinical conclusion, a deployment claim, a runtime action, or any expansion beyond independently evidenced scope.

## 6. Blank amendment register

| Reference | Date raised | Change class | Independent-review state | Outcome reference | Current effect |
|---|---|---|---|---|---|
| `[none recorded]` | `[blank]` | `[blank]` | `not_recorded` | `[blank]` | `Study remains proposed; candidates remain ineligible.` |

## 7. Deviation reporting rule

If an independently authorized future study exists, a deviation must be reported before its effect is interpreted. The report must state the approved base condition, the observed difference, the immediate containment action, and the independent review route. It must not conceal a deviation through post hoc relabeling, selective reporting, replacement data, revised metrics, or retroactive protocol language.

In the present branch, no study exists and therefore no empirical deviation has occurred. The only present function of this section is to preserve the boundary between a future approved protocol and the current source-only documentation record.

## 8. Publication and thesis update rule

The integrated manuscript may refer only to the existence of this blank change-control mechanism and the continuing absence of a data-use or empirical result. It must not report a completed amendment, approval, dataset use, model result, privacy outcome, clinical relevance, operational capability, deployment, or runtime behavior unless an independently authorized and separately evidenced record exists.

## References

[1] [Blank pre-empirical protocol-registration checklist](./SYNTHETIC_FEDPROX_PREEMPIRICAL_PROTOCOL_REGISTRATION_CHECKLIST.md)

[2] [Thesis governance appendix crosswalk](./SYNTHETIC_FEDPROX_THESIS_GOVERNANCE_APPENDIX_CROSSWALK.md)

[3] [Independent data-use governance dossier](./KAGGLE_BREAST_CANCER_DATASET_INDEPENDENT_DATA_USE_GOVERNANCE_DOSSIER.md)

[4] [Authority-ready data-use decision worksheet](./KAGGLE_BREAST_CANCER_DATASET_DATA_USE_DECISION_WORKSHEET.md)
