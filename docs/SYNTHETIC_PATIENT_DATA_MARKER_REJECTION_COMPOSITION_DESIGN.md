# Synthetic Patient-Data Marker Rejection Composition Design

**Status:** Pre-implementation source-only design. This document specifies a fixed, deterministic composition check across the completed local marker validator, receipt consumer, in-memory terminal ledger, and disabled application fake. It accepts no caller input and receives no payload, file, text, image, identifier, path, credential, dataset, model artifact, or patient information.

## Nontechnical requirements and explicit non-goals

The only research value of this slice is a legible local proof that the four source-only controls preserve the same terminal blocked posture when composed. It serves no clinical, hospital, privacy, security, compliance, operational, deployment, or runtime purpose. The implementation must use an internally constructed generated scalar declaration, must expose only a scalar blocked outcome, and must make no inference about any real data-transfer or data-detection process.

## Technical requirements and trust boundary

The composition module is a pure deterministic application contract. It may import only the four existing source-only local modules through relative application-package paths. It must not accept arguments, branch on caller input, import any network, filesystem, storage, database, cache, provider, transport, identity, workflow, trainer, data, model, metric, update, submission, aggregation, deployment, runtime, configuration, or external adapter dependency.

Each inner component maintains its existing strict exact-shape, frozen-object, one-use, and terminal-closure rules. The composition module must not expose inner receipts, snapshots, declaration objects, private values, or component instances. It must not return an enabled, eligible, evaluable, executable, transferable, or privacy-assessed state.

## Data and schema boundary

The only constructed input is a fixed frozen declaration with generated scalar labels indicating `source_only`, `blocked_before_transfer`, and `reject`. No payload field exists. The composition output is a frozen scalar readout with a schema version, `state: closed`, `transfer: blocked`, `privacyAssessment: not_assessed`, `empiricalEvaluation: not_started`, `execution: not_performed`, and allowlisted codes representing the four closure stages.

| Stage | Permitted internal value | Prohibited value category |
|---|---|---|
| Marker declaration | Fixed generated scalar labels only. | Patient data, clinical text, file, image, identifier, path, URI, or free text. |
| Validator receipt | Frozen scalar closed/blocked readout. | Data classification or detection result. |
| Consumer receipt | Frozen scalar closed/blocked readout. | Transport, storage, privacy, or execution capability. |
| Terminal record | Frozen scalar in-memory closure. | Persistent store, audit entry, cache value, or external restart record. |
| Composition readout | Frozen scalar closed/blocked/disabled outcome. | Inner object, payload, capability, route, or result metric. |

## Workflow, denial, and restart posture

The fixed sequence is: construct one frozen generated declaration; validate it; consume the canonical blocked receipt; record the canonical consumed receipt in a new in-memory ledger; present the terminal record to a new disabled fake; and project only the final scalar readout. If any inner stage fails its canonical check, the composition must return a frozen closed/blocked/no-evaluation/no-execution outcome with a stage-specific scalar reason. It must not retry, substitute a value, retain an inner object, or invoke an alternate path.

The composition itself is stateless between calls. Each invocation creates new in-memory local components and repeats the same fixed generated scalar sequence. This is deterministic test isolation, not a runtime retry, session, transport, persistence, or restart mechanism.

## Architecture and dependency direction

The composition module depends inwardly on the existing local validator, consumer, ledger, and disabled fake. No outward adapter or framework dependency is permitted. The module is the only new composition point; it does not alter the existing component contracts. A focused import guard must allow only the four named relative source-only modules and reject every other import.

## Engineering standards and observability

The composition output must be frozen, scalar-only, and free of body, payload, identifier, path, locator, credential, provider, or object-reference data. Tests must use no I/O and must inspect only equality, key sets, frozen status, and terminal scalar taxonomy. No logs, analytics, telemetry, observability feed, or monitoring integration is created.

## API and readout

The function takes no argument and returns a typed frozen scalar outcome. Its status taxonomy distinguishes only full fixed-chain closure and deterministic stage-closure failure. It must not expose the word “upload” as an executed event; “blocked” denotes a generated local scalar state only.

## Test and proof plan

Deterministic Node tests will verify the exact frozen full-chain readout, fresh invocations yielding equivalent scalar outcomes without shared references, no extra output keys, and source-import isolation. The Agent aggregate local quality suite must pass before publication. The proof boundary ends at deterministic local TypeScript behavior; no runtime invocation, deployment, external service, dataset, model, trainer, metric, update, submission, aggregation, or hospital-system test is allowed.

## AI handoff and stop conditions

The implementation changes one application module, one test module, and the Agent import-guard scripts. Outcome publication will add one evidence record, one dossier entry, one Research Ledger entry, one Hospital Node link, and the actual roadmap status. Stop if any extension requires real data, a caller-provided payload, an interface, a request route, external persistence, transport, identity, provider, training, inference, metrics, update handling, submission, aggregation, deployment, runtime activity, or a stronger claim.

## References

[1] [Synthetic FedProx patient-data marker rejection evidence record](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_PATIENT_DATA_MARKER_REJECTION_EVIDENCE.md)

[2] [Synthetic patient-data marker rejection disabled application evidence](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_DISABLED_APPLICATION_EVIDENCE.md)
