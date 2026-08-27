# Synthetic Patient-Data Marker Rejection Receipt Consumption Evidence

**Status:** Local source-only contract evidence. The isolated Hospital Node Agent receipt consumer has been implemented and its aggregate local quality suite has passed. This evidence concerns one-use consumption of a prior generated scalar rejection receipt only. It is not evidence of real patient-data detection, transfer prevention in an operating environment, privacy, security, compliance, hospital integration, clinical utility, deployment, or runtime behavior.

## Implemented local behavior

The consumer accepts one exact frozen scalar receipt for the already-closed generated marker. It returns a new frozen scalar receipt that retains `blocked` transfer, `not_assessed` privacy, `not_started` evaluation, and `not_performed` execution states. It holds at most a private scalar sentinel and exposes no capability, payload, declaration, record, path, identifier, or other content through ordinary enumeration or JSON serialization.

| Local condition | Observed consumer posture | Bounded interpretation |
|---|---|---|
| Exact frozen local-rejection receipt | Consumed once and closed. | A local scalar result remained terminally blocked. |
| Mutable, malformed, broadened, or unknown-field receipt | Closed as invalid. | The consumer did not admit altered scalar inputs. |
| Transfer, evaluation, or execution claim in a receipt | Closed as invalid. | Such claims did not change the source-only state. |
| Replay or replacement after the initial call | Closed as replay. | The consumer did not reopen or accept substitute input. |

## Local quality evidence

The Agent quality suite passed with deterministic in-memory Node tests and the focused source-import guard. The consumer module has no imports. Its tests use no payload, file, data record, medical image, identifier, data source, model, trainer, metric, update, submission, aggregation, provider, storage, transport, socket, listener, or runtime action.

## Interpretation limits

| Supported statement | Unsupported statement |
|---|---|
| A scalar local-rejection receipt can be consumed once while retaining a terminal blocked posture. | A real attempted upload was received, inspected, detected, blocked, stored, or prevented from transfer. |
| The consumer denies altered and replayed scalar receipts in local tests. | A real privacy, data-loss-prevention, security, clinical, hospital, operational, deployment, or runtime control was evaluated. |
| The consumer does not expose a retained scalar sentinel through ordinary JSON serialization. | A storage, transport, audit, monitoring, or retention system was implemented or exercised. |

> **Interpretation rule:** This consumer operates on a generated scalar receipt, not on patient data or a data payload. “Consumed” means a local TypeScript method returned a terminal scalar readout; it does not mean an upload, event, or transfer occurred.

## Retained adjacent boundaries

No real payload detector, intake route, content inspection system, storage adapter, transport, identity layer, provider connection, hospital integration, trainer, inference path, metric engine, update packaging, submission, aggregation, deployment, or runtime workflow exists in this slice. Any future work involving such a boundary must be separately authorized, designed, and evidenced.

## References

[1] [Synthetic patient-data marker rejection receipt consumption design](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_RECEIPT_CONSUMPTION_DESIGN.md)

[2] [Synthetic FedProx patient-data marker rejection evidence record](https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/SYNTHETIC_FEDPROX_PATIENT_DATA_MARKER_REJECTION_EVIDENCE.md)
