# Synthetic FedProx Patient-Data Marker Rejection Evidence Record

**Status:** Local source-only contract evidence. The isolated Hospital Node Agent control has been implemented and its aggregate local quality suite has passed. This record reports only deterministic validation of a generated scalar marker. It is not evidence of real patient-data detection, data transfer prevention in an operational environment, a privacy outcome, hospital integration, clinical suitability, deployment, or runtime behavior.

## Implemented control

The Agent now contains an isolated validator for one frozen declaration whose fields are fixed scalar labels. The declaration denotes a **synthetic patient-data-shaped marker**; it carries no patient information, no file, no text, no identifier, no image, and no other payload. The validator accepts only the exact frozen plain-object shape, produces a frozen scalar receipt, and closes after one validation attempt.

| Local condition | Observed bounded receipt posture | Meaning of the observation |
|---|---|---|
| Exact frozen synthetic marker | Closed, transfer blocked, evaluation not started, execution not performed. | The generated label reached terminal local rejection. |
| Mutable, malformed, broadened, or unknown-field declaration | Rejected, transfer blocked, evaluation not started, execution not performed. | Invalid scalar declarations were not admitted. |
| Any replay after the initial call | Closed, transfer blocked, evaluation not started, execution not performed. | The validator remained terminal and did not reopen. |

## Local quality evidence

The Agent quality suite passed with the new deterministic Node tests and an import guard for the validator. The test fixtures contain only generated scalar enum values. The source module has no network, filesystem, provider, trainer, data, model, metric, update, submission, aggregation, or runtime import. The tests do not send a request, open a socket, read a file, invoke a workload, use a dataset, access a model, calculate a metric, submit an update, or aggregate any result.

## What this control does and does not demonstrate

| Supported statement | Unsupported statement |
|---|---|
| A fixed generated marker can be terminally rejected by a deterministic local source-only contract. | Real patient data was uploaded, detected, classified, or prevented from crossing an actual system boundary. |
| Invalid scalar declarations do not create a transfer, evaluation, or execution state in this control. | A privacy, security, compliance, clinical, hospital, operational, deployment, or runtime outcome was achieved. |
| The module remains isolated from listed capability imports in local source checks. | A live adapter, storage layer, service, model, trainer, data source, submission path, or aggregation path was tested. |

> **Interpretation rule:** “Synthetic patient-data-shaped marker” is a deliberately generated test label. It must never be described as patient data, protected health information, a data-loss-prevention classifier, or an operational detection result.

## Retained adjacent boundaries

No real payload detector exists in this branch. No data intake, content inspection, storage, transport, identity, provider, clinical, training, inference, metric, update, submission, aggregation, deployment, or runtime boundary was implemented or exercised. Any work in those areas requires separate authority, a focused design record, and independently governed evidence.

## References

[1] [Synthetic FedProx patient-data marker rejection boundary design](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_PATIENT_DATA_MARKER_REJECTION_BOUNDARY_DESIGN.md)

[2] [Synthetic FedProx thesis evidence boundary matrix](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_EVIDENCE_MATRIX.md)
