# Synthetic Patient-Data Marker Rejection Receipt Consumption Design

**Status:** Pre-implementation source-only design. This document specifies one-use consumption of a scalar receipt produced by the synthetic marker-rejection validator. It does not accept a payload, represent an upload, inspect content, retain patient data, or invoke any external capability.

## Purpose and non-goals

The receipt consumer narrows the existing local demonstration: after a generated scalar marker has already been terminally rejected, a separate component can consume that receipt once without converting the blocked posture into eligibility or execution. Its acceptance condition is a frozen scalar readout retaining `blocked`, `not_assessed`, `not_started`, and `not_performed` states.

The consumer must not accept a patient-data-shaped declaration, a file, bytes, text, record, image, identifier, URI, path, credential, or a real payload. It must not create a transport request, storage action, data classification result, privacy result, hospital workflow, clinical action, training run, inference, metric, update, submission, aggregation, deployment, or runtime action.

## Exact input and output boundary

The consumer accepts only the frozen scalar receipt associated with canonical local marker rejection.

| Input field | Required value | Meaning |
|---|---|---|
| `outcome` | `closed` | The preceding validator has reached terminal closure. |
| `transfer` | `blocked` | No transfer state exists. |
| `privacyAssessment` | `not_assessed` | The receipt makes no privacy conclusion. |
| `empiricalEvaluation` | `not_started` | No evaluation began. |
| `execution` | `not_performed` | No workload or action ran. |
| `reason` | `synthetic_marker_rejected` | The receipt originated from the explicit generated marker. |

The consumer returns a new frozen, scalar-only receipt. Its state and code are limited to `closed` or `closed_replay` and to consumed, invalid, or replay-closed reason codes. It retains no content, payload, declaration, object reference, path, or capability.

## State and failure posture

| Condition | Consumer state | Transfer | Evaluation | Execution |
|---|---|---|---|---|
| Exact frozen canonical rejection receipt | `closed` | `blocked` | `not_started` | `not_performed` |
| Mutable, malformed, broadened, or unknown-field receipt | `closed` | `blocked` | `not_started` | `not_performed` |
| Any call after the first attempt | `closed_replay` | `blocked` | `not_started` | `not_performed` |

Invalid input and replay are terminal. No retry, alternate input, fallback receipt, or reopening path exists. If the canonical receipt is retained internally for test observability, it must retain only a private scalar sentinel and serialize to an empty object.

## Implementation and local-proof plan

The Agent module will carry the minimal structural scalar contract locally and have no imports. A focused import guard will forbid network, filesystem, provider, storage, transport, identity, trainer, data, model, metric, update, submission, aggregation, runtime, and workflow dependencies. Deterministic in-memory tests will cover canonical consumption, frozen output, invalid and mutable receipts, unknown fields, broadened transfer/evaluation/execution values, hidden sentinel serialization, and replay suppression.

The aggregate Agent quality suite must pass before the outcome is published. Any result may describe local receipt consumption only; it must not be described as a patient-data detection result, privacy control outcome, real data-transfer prevention, hospital integration, clinical result, deployment, or runtime proof.

## Stop conditions

Stop if an extension requires a real payload, data classifier, file, transport, storage, provider, identity, training, inference, metric, update, submission, aggregation, hospital system, clinical context, or external invocation. Such work requires separate authority, a new focused boundary record, and independently governed evidence.

## References

[1] [Synthetic FedProx patient-data marker rejection boundary design](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_PATIENT_DATA_MARKER_REJECTION_BOUNDARY_DESIGN.md)

[2] [Synthetic FedProx patient-data marker rejection evidence record](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_PATIENT_DATA_MARKER_REJECTION_EVIDENCE.md)
