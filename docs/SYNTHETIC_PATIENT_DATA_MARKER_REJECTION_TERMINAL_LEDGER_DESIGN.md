# Synthetic Patient-Data Marker Rejection Terminal Ledger Design

**Status:** Pre-implementation source-only design. This document specifies a deterministic in-memory terminal ledger for the scalar receipt produced by the synthetic marker-rejection consumer. It stores no payload, no patient data, no identifier, no file, no content, no path, no capability, and no external state.

## Purpose and non-goals

The ledger provides a narrow local state transition for a receipt that is already source-only, blocked, evaluation-not-started, and execution-not-performed. It allows tests to verify that terminal closure remains closed after a new in-memory instance receives a valid or invalid snapshot. The acceptance condition is a frozen scalar terminal record and scalar readout; no persistent system is created.

The ledger must not write to or read from a database, file, cache, queue, provider, service, network, transport, browser, or operating system. It must not receive a marker declaration or a payload. It must not ingest, upload, access, inspect, classify, store, retrieve, or process patient data or a real payload. It must not imply that a real transfer is prevented, that a privacy outcome is achieved, or that any hospital, clinical, operational, deployment, or runtime behavior exists.

## Exact scalar boundary

The ledger accepts only a frozen receipt representing one canonical local receipt-consumption outcome.

| Input field | Required value | Meaning |
|---|---|---|
| `schemaVersion` | `synthetic_patient_data_marker_rejection_consumption_v1` | Fixes the prior consumer contract. |
| `state` | `closed` | The receipt was already terminally consumed. |
| `code` | `synthetic_marker_rejection_receipt_consumed` | Restricts input to the canonical local-consumption result. |
| `transfer` | `blocked` | No transfer state exists. |
| `privacyAssessment` | `not_assessed` | No privacy conclusion exists. |
| `empiricalEvaluation` | `not_started` | No evaluation began. |
| `execution` | `not_performed` | No workload ran. |

The ledger returns a frozen terminal record and a frozen scalar readout. The record permits only terminal closure, blocked transfer, privacy not assessed, evaluation not started, execution not performed, and an allowlisted reason. No stored input has a payload-shaped field.

## State, restart, and failure posture

| Condition | Stored terminal reason | Readout code | Result |
|---|---|---|---|
| Canonical local-consumption receipt | `synthetic_marker_rejection_consumed` | `synthetic_marker_rejection_recorded` | Terminal closure recorded in memory. |
| Invalid receipt | `invalid_receipt` | `synthetic_marker_rejection_invalid` | Terminal closure recorded in memory. |
| Canonical restart snapshot | `synthetic_marker_rejection_consumed` | Replay-closed code on a later close attempt. | New fake ledger starts closed. |
| Invalid restart snapshot | `invalid_restart_snapshot` | Replay-closed code on a later close attempt. | New fake ledger starts closed. |
| Close call after any terminal record exists | Existing reason remains unchanged. | `synthetic_marker_rejection_replay_closed` | No reopening or replacement occurs. |

The restart snapshot is a test-only value passed as a constructor argument. It is neither read from nor written to an external store. A valid snapshot is reprojected to a new frozen terminal record rather than retained by reference.

## Implementation and local-proof plan

The planned module will be isolated within the Agent application package and will import no modules. A focused import guard will prohibit network, filesystem, provider, storage, database, cache, transport, identity, trainer, data, model, metric, update, submission, aggregation, runtime, and workflow dependencies. Deterministic Node tests will cover canonical closure, frozen record and readout, invalid receipt closure, replay, valid fake-ledger restart, invalid fake-ledger restart, mutable snapshot denial, and snapshot immutability.

The aggregate Agent quality suite must pass before any outcome is documented. The outcome may report a local in-memory terminal state machine only. It must not be described as a persistent ledger, audit system, clinical-data control, patient-data detection result, privacy outcome, real transfer prevention, deployment, or runtime proof.

## Stop conditions

Stop if the next request requires database or filesystem persistence, a network route, a queue, an external log, an identifier, a payload, a real-data detector, a provider, a hospital system, a training or inference effect, a metric, an update, submission, aggregation, deployment, or runtime activity. Each requires a separate authority and focused evidence boundary.

## References

[1] [Synthetic patient-data marker rejection receipt consumption design](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_RECEIPT_CONSUMPTION_DESIGN.md)

[2] [Synthetic patient-data marker rejection receipt consumption evidence](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_RECEIPT_CONSUMPTION_EVIDENCE.md)
