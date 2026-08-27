# Synthetic Patient-Data Marker Rejection Disabled Application Design

**Status:** Pre-implementation source-only design. This document specifies a deterministic disabled application fake that projects only the terminal scalar posture already established by the synthetic marker-rejection ledger. It accepts no payload, no marker declaration, no receipt consumer input, and no external capability.

## Purpose and non-goals

The fake provides a final local composition seam for the rejection chain: a terminal scalar record may be presented to the fake, but the fake returns only a disabled blocked/no-evaluation/no-execution outcome. Its acceptance condition is a frozen scalar output with a disabled application state. It is not a user-facing interface, API endpoint, upload handler, storage service, workflow runner, or runtime component.

The fake must not receive or process a file, bytes, text, image, identifier, patient record, dataset, model, or any payload. It must not invoke a network, filesystem, database, cache, provider, identity, transport, trainer, inference path, metric, update, submission, aggregation, hospital system, clinical action, deployment, or runtime workflow. It must not claim real patient-data detection, transfer prevention, privacy, security, clinical suitability, or operational readiness.

## Exact scalar boundary

The fake accepts only an exact frozen terminal record produced by the canonical in-memory ledger path.

| Input field | Required value | Meaning |
|---|---|---|
| `state` | `terminal_closed` | Closure was already reached. |
| `transfer` | `blocked` | No transfer state exists. |
| `privacyAssessment` | `not_assessed` | The chain makes no privacy conclusion. |
| `empiricalEvaluation` | `not_started` | No empirical evaluation began. |
| `execution` | `not_performed` | No workload ran. |
| `reason` | `synthetic_marker_rejection_consumed` | Limits input to the canonical generated-marker closure. |

The fake returns a frozen scalar outcome with `state: closed`, `application: disabled`, blocked transfer, privacy not assessed, evaluation not started, and execution not performed. Its code is limited to canonical disabled, invalid, and replay-closed values.

## Failure and replay posture

| Condition | Fake outcome | Meaning |
|---|---|---|
| Exact frozen terminal record | Disabled canonical outcome. | The fake projects no executable capability. |
| Mutable, malformed, broadened, or unknown-field record | Disabled invalid outcome. | Invalid state cannot enable a capability. |
| Any call after the first application attempt | Disabled replay-closed outcome. | The fake does not reopen or accept replacement input. |

All outcome variants retain the same blocked/no-evaluation/no-execution posture. The fake holds no retained payload or capability and does not expose any path to an enabled state.

## Implementation and local-proof plan

The Agent module will have no imports. A focused import guard will prohibit network, filesystem, storage, database, cache, provider, identity, transport, workflow, trainer, data, model, metric, update, submission, aggregation, runtime, and application-framework dependencies. Deterministic in-memory tests will cover the canonical frozen record, frozen output, mutable and unknown-field records, widened transfer/evaluation/execution states, invalid reason, and replay suppression.

The Agent aggregate local quality suite must pass before the outcome is documented. Any evidence may report a disabled scalar fake only. It must not be described as an actual data-upload control, a patient-data detector, a privacy mechanism, a hospital interface, a clinical workflow, deployment, or runtime proof.

## Stop conditions

Stop if an extension requires an actual UI, request handler, file or payload, data classifier, transport route, storage, provider, identity, real persistence, trainer, model, metric, update, submission, aggregation, hospital system, clinical context, deployment, or runtime invocation. Each requires separate authority, a focused boundary design, and independently governed evidence.

## References

[1] [Synthetic patient-data marker rejection terminal ledger design](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_TERMINAL_LEDGER_DESIGN.md)

[2] [Synthetic patient-data marker rejection terminal ledger evidence](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_TERMINAL_LEDGER_EVIDENCE.md)
