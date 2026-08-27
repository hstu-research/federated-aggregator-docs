# Synthetic FedProx Patient-Data Marker Rejection Boundary Design

**Status:** Pre-implementation, source-only design record. This design specifies a deterministic local contract that rejects an explicit *synthetic patient-data-shaped marker* before any transfer or workload action. It does not ingest, inspect, upload, classify, store, retrieve, or process patient data, medical images, clinical text, identifiers, datasets, model artifacts, or other real payloads.

## 1. Research purpose and non-goals

The purpose of this narrow control is to make the source-only branch’s prohibited-data posture observable through deterministic local contract behavior. It is intended to demonstrate only that a deliberately labeled synthetic marker is closed before any downstream action can be represented. The acceptance condition is an immutable scalar receipt whose outcome is ineligible, whose empirical evaluation is not started, and whose execution is not performed.

This boundary must not accept bytes, files, text, URLs, paths, identifiers, clinical fields, images, records, model parameters, metrics, or free-text diagnostic material. It must not open a socket, access a browser, read or write a filesystem, call a provider, invoke a trainer, perform inference, collect a metric, submit an update, enable aggregation, or expose a network listener. It must not claim that real patient data would be detected, that a privacy control is effective, or that an institutional workflow is compliant.

## 2. Trust boundary and scalar declaration

The control accepts only a frozen, plain-object declaration containing fixed scalar enum values. It never receives the purported data itself. The declaration is intentionally a test label, not a content classifier.

| Field | Required literal value | Boundary meaning |
|---|---|---|
| `schemaVersion` | `synthetic_patient_data_marker_rejection_v1` | Fixes the source-only contract version. |
| `payloadClass` | `synthetic_patient_data_shaped_marker` | Identifies a deliberately generated test marker; it is not patient data. |
| `transferIntent` | `blocked_before_transfer` | Disallows transfer representation. |
| `studyBoundary` | `source_only` | Retains the non-executing research posture. |
| `action` | `reject` | Requires terminal local rejection. |

The validator must allow exactly these keys and values, reject mutable objects and unknown fields, and close after one validation attempt. It must use no imported capability beyond language-level behavior.

## 3. Typed outcome and state closure

The scalar-safe receipt has no payload-bearing fields. It reports only the local control state below.

| Condition | Receipt outcome | Transfer state | Empirical evaluation | Execution | Allowed reason |
|---|---|---|---|---|---|
| Canonical frozen marker declaration | `closed` | `blocked` | `not_started` | `not_performed` | `synthetic_marker_rejected` |
| Mutable, broadened, malformed, or unknown-field declaration | `rejected` | `blocked` | `not_started` | `not_performed` | `invalid_declaration` |
| Any call after the first attempt | `closed` | `blocked` | `not_started` | `not_performed` | `detector_already_closed` |

The terminal receipt is frozen. The canonical declaration and all invalid inputs result in the same transfer, evaluation, and execution posture. No branch produces eligibility, acceptance, storage, forwarding, training, inference, measurement, submission, aggregation, or runtime activity.

## 4. Implementation boundary

The planned Agent module is an isolated application-level validator and will have a deterministic Node test file. It must not import the application fake, pre-empirical readiness controls, provider adapters, identity layers, transport layers, filesystem modules, trainer modules, data modules, model modules, metric modules, update/submission modules, aggregation modules, or runtime composition. An import guard will assert this prohibition locally.

The test fixtures will be generated in memory and limited to the scalar declaration shown above. They must not use realistic names, dates of birth, medical record numbers, diagnostic values, images, data records, or payload-like text. No external execution is part of the test plan.

## 5. Local test and evidence plan

The implementation must test canonical marker closure, frozen receipt output, widened payload-class rejection, mutable declaration rejection, unknown-field rejection, invalid action rejection, and one-use replay suppression. The Agent’s aggregate local quality command must pass before source publication. The resulting documentation may report the presence of the control and the observed local contract outcome only; it must explicitly retain the absence of real data transfer, patient-data detection, privacy assessment, hospital integration, training, model, metric, clinical, deployment, and runtime evidence.

## 6. Stop conditions

Stop rather than extend this slice if a proposal requires a real payload, a real-data detector, protected health information, a data source, storage, a transport route, provider credentials, a runtime listener, a training or inference action, a metric, an update, aggregation, a hospital system, or a clinical claim. Each such proposal requires separate authority and independently governed evidence.

## References

[1] [Synthetic FedProx thesis evidence boundary matrix](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_EVIDENCE_MATRIX.md)

[2] [Synthetic FedProx thesis final package-readiness record](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_THESIS_FINAL_PACKAGE_READINESS_RECORD.md)
