# Active Work

- [x] Configure the documentation and future core repositories to use the user's Git name and email for all new commits.
- [x] Add the documentation-ledger convention to the project governance record.
- [x] Research stakeholders, governance context, federated-learning practice, and model-release needs.
- [x] Write the non-technical aggregator-core requirements analysis: user, business, research, governance, risk, and opportunity requirements.
- [x] Add the requirements analysis, decision record, research-log entry, and open questions to the documentation site.
- [ ] Commit and push the documentation update using the user's configured Git identity.
- [ ] Deliver the analysis and identify the next architecture decision gate.

## GitHub Organization Migration to hstu-research

- [x] Inventory every organization-bound reference across the Core, documentation, administrator portal, thesis, Git remotes, GitHub Actions, deployment workflows, and hosted-service configuration.
- [x] Transfer `federated-aggregator-core`, `federated-aggregator-docs`, `federated-aggregator-admin-portal`, and `thesis_breast_cancer` to `hstu-research` while preserving repository visibility, history, and default branches.
- [x] Update local repository remotes, active source metadata, CI/CD and deployment documentation, Render source settings, and documentation links to make `hstu-research` authoritative. The Azure workflow remains repository-local, so no Azure source URL rewrite was required.
- [x] Verify the transferred repository URLs, GitHub Actions visibility, Azure deployment source path, Core Quality Gates run 31, protected Azure deployment run 16, and the Render documentation build from `hstu-research/federated-aggregator-docs` commit `3a8e65b`; record the result in the public research chronology and publish a documentation checkpoint.

## Bounded Aggregation Callback and Redis Resilience Evidence

- [x] Read the current public decision ledger and Core contracts to define one synthetic federation, protocol, round, verified descriptor set, aggregation job, callback, and evidence query. Synthetic archive bytes remained worker-local/object-storage-only; no patient data, clinical images, credentials, bearer tokens, raw provider responses, or storage locators entered the ledger.
- [x] Add the profile-gated `bounded-aggregation-validation` Azure harness and operator runbook. The runner creates synthetic control-plane records, dispatches one job through the real outbox path, waits for descriptor-only reconciliation, and emits only safe identifiers, lifecycle states, digests, checksum, and byte-size evidence.
- [x] Temporarily set `AGGREGATION_WORKER_ENABLED=true` only for the bounded synthetic test, repair the missing private callback URL and non-root OIDC-secret handoff found during the first controlled attempt, verify the real worker result as `succeeded|candidate_ready|enqueued|accepted`, then immediately restore the default disabled gate and its explicit log state.
- [x] Run a separate disposable Redis primary/two-replica/three-Sentinel fault-injection exercise. It observed primary loss and a final `subjectively_down` state but no promotion during the bounded window; the test topology was removed and the current direct-URL Core path remains explicitly non-Sentinel-aware.
- [x] Record the bounded callback and Sentinel evidence in the public chronology, keep all secrets and raw provider responses out of the ledger, apply the indexed-archive presentation refinements, and publish a documentation checkpoint.

## Next Federated System: Documentation-First Autonomous Delivery

- [x] Review the completed Core ledger, existing administrator portal, thesis materials, and supplied research sources to select the separate Hospital Node Agent boundary without duplicating the Core control plane.
- [x] Publish an in-depth non-technical requirements analysis covering users, hospital operating model, research value, clinical-data boundary, governance, risks, and measurable outcomes for the Hospital Node Agent.
- [x] Publish the matching technical requirements analysis, logical schema, lifecycle and exception flows, system architecture, modular engineering standards, workflow design, proposed workload API contract reference, and AI-ready implementation handoff.
- [x] Create `hstu-research/federated-aggregator-hospital-node`, establish its tested synthetic baseline at `cfcf1dc`, and retain integration exclusively through the Core’s proposed descriptor, command, and workload-identity boundaries.
- [x] Add restart-safe local SQLite run state at `2468f4b` with unique assignment/idempotency identity, append-only event labels, terminal-run recovery, and in-process fake Core adapters; Hospital Node Quality Gates #2 passed in 18 seconds. No local status route, data path, token, object locator, artifact byte, patient field, or Core network integration was added.
- [x] Add in-memory scoped capability, checksum, token, remote-outcome, and fake storage guards at `deee8a6` and `1dcff80`; Hospital Node Quality Gates #3 and #4 passed. The work proves only synthetic contract behavior—no Azure/Core call, capability URL, automatic retry, persistent credential, raw byte API, or hospital data path was introduced.
- [x] Add the opt-in localhost-only synthetic status read and static Compose test profile at `e11d661`; Quality Gates #5 passed in 20 seconds. The direct loopback response is tested; Docker is unavailable in this sandbox, so no container runtime proof or public deployment is claimed.
- [x] Specify the additive Core hospital-node workload contract before integration: distinct audience/guard, participation-gated assignment and lease lifecycle, descriptor-only artifact intent/submission, safe event/audit schema, test sequence, and bounded Azure synthetic proof. Existing human and `ml_worker` routes remain prohibited.
- [x] Implement and deploy the first Core policy-only slice at `79bdcee`: hospital-node assignment/lease vocabulary, state transitions, lease eligibility, repository port, and deterministic denials. Full local CI, Core Quality Gates, Azure deployment, and public liveness/readiness passed; no migration, HTTP route, capability, credential, node call, or worker activation was added.
- [x] Implement and deploy the additive Core persistence foundation at `31e7588`: constrained assignment/lease/safe-event schema plus migration `0010`, unique assignment/idempotency controls, and descriptor-only columns. Full local CI, Core Quality Gates, Azure deployment, and public liveness/readiness passed; no adapter, API route, capability, Keycloak client, node call, hospital data, or worker activation was added.
- [x] Implement and deploy `HospitalNodeAuthGuard` at `92c6c53`: distinct `fedagg-hospital-node` audience, active workload hydration, and hospital-node-kind enforcement with ML-worker denial. Full local CI, Core Quality Gates, Azure deployment, and public liveness/readiness passed; no controller, Keycloak client, token, route, capability, node call, hospital data, or worker activation was added.
- [x] Implement and deploy `PostgresHospitalNodeAssignmentRepository` at `263e596`: exact workload/participant context, idempotent lease recovery, one-active-lease database index, assigned-to-leased compare-and-set, and scalar-only lease event. Full local CI, Core Quality Gates, Azure deployment, and public liveness/readiness passed; no controller, Keycloak client, immutable command, capability, update/submission route, node call, hospital data, or worker activation was added.
- [x] Document the canonical-command prerequisite before lease-route work: Core must persist the Agent-validated descriptor-only `hospital-node-command/v1` payload plus Core-computed digest because existing protocol digest metadata cannot reconstruct it. The future payload excludes locators, credentials, bytes, paths, free text, and patient data.
- [x] Implement and deploy the first dedicated hospital-node lease route at `0fd4e4b`: `HospitalNodeAuthGuard` only, principal-derived workload binding, UUID idempotency key, and lease receipt plus stored descriptor-only command. Full local CI, Core Quality Gates, Azure deployment, and public liveness/readiness passed; the route was not invoked because no node Keycloak client or assignment exists, and no capability, artifact transfer, submission, data, or worker change was added.
- [x] Design the bounded endpoint proof before configuration: a distinct private `hospital-node-synthetic` OIDC client/secret/audience/claim, opt-in Core-network profile, generated synthetic assignment/command, one lease call, and immediate fixture non-reuse. ML-worker identity and aggregation-worker activation remain prohibited.
- [x] Validate the initial slice against the Core test environment and record the bounded lease evidence in the public ledger: Core `7d9218c` deployed successfully; the separate private synthetic client acquired a token; one generated assignment received one descriptor-only lease; the fixture closed as one expired assignment, zero active assignments/leases, and one safe closure event; Azure liveness/readiness remained HTTP 200 and the aggregation worker stayed disabled.
- [x] Document the next Core gate before implementation: a narrowly privileged synthetic assignment-creation authority, including frozen-fact eligibility, idempotency, audit, expiry, and denial tests. Do not implement model-read capability, update intent, artifact transfer, or submission until that design is accepted.
- [x] Increment A — Publish the assignment-creation authority contract: explicit principal, input shape, frozen-fact source, canonical-command ownership, idempotency, safe event/outbox evidence, expiry/terminal handling, and denial matrix.
- [x] Increment B — Implement only the documented synthetic assignment-creation authority with deterministic domain/application/persistence tests; retain every human route, ML-worker identity, artifact capability, transfer, training, and submission path as unavailable. Core `a0f423b` added the private service/port/domain/adapter boundary and 10 new TypeScript tests.
- [x] Increment C — Pass Core quality gates and protected Azure deployment; verify liveness/readiness and the default-disabled aggregation worker before any bounded runtime exercise. Quality passed in 1 minute 41 seconds; protected Azure deployment passed in 3 minutes 1 second; liveness/readiness were HTTP 200 and the worker stayed disabled.
- [x] Increment D — Record deployment evidence and define the next safe boundary before any new implementation work.
- [x] Increment E — Publish the bounded creation-only composition-proof contract: a new private profile/runner must compose the service for generated facts, prove exact replay, and close the fixture without token, endpoint, lease, capability, transfer, submission, dispatch, or worker activation.
- [x] Increment F — Implement the documented creation-only profile, runner, and deterministic tests; deploy `0b48aeb`, then run it once only after Azure health and default-disabled worker verification. The proof closed as one expired synthetic assignment, zero active assigned/leased records, one closure event, and zero remaining runners.
- [x] Increment G — Publish the descriptor-only base-model-read intent contract: lease-bound node-only issuance, Core-owned model descriptor mapping prerequisite, additive receipt/state/event design, exact replay, redaction, and no-storage-access proof requirements.
- [x] Increment H0 — Publish the missing Core-owned verified base-model descriptor mapping contract and additive schema prerequisite. The current `rounds.baseModelVersionId` is an opaque string and the current artifact categories do not represent a verified base-model archive, so it cannot safely support a node read-intent yet.
- [x] Increment H1 — Implement and deploy only the documented verified base-model descriptor mapping plus persistence tests. Core `9fce888` added migration `0012`, immutable descriptor/event persistence, exact replay/conflict tests, and a private service; 68 TypeScript and 9 Python tests, quality/deployment, Azure health, and the disabled-worker gate passed. No mapping runtime profile ran.
- [x] Increment H2 — Resume the documented base-model-read intent boundary only after H1 mapping evidence is recorded and accepted.
- [x] Increment I — Implement only the documented lease-bound, HospitalNodeAuthGuard-only descriptor receipt for base-model-read intent issuance plus its migration, redaction, atomicity, and guard tests. Core `d9b55fc` added migration `0013`, the guarded receipt route, domain/application/persistence/controller coverage, and 77 TypeScript plus 9 Python tests. Quality/deployment, Azure health, and disabled-worker checks passed; no runtime intent request occurred.
- [x] Increment J0 — Publish the one-shot descriptor-intent issuance-and-expiry proof profile contract before implementation. It must use generated facts only, issue one intent through the guarded Core route, assert redaction, expire the intent/lease/assignment, append safe closure evidence, and never contact storage or enable the aggregation worker.
- [x] Increment J1 — Implement and deploy the documented opt-in descriptor-intent proof profile/runner. The profile later issued and expired one guarded descriptor-only intent through the rebuilt validation runner; the successful route proof is recorded in J1d.
- [x] Increment J1a — Record the pre-route duplicate-workload discovery and correction: the existing separate synthetic workload mapping must be reused rather than duplicated. The initial profile transaction rolled back before any guarded request or read-intent write.
- [x] Increment J1b — Implement, quality-check, and deploy the mapping-reuse correction. Core `261a639` passed local quality, Core Quality Gates, and protected Azure deployment; the source has not yet been executed because the next Compose run reused a stale local profile image.
- [x] Increment J1c — Publish the explicit runner-image rebuild requirement. The prior correction release activated successfully, but Compose reused the old local profile image; that stale image repeated the pre-route duplicate workload failure and rolled back before the guarded route.
- [x] Increment J1d — Recheck Azure health/default-disabled worker, then perform one `run --build` validation with the corrected runner. The rebuilt runner issued and expired one descriptor-only intent; closure evidence was one expired assignment, zero active leases, zero issued intents, one closure event, zero runner instances, HTTP 200 liveness/readiness, and disabled worker.
- [x] Increment J2 — Publish the next Core-mediated model-stream authorization design gate and its no-locator/no-credential/no-transfer-before-proof constraints.
- [x] Increment J3 — Produce the full requirements, schema, workflow, architecture, engineering-standard, API, and implementation-handoff dossier for Core-mediated generated-model streaming before any stream endpoint, Agent download, or local training integration is implemented.
- [x] Increment K1 — Publish the complete Core-mediated generated-model streaming dossier: nontechnical and technical requirements, data/schema, workflow, architecture, engineering rules, API contract, test plan, and implementation handoff.
- [x] Increment K2 — Implement only the reviewed Core-mediated stream boundary for a generated non-clinical fixture, retaining no storage locator/credential disclosure, no Agent integration, no training, no update/submission, and no worker enablement. Core `d3516e4` added the guarded full-body route, private adapter/repository/session state, migration `0014`, and 83 TypeScript plus 9 Python tests.
- [x] Increment K3 — Pass Core quality gates and protected Azure deployment, then verify liveness/readiness and the default-disabled aggregation worker before any bounded stream execution. Quality passed in 1 minute 55 seconds; protected Azure deployment passed in 2 minutes 46 seconds; Azure health remained HTTP 200 and the worker remained disabled.
- [x] Increment K4 — Run one generated-fixture stream proof, record only safe aggregate evidence, close the intent, and confirm no runner or active proof state remains. Core `707cf23` passed local quality, Core Quality Gates run `32567581955`, and protected Azure deployment run `32567581950`; the rebuilt profile ran once and closed with one completed stream session, one consumed intent, zero active sessions/intents/leases, one closure event, zero runner containers, HTTP 200 health, and the default-disabled aggregation worker.
- [x] Increment K5 — Publish the evidence and document the next safe boundary before connecting any Agent download or local training flow. The public ledger now records the bounded Core stream proof; the next gate is the Agent receipt-verification and synthetic-local-persistence dossier.
- [x] Increment K2a — Record deployment evidence for the reviewed Core-mediated stream boundary and publish the exact generated-fixture profile contract before writing a runner.
- [x] Increment K2b — Implement and deploy the isolated stream validation profile/runner. Core `707cf23` passed local quality, Core Quality Gates, and protected Azure deployment; its one rebuilt invocation generated a non-clinical fixture through Core-private setup, called the node-only stream route once, verified hash/length/redaction privately, closed state, and exposed no storage credential or locator.
- [x] Increment L1 — Publish the Agent receipt-verification and synthetic-local-persistence dossier before any Agent code changes. It defines local requirements, schema, workflow, architecture, engineering standards, typed Core-client boundary, AI handoff, tests, and a future bounded proof without authorizing training.
- [x] Increment L2 — Implement only the documented Agent receipt/value contracts and local SQLite receipt/event persistence. Agent `a9561ff` adds the local-only contracts, pure state matrix, additive SQLite receipt/materialization/event persistence, idempotency, terminality, restart coverage, and 17 TypeScript plus 4 Python passing tests. No Core HTTP adapter, workspace materialization, token flow, training, update, submission, aggregation, or Azure Agent proof occurred.
- [x] Increment L2a — Add versioned scalar-safe receipt/materialization/event contracts and pure state-transition tests. `a9561ff` rejects unexpected token, URL, locator/version, provider response, raw header/body, workspace path, byte payload, local-data, and free-text diagnostic fields; exact/mismatched observed facts and terminal transition denial are tested.
- [x] Increment L2b — Add an additive SQLite migration/repository that atomically persists immutable expected receipt facts, materialization outcomes, and allowlisted events. `a9561ff` covers exact issue replay, terminal immutability, and restart-safe rejection recovery without any network or workspace adapter.
- [x] Increment L3 — After L2 evidence, implement the document-defined local verification use case and fake generated-fixture workspace adapter with integrity, cleanup, redaction, and restart tests. Agent `ec217dd` passes local CI with 21 TypeScript and 4 Python tests; no real Core client, token, HTTP request, filesystem, storage, Azure, training, update, submission, or aggregation occurred.
- [x] Increment L3a — Add a local application use case that consumes only a validated scalar receipt and generated in-memory bytes, computes exact checksum/byte-size/content-type equality, persists a terminal observation through L2, and returns a redacted scalar result. `ec217dd` adds `verifyBaseModelReceiptLocally` with no Core, OIDC, HTTP, storage, Python, trainer, update, or submission import.
- [x] Increment L3b — Add an in-memory fake generated-fixture workspace adapter with temporary/promoted/cleaned lifecycle tests. `ec217dd` proves exact-match promotion, mismatch cleanup, interruption cleanup, redacted scalar output, and terminal-replay workspace suppression without filesystem, network, or Azure use.
- [ ] Increment L4 — After L3 evidence, design and implement the typed hospital-node Core client plus private workspace adapter, then pass quality/deployment gates before a separately documented one-shot Agent/Core proof.
- [x] Increment L4a — Publish the typed Hospital Node Core-client and private workspace adapter contract before code. The new L4 dossier specifies the separate workload-token seam, two allowed Core routes, full-body response classification, no redirect/Range/raw-body projection, private workspace lifecycle, status taxonomy, observability/redaction, compatibility fixtures, quality gates, and a later proof plan.
- [x] Increment L4b — Implement only deterministic fake typed Core-client and fake private-workspace adapters against the L4 contract. Agent `afc98d1` passes local CI with 25 TypeScript and 4 Python tests; it covers allowed sequencing, route/status denial, full-body fact projection, no provider fields, no raw headers/bodies/tokens/paths, and workspace cleanup compensation without a socket, token source, provider client, filesystem, Azure resource, trainer, update, submission, or aggregation worker.
- [x] Increment L4c — Publish a concrete-adapter review record before real implementation: configuration ownership, separate token-port wiring, fixed Core host/route allowlist, response validator/error map, private-root permissions, cleanup-failure handling, compatibility checks, deployment posture, and a later proof precondition. The L4 dossier now records this review without a real Core request or Azure Agent run.
- [x] Increment L4c1 — Define a non-runtime transport review artifact: injected configuration shape without values, hospital-node token-port ownership, fixed Core route construction, no-redirect/no-Range/no-encoding policy, safe response classification, log redaction, and compatibility fixtures. Agent `6cb6662` adds deterministic configuration/route/response review values and tests without fetch, token, environment, or network code.
- [x] Increment L4c2 — Define a non-runtime private-workspace review artifact: injected private-root ownership, restrictive permission lifecycle, temporary/promoted/discarded cleanup matrix, crash/restart/cleanup-failure posture, pathless capability projection, and negative test matrix. Agent `6cb6662` adds type-only root/permission/lifecycle review values and tests without filesystem or path persistence.
- [x] Increment L4d — Implement concrete typed Core and private workspace adapters only after L4c is public and locally reviewed. Agent `ec1c98f` passes local CI with 33 TypeScript and 4 Python tests; it remains behind injected doubles and does not deploy or call Core.
- [x] Increment L4d1 — Implement a concrete typed Core transport behind injected request and workload-token ports. `ec1c98f` enforces closed HTTPS/two-route behavior, internal token containment, redirect/Range/encoding/body denial, bounded response validation, scalar-safe error mapping, and no raw transport projection. Tests use deterministic request/token doubles only; no actual Core request.
- [x] Increment L4d2 — Implement a concrete private filesystem workspace behind an injected filesystem port. `ec1c98f` validates private-root readiness, requires exclusive temporary creation, streams/hashes/counts with bounds, promotes through the injected port, compensates a failed persistence step, and returns only receipt-scoped scalar capability. Tests use an in-memory filesystem double only; no host filesystem action.
- [ ] Increment L4e — Publish a separate deployment and bounded-proof dossier before any production wiring or runtime invocation: concrete request-port/token-source/filesystem adapter ownership, protected Agent release posture, compatibility gates, redacted health/preflight/closure record, one opt-in generated-fixture proof, and explicit no-training/no-submission/no-aggregation limits.
- [x] Increment L4e1 — Publish the full deployment-and-proof dossier before runtime wiring: nontechnical/technical requirements, deployment configuration ownership, identity/transport/filesystem adapter mapping, protected release checks, redacted preflight/readout, one-shot generated-fixture workflow, aggregate closure, failure/retry policy, tests, AI handoff, and explicit stop conditions. The new L4e dossier records all of these as design-only constraints.
- [x] Increment L4e2 — Implement and locally validate protected Agent runtime wiring only after L4e1 is public. Agent `ea97b69` adds the no-port/no-default/no-restart preflight Compose profile, opaque reference validation, scalar-safe readout, and 35 TypeScript plus 4 Python passing tests. No profile invocation occurs until release/health/worker gates are confirmed.
- [ ] Increment L4e3 — Run one generated-fixture Agent/Core proof only after Agent and Core quality/deployment, release identity, liveness/readiness, aggregation-disabled, and preflight gates are recorded. Agent `8e53c22` and Core `a64488d` source gates are green; Core Azure health is 200/200 and worker disabled, but no target Agent proof composition exists. The proof is safely blocked pre-route until L4e2c–L4e2e topology/release work completes. Use one rebuilt opt-in profile and publish safe terminal closure before any retry.
- [x] Increment L4e2a — Publish a private Core-to-Agent proof-handoff coordination contract before cross-repository runtime wiring. The new coordination dossier defines Core-created generated context, narrow ephemeral handoff, independent lease-first Agent consumption, scalar result, closure, no discovery/public exposure/storage bypass, and safe aggregate evidence.
- [x] Increment L4e2b — Implement only the documented coordination components and deterministic local contract tests after L4e2a is public. Core `a64488d` adds strict pure handoff/result validators with 67 TypeScript and 9 Python passing tests; Agent `8e53c22` adds fake-first lease/intent/stream/workspace orchestration with 37 TypeScript and 4 Python passing tests. No target runtime, live secret, Core/Azure request, provider, training, update, submission, or aggregation occurred.
- [x] Increment L4e2c — Implement a Core-private one-shot coordination runner behind typed handoff/result channel ports. Core `669b1e0` passed local quality (69 TypeScript tests, 9 Python tests), Core Quality Gates, and protected deployment. It uses injected fakes only; no fixture, storage, route, locator, provider, token, header/body, or worker change occurs in this increment.
- [x] Increment L4e2d — Implement an Agent one-shot runtime runner behind concrete token/request/filesystem/channel ports. Agent `03576b1` passed local CI with 39 TypeScript and 4 Python tests and Hospital Node Quality Gates. It validates one protected handoff and delegates only through injected ports; no target invocation occurs.
- [x] Increment L4e2e — Add a protected composite profile with directional ephemeral private channels, no public port/default activation/restart/host bind, opaque secret references, and static configuration checks. Agent `ad3e624` provides a non-executing topology template with these source constraints; target rendering/release binding remains required before any run.
- [ ] Increment L4e2c1 — Add Core-private channel port and one-shot coordinator state machine with strict handoff/result validation, bounded wait, single-result acceptance, closure callback, and fake-only tests. Do not create a fixture, touch storage/database, read a secret, or invoke a target runtime.
- [ ] Increment L4e2d1 — Add Agent runtime channel, token, request, and workspace adapters with injected fakes and a one-shot runner composition test. Keep all output scalar-safe; do not execute real filesystem, OIDC, HTTP, Core, provider, or Azure activity.
- [ ] Increment L4e2e1 — Add an opt-in cross-repository composition manifest/source template with directional ephemeral channels and protected references. Validate source constraints locally; do not run it until target release/preflight checks are green.
- [x] Increment L4e2f — Publish and implement a bounded generated-context port behind injected deterministic fakes only. Core `bde985a` validates one supplied handoff, refuses reuse/uncorrelated terminal callbacks, and returns scalar-safe facts only. It creates no fixture and has no database/storage/provider, secret, token, or runtime dependency; local quality and Core Quality/Deploy workflows succeeded.
- [x] Increment L4e2g — Publish and implement a bounded private wait port behind injected deterministic fakes only. Core `bde985a` validates a positive limit and returns only continued/timed-out/interrupted scalar outcomes; the coordinator closes/removes on terminal wait facts without retry. It reads no configuration, opens no network, schedules no work, and runs no target profile; local quality and Core Quality/Deploy workflows succeeded.
- [x] Increment L4e2h — After L4e2f/g evidence, compose a source-only Core proof-runner entrypoint with explicit opt-in and injected ports. Core `550ebf8` returns a versioned scalar readout, refuses disabled/invalid input before coordinator use, and does not retry a coordinator refusal. Local quality passed 82 TypeScript and 9 Python tests; Core Quality Gates `32665135582` and protected deployment `32665135576` succeeded. No target Compose service, fixture setup, identity source, database/storage/provider dependency, public route, training, submission, or aggregation change was added.
- [x] Increment L4e2i — Publish and implement a separate protected Agent proof-runner image source and non-invoking entrypoint. Agent `714480d` adds the Node 22/frozen-lockfile/non-root image source plus a versioned scalar image preflight that never invokes the runner. Local CI passed 44 TypeScript and 4 Python tests; Hospital Node Quality Gates `32665704597` succeeded. No build/push/deploy, token, Core client/channel/workspace, handoff/result access, public port, or target proof was performed.
- [x] Increment L4e2j — Publish and implement an injected-only Agent runtime adapter composition factory using the already reviewed typed Core client, pathless workspace, private channel, and one-shot runner. Agent `7983502` requires explicit enablement and prevalidated config, uses deterministic fake ports only, returns scalar-safe results, and adds no OIDC/fetch/filesystem/channel discovery/image binding/target runtime, fixture, training, submission, or aggregation behavior. Local CI passed 47 TypeScript plus 4 Python tests; Hospital Node Quality Gates `32666107849` succeeded.
- [ ] Increment L4e2k — Publish a separate target-safe runtime-port binding design record for concrete identity, closed HTTP request, private filesystem, and private handoff/result channel adapters. Preserve fake-first implementation sequencing; do not implement, bind an image, stage Azure source, render Compose, or invoke a proof in the design slice.
- [x] Increment L4e2k1 — Define the concrete token-source binding contract, including protected secret-reference ownership, literal audience, bounded token lifetime, zero token persistence/output, and deterministic denial fixtures. Do not read a secret or acquire a token.
- [x] Increment L4e2k1a — Implement a deterministic injected credential-material fake and `HospitalNodeWorkloadTokenSource` adapter that accepts only the literal hospital-node audience, validates bounded scalar token metadata internally, and returns a token only to the typed Core client seam. Agent `7a29d09` adds `FakeHospitalNodeWorkloadTokenSource` without files, environment, real secret, or identity-provider contact.
- [x] Increment L4e2k1b — Add negative tests for missing, expired, wrong-audience, malformed, and replayed fake credential material; assert no token appears in scalar result/error/log doubles and no retry or cache is introduced. Agent `7a29d09` covers these determinate cases and source-object serialization redaction.
- [x] Increment L4e2k1c — Run Agent local quality and Hospital Node Quality Gates, then record exact evidence before any concrete secret-source design, image binding, Azure staging, Compose render, or proof consideration. Local CI passed 50 TypeScript plus 4 Python tests; Hospital Node Quality Gates `32666544019` succeeded.
- [x] Increment L4e2k2 — Define the fixed HTTP request-port binding contract, including an internally fixed HTTPS Core origin, connection/response limits, no redirect/Range/encoding fallback, scalar-safe error mapping, and deterministic response fixtures. Do not import or invoke fetch.
- [x] Increment L4e2k2a — Implement a deterministic scripted `HospitalNodeCoreRequestPort` double that accepts only the existing closed `read_intent` and `model_stream` request union, returns only scripted scalar-safe response facts, and exposes only aggregate operation counts. Agent `6dc9f9e` adds `FakeScriptedHospitalNodeCoreRequestPort` without socket, URL client, generic request, or raw request/response log.
- [x] Increment L4e2k2b — Add negative tests for unexpected operation/order, script exhaustion, redirect/partial/multipart/encoded/missing-safe-fact responses, and simulated transport refusal; assert no URL, authorization, token, body, or provider field appears in public adapter state or error text and no retry occurs. Agent `6dc9f9e` covers the complete deterministic denial matrix and serialized-state redaction.
- [x] Increment L4e2k2c — Run Agent local quality and Hospital Node Quality Gates, then record exact evidence before any real request-port design/implementation, image binding, Azure staging, Compose render, or proof consideration. Local CI passed 53 TypeScript plus 4 Python tests; Hospital Node Quality Gates `32666788271` succeeded.
- [x] Increment L4e2k3 — Define the private filesystem and handoff/result channel binding contracts, including fixed tmpfs roots, restrictive ownership/modes, exact record names, directional access, exclusive writes, cleanup, and crash/close behavior. Deterministic workspace and channel fakes are now separately evidenced; no host filesystem, directory enumeration, Compose render, or target runtime is present.
- [x] Increment L4e2k3a — Implement a deterministic in-memory `PrivateWorkspaceFilesystemPort` double with opaque references, root-ready/denied control, exclusive temporary allocation, bounded aggregate-only lifecycle evidence, and scripted operation refusal. Agent `cf6c2cb` adds `FakeScriptedPrivateWorkspaceFilesystem` without Node filesystem APIs, paths, directory enumeration, or retained fixture bytes in public state.
- [x] Increment L4e2k3b — Add negative tests for denied root, duplicate temporary allocation, append/close/promote/remove failure, cleanup/discard behavior, and no path/byte/reference value in public state or scalar results. Agent `cf6c2cb` covers these determinate cases without retry.
- [x] Increment L4e2k3c — Run Agent local quality and Hospital Node Quality Gates, then record exact evidence before any concrete private filesystem implementation, channel binding, image release, Azure staging, Compose render, or proof consideration. Local CI passed 56 TypeScript plus 4 Python tests; Hospital Node Quality Gates `32667019348` succeeded.
- [x] Increment L4e2k3d — Implement a deterministic in-memory `PrivateProofChannelFilesystemPort` double with one injected opaque handoff, exact-one exclusive scalar result write, scripted read/write refusal, aggregate-only snapshot, and terminal cleanup. Agent `36a9c18` adds `FakeScriptedPrivateProofChannelFilesystem` without file names/paths, directory enumeration, host filesystem, or network channel.
- [x] Increment L4e2k3e — Add negative tests for absent/malformed/oversized handoff, duplicate result write, result-write refusal, cleanup refusal, and redaction of handoff assignment/digest/result payload from public state. Agent `36a9c18` covers these determinate cases without read/write retry.
- [x] Increment L4e2k3f — Run Agent local quality and Hospital Node Quality Gates, then record exact evidence before any concrete private channel binding, image release, Azure staging, Compose render, or proof consideration. Local CI passed 59 TypeScript plus 4 Python tests; Hospital Node Quality Gates `32667220978` succeeded.
- [x] Increment L4e2l — Compose all four separately validated fake port families through the existing injected Agent runtime composition factory and one-shot runner, then prove one complete scalar lifecycle, terminal failures, redaction, no retry, and cleanup with no real secret, transport, filesystem, channel, image, Azure, or proof capability. Agent `8020cd6` completes this fake-only composition; target boundaries remain absent.
- [x] Increment L4e2l1 — Add one deterministic harness that supplies the fake workload token source, scripted closed request port, pathless workspace filesystem, and fixed private proof channel to the existing injected factory and runner. Agent `8020cd6` executes exactly one valid handoff/lease/intent/stream/materialization/result lifecycle and exposes aggregate-only port snapshots.
- [x] Increment L4e2l2 — Add terminal-path tests for token, transport, workspace, result-write, and cleanup failures; require exactly-one result attempt when permitted, no retry, no handoff/token/URL/body/path/digest projection, and explicit fake channel/workspace cleanup. Agent `8020cd6` covers the complete matrix and makes failed result writes propagate without a second write attempt.
- [x] Increment L4e2l3 — Run Agent local quality and Hospital Node Quality Gates, then record exact composition evidence before any real adapter, image binding, Azure staging, Compose render, or proof consideration. Local CI passed 62 TypeScript plus 4 Python tests; Hospital Node Quality Gates `32667511970` succeeded.
- [ ] Increment L4e2m — Publish a separate design-only concrete secret-source adapter dossier that fixes protected reference ownership, nonpersistent secret-read behavior, literal audience binding, expiry/rotation/failure rules, redacted observability, and fake-first implementation slices. Do not read a secret, acquire a token, bind an image, stage Azure source, render Compose, or invoke a proof in the design slice.
- [ ] Increment L4e2m1 — Define the concrete secret-reference input as a protected deployment-owned handle with no caller-provided secret value, fixed file/volume ownership, exact expected mode/type, one bounded in-process read, immediate zeroization boundary, and no path or reference projection. Do not open a file or mount.
- [ ] Increment L4e2m2 — Define literal audience, clock-skew, expiry, rotation, issuer/key-validation delegation, and scalar error taxonomy rules. Prohibit token caching, fallback identity, browser/device flow, client-secret logging, raw identity responses, and automatic retry.
- [ ] Increment L4e2m3 — Specify isolated fake-first implementation, secret-read failure tests, and quality/release gates. Retain the separate later decisions for request transport, image binding, Azure Agent staging, Compose render, read-only preflight, and any one-shot proof.
- [x] Increment L4e2n — Implement deterministic fake `SecretMaterialPort` and `WorkloadIdentityExchangePort` contracts, wired only through injected in-memory values and fake clocks. Agent `fd43813` validates narrow material metadata and returns only opaque token facts to the typed Core-client seam; it reads no projection and contacts no provider.
- [x] Increment L4e2n1 — Add negative tests for missing, unsafe-kind/mode, oversized, malformed, forbidden-audience, not-before, expired, policy-denied, provider-unavailable, invalid-response, no-cache, and no-retry behavior. Agent `fd43813` covers these cases and confirms secret/token/reference/provider redaction from public snapshots, errors, results, and logs.
- [x] Increment L4e2n2 — Run Agent local quality and Hospital Node Quality Gates, then record exact fake identity evidence before a separate concrete protected secret-read edge, image binding, Azure staging, Compose render, or proof consideration. Local CI passed 65 TypeScript plus 4 Python tests; Hospital Node Quality Gates `32668003652` succeeded.
- [x] Increment L4e2o — Publish a design-only protected concrete secret-read edge dossier with fixed projection ownership, exact kind/mode/owner checks, bounded nonpersistent buffer lifecycle, scalar safe-error map, deletion/rotation/restart semantics, fake-first implementation slices, and no Node filesystem import outside that later edge. The dossier authorizes no projection open, image binding, Azure staging, Compose render, or proof.
- [x] Increment L4e2o1 — Define the fixed protected projection contract: deployment-owned reference class, expected regular-file kind, literal restrictive mode/owner policy, no symlink/directory/device acceptance, one bounded read, no caller-supplied path, and no locator/reference output. Node filesystem APIs remain prohibited in this design slice.
- [x] Increment L4e2o2 — Define the transient buffer state machine, scalar error taxonomy, zeroization/deletion/rotation/restart semantics, observability redaction, and explicit closure conditions. Persistence, cache, watch/reload loop, automatic retry, and fallback identity remain prohibited.
- [x] Increment L4e2o3 — Specify fake-first adapter/test slices and separate later concrete implementation, image release, Azure staging, Compose render, preflight, and one-shot proof gates.
- [x] Increment L4e2p — Implement an injected fake protected-projection metadata/read/closure port and opaque in-memory lease, with no Node filesystem import. Agent `041c386` covers kind/mode/owner/size/change/read/disposal/restart denials, scalar error collapse, redaction, no cache/watch/retry, and explicit closure; separate concrete read-edge review remains pending.
- [x] Increment L4e2p1 — Implement deterministic fake projection metadata/read/closure ports with only an injected opaque material value, regular-file/kind/mode/owner/size facts, a bounded single-use lease, explicit disposal, aggregate snapshots, and fixed scalar errors. Agent `041c386` accepts no path, mount, handle, or reference value and imports no Node filesystem APIs.
- [x] Increment L4e2p2 — Add negative tests for absent/wrong kind, unsafe mode/owner, zero/oversize, changed-on-read, read refusal, duplicate lease use, disposal refusal, restart without restored lease, scalar unknown-error collapse, redaction, no cache/watch/retry, and exact closure. Agent `041c386` covers the deterministic matrix.
- [x] Increment L4e2p3 — Run Agent local quality and Hospital Node Quality Gates, then record exact fake projection evidence before any separate concrete Node filesystem review, image binding, Azure staging, Compose render, preflight, or proof consideration. Local CI passed 68 TypeScript plus 4 Python tests; Hospital Node Quality Gates `32668418777` succeeded.
- [x] Increment L4e2q — Publish a separate design-only concrete Node filesystem secret-read edge review. It fixes protected binding ownership, non-following open/metadata/read/close semantics, platform policy abstraction, bounded buffer/disposal behavior, scalar error translation, no general filesystem capability, and fake-first delivery gates. It authorizes no Node filesystem import, projection open, image binding, Azure staging, Compose render, or proof.
- [x] Increment L4e2q1 — Define fixed protected binding ownership and a Node platform-policy abstraction: no caller path, fixed deployment binding resolved outside application config, descriptor-first non-following open, expected regular-file metadata, owner-only policy, same-object verification before/after bounded read, and immediate close. Source remains untouched by Node filesystem imports in this design slice.
- [x] Increment L4e2q2 — Define bounded buffer/lease disposal, error-to-scalar translation, platform-unsupported behavior, static import restrictions, no cache/watch/retry/fallback, and redacted observability. Generic filesystem wrappers, directory enumeration, symlink traversal, raw exception output, and secret/path/mount/descriptor rendering remain prohibited.
- [x] Increment L4e2q3 — Specify isolated fake-first concrete-edge implementation and test gates, then separate later platform test, image release, Azure Agent staging, Compose render, read-only preflight, and one-shot proof gates.
- [x] Increment L4e2r — Implement a deterministic fake `NodeProtectedProjectionSyscallPort` that scripts non-following open, descriptor metadata, bounded read, post-read metadata, and close through opaque handles. Agent `1d56fdd` covers unsupported-platform, open/metadata/kind/access/size/change/short-read/close/disposal denials, scalar collapse, redaction, no cache/watch/retry, and exact closure without Node filesystem APIs.
- [x] Increment L4e2r1 — Define and implement a deterministic injected fake syscall port with opaque handle values and only fixed `openNonFollowing`, `inspect`, `readBounded`, and `close` operations. Agent `1d56fdd` exposes aggregate counts/state only and accepts no path, mount, descriptor number, byte payload, reference, or environment value.
- [x] Increment L4e2r2 — Add lifecycle tests for unsupported platform, open failure, metadata kind/access/size refusal, changed post-read facts, short/oversize read, close failure, duplicate/unknown handle, scalar unknown-error collapse, redaction, no cache/watch/retry, and exactly-one close attempt after a successful open. Agent `1d56fdd` covers the deterministic matrix.
- [x] Increment L4e2r3 — Run Agent local quality and Hospital Node Quality Gates, then record exact fake syscall evidence before a separate concrete Node implementation review, image binding, Azure staging, Compose render, preflight, or proof consideration. Local CI passed 71 TypeScript plus 4 Python tests; Hospital Node Quality Gates `32668776028` succeeded.
- [ ] Safety gate L4e2s — Before any concrete Node filesystem adapter source is authored, publish a security decision record that explicitly authorizes or rejects adding protected host/projection filesystem capability to the Agent build. It must identify the target platform, protected deployment binding owner, test environment, static import enforcement, review owner, and rollback/containment plan. Without that decision, no real filesystem code, image binding, Azure staging, Compose render, or proof may proceed.
- [x] Safety gate L4e2s — User authorization received for the narrowly bounded Azure test-target secret-read edge. The implementation remains isolated, fail-closed, nonpersistent, redacted, and subject to source quality evidence; it does not authorize generic filesystem access, image binding, Azure staging, Compose render, proof, training, submission, or aggregation.
- [x] Increment L4e2t — Add one isolated concrete Node secret-read adapter behind `NodeProtectedProjectionSyscallPort`, with a fixed deployment-owned binding resolver supplied only by the protected composition root. Agent `1982f5d` limits `node:fs` imports to the edge module and forbids caller path/environment input, directory enumeration, symlink following, caching, watch/reload, retry, fallback identity, and public secret/path/descriptor projection.
- [x] Increment L4e2t1 — Add local negative tests through injected syscall doubles for unsupported platform, non-following open failure, kind/access/size refusal, changed post-read metadata, short read, close/disposal failure, unknown errors, no retry, and scalar-only redaction. Agent `1982f5d` covers this matrix without opening a real projection in test.
- [x] Increment L4e2t2 — Run Agent local quality and Hospital Node Quality Gates, then record exact source-only evidence. Local CI passed formatting, production-source import guard, strict TypeScript, 74 TypeScript plus 4 Python tests; Hospital Node Quality Gates `32689071998` succeeded. Image binding, protected Azure source staging, Compose render, read-only preflight, and one-shot proof remain separate later gates.
- [x] Increment L4e2t3 — Add and pass a production-source quality guard that permits `node:fs` imports only in the authorized secret-read edge module and rejects any other Agent runtime source import. Agent `1982f5d` adds this guard; existing test fixtures are not runtime capability.
- [x] Safety gate L4e2u — Before image binding or Azure target staging, publish a separate target-binding decision that names the protected deployment binding mechanism/owner, platform support evidence, release-image mapping, runtime rollback containment, and no-target-invocation verification plan. The decision keeps the current release explicitly source-validated and target-unbound; no image build, Agent source staging, Compose render, projection open, or proof is authorized.
- [x] Increment L4e2u1 — Define the Azure test-target binding record using only opaque binding classes and immutable scalar release facts. The record specifies composition-root ownership, allowed Linux capability evidence, image digest/revision mapping requirements, no projection/reference rendering, and target identity separation. It does not create an image, stage source, or contact Azure.
- [x] Increment L4e2u2 — Define target rollback/containment, deployment admission/denial states, aggregate-safe verification, and the separate prerequisites for later image build, staging, Compose render, read-only preflight, and one-shot proof. No target invocation or new credential/projection is authorized in the decision record.
- [x] Safety gate L4e2v — Before an image build/push implementation, publish a separate protected image-build and release-mapping decision. The decision defines the build owner, non-root/no-runtime-default constraints, reproducible source/dependency admission, immutable image digest record, registry access boundary, build-log redaction, rollback/quarantine, and absence of target deployment. It authorizes no image build/push, Azure staging, Compose render, projection open, or proof.
- [x] Increment L4e2v1 — Define a protected build admission record with exact source/lockfile/runtime/policy/quality identities; specify non-root/no-listener/no-proof-default image constraints, production-source import guard execution, immutable digest-only release mapping, registry abstraction, and scalar redacted build outcomes. The decision does not build/push an image or contact a registry.
- [x] Increment L4e2v2 — Define release denial/quarantine/rollback states, aggregate-safe verification, and distinct later gates for implementation, protected image build, target staging, Compose render, read-only preflight, and one-shot proof. The decision creates no target deployment, projection, or runner.
- [x] Increment L4e2w — Implement a source-only `AgentImageBuildAdmission` and `AgentImageReleaseMapping` validator with deterministic scalar tests for exact revision/lockfile/runtime/policy/quality facts, terminal admission/release denials, redaction, no mutable tags, no target mapping, and quarantine. Agent `a4bf11a` completes this with no Docker, image build/push, registry, Azure, Compose, or proof capability.
- [x] Increment L4e2w1 — Add strict versioned scalar contracts for build admission, immutable digest release mapping, and quarantine record. Agent `a4bf11a` rejects unknown and tag/registry/target/projection/credential-shaped fields plus every state other than source-validated target-unbound, without Docker, registry, Azure, or filesystem imports.
- [x] Increment L4e2w2 — Add deterministic normal/denial tests for source/lockfile/runtime/policy/quality mismatch, unverified digest, duplicate mapping, quarantined candidate, redaction, no retry, and terminal states. Agent `a4bf11a` asserts no build command, registry contact, target mapping, or runner is represented.
- [x] Increment L4e2w3 — Run Agent local quality and Hospital Node Quality Gates, then record exact source-only validator evidence before any separate protected builder authorization, image build/push, Azure staging, Compose render, preflight, or proof consideration. Local CI passed 77 TypeScript plus 4 Python tests; Hospital Node Quality Gates `32689772080` succeeded.
- [x] Safety gate L4e2x — Published the protected-builder authorization record with external owner/registry-approval classes, scoped future credential custody, approved base class, build-environment containment, log redaction, candidate quarantine/rollback authority, and no-target-deployment attestation. This is documentation-only: no Docker/remote builder run, registry push, Azure staging, Compose render, projection open, or proof occurred.
- [x] Increment L4e2x1 — Defined opaque protected-builder and registry-approver ownership classes, one-candidate future credential custody, approved base class admission, isolated build-context/environment rules, and no target/deployment credential sharing. No credential, builder, registry, or image was created or used.
- [x] Increment L4e2x2 — Defined scalar build authorization/denial/quarantine/rollback evidence, redacted log and artifact rules, retention/destruction boundaries, independent review requirements, and no-target-deployment attestation. No Docker, remote build, registry push, Azure staging, Compose render, projection, or proof occurred.
- [x] Increment L4e2x3 — Designed and implemented source-only protected-builder admission orchestration using scalar role separation, terminal authorization/denial/quarantine states, aggregate-safe redacted readout, and deterministic fakes. No credential was minted and no builder/registry was called; no image build/push, Azure staging, Compose render, projection, or proof occurred.
- [x] Increment L4e2x3a — Defined the source-only orchestration state machine, immutable scalar input/output facts, one-request admission rules, explicit role-separation seams, terminal authorization/denial/quarantine behavior, aggregate-only readout, and forbidden capability/import list.
- [x] Increment L4e2x3b — Agent `8052024` implements pure orchestration contracts and deterministic policy and registry-approval fakes. It tests normal authorization plus malformed, conflict, unauthorized-role, duplicate, quarantine, redaction, and no-retry outcomes without importing or invoking a credential, external process, network, Docker, registry, image, target, projection, runner, training, submission, or aggregation capability.
- [x] Increment L4e2x3c — Local CI passed 81 TypeScript and 4 Python tests; Hospital Node Quality Gates `32690357676` succeeded. Published source-only evidence before any new execution-authorization decision.
- [x] Safety gate L4e2y — Published the documentation-only external execution and credential-custody decision with approving control-plane classes, non-delegable credential lifecycle authority, isolated builder class, bounded registry channel, immutable base/source re-verification, candidate deletion/quarantine custody, audit retention/redaction, and no-target-deployment re-attestation. No credential was created/used and no builder/registry/Azure action occurred.
- [x] Increment L4e2y1 — Defined the execution-readiness state machine, role separation, one-candidate scope, fail-closed credential lifecycle authority, immutable evidence anchors, expiry/revocation behavior, and independent audit/readout boundary. No external service was invoked or configured.
- [x] Increment L4e2y2 — Defined isolated builder and registry channel constraints, base/source pin re-verification, redacted audit retention, candidate deletion/quarantine custody, external failure closure, and no-target-deployment re-attestation. No credential, builder, registry, image, Azure, target, projection, or proof path was accessed.
- [x] Increment L4e2y3 — Designed and implemented a source-only protected-builder execution-readiness record with strict scalar state, independent approval/custody fakes, expiry/revocation/quarantine closure, aggregate-only readout, and production-source forbidden-import tests. No credential was minted and no external builder/registry/Docker/Azure/target/projection/proof capability was invoked.
- [x] Increment L4e2y3a — Defined the execution-readiness request, immutable admission/source-policy binding, independent policy/execution/registry/custodian attestation seams, terminal ready/not-ready/revoked/quarantined states, expiry constraints, aggregate-only readout, and forbidden capability/import list.
- [x] Increment L4e2y3b — Agent `8d3c415` implements pure readiness contracts and deterministic policy, execution, registry, and credential-custodian fakes. It tests valid ready-not-authorized closure plus malformed, mismatch, expiry, refusal, role conflict, duplicate, revocation, quarantine, redaction, and no-retry outcomes without importing or invoking any external capability.
- [x] Increment L4e2y3c — Local CI passed 86 TypeScript and 4 Python tests; Hospital Node Quality Gates `32690774152` succeeded. Published source-only evidence before any external execution-authorization decision.
- [x] Safety gate L4e2z — Published the documentation-only one-candidate execution-authorization envelope defining independent approval freshness, credential-custody readiness preconditions, immutable source/base re-verification, explicit external invocation stop rules, post-route failure publication, and no-target-deployment re-attestation. No credential was created/used and no builder, registry, Azure, target, or projection was contacted.
- [x] Increment L4e2z1 — Defined the one-candidate authorization request/state machine, admission/readiness/source/base/policy binding, approval-freshness windows, immutable review anchors, independent actor separation, expiry/revocation/quarantine closure, and aggregate-only public readout. No execution instruction was emitted and no external service was configured.
- [x] Increment L4e2z2 — Defined credential-custody readiness checks, pre-route re-attestation, builder/registry invocation stop rules, post-route failure publication, no-retry/candidate retirement behavior, and renewed no-target-deployment separation. No credential, builder, registry, image, Docker, Azure, target, projection, or proof path was accessed.
- [x] Increment L4e2z3 — Designed and implemented a source-only one-candidate execution-authorization envelope contract with strict scalar facts, deterministic independent review fakes, freshness/expiry/revocation/quarantine/post-route-placeholder closure, aggregate-only readout, and forbidden-import tests. No execution instruction was created and no external capability was accessed.
- [x] Increment L4e2z3a — Defined strict authorization-envelope request and decision records, immutable admission/readiness/source-policy binding, fixed freshness class, independent policy/execution/registry/custody review seams, terminal ready-not-executable/denied/revoked/quarantined/post-route-placeholder states, aggregate-only readout, and forbidden capability/import list.
- [x] Increment L4e2z3b — Agent `b50fdc9` implements pure envelope state and deterministic review fakes. It tests valid ready-not-executable closure plus malformed, mutable, mismatch, stale, disagreement, refusal, role conflict, duplicate, revocation, quarantine, post-route-placeholder failure, redaction, and no-retry behavior without importing or invoking any external capability.
- [x] Increment L4e2z3c — Local CI passed 91 TypeScript and 4 Python tests; Hospital Node Quality Gates `32691244949` succeeded. Published source-only evidence before any external execution action decision.
- [x] Safety gate L4e3 — Published the documentation-only one-candidate external execution-action decision defining precise consumption, independent freshness recheck, custody-handoff prohibition, redacted route declaration, post-route closure, candidate retirement, and renewed target separation. No credential was created/used and no builder, registry, Docker, Azure, target, or projection was contacted.
- [x] Increment L4e3a — Defined one-candidate authorization-consumption state, exact pre-route immutable/freshness recheck, non-delegable custody-handoff prohibition, route-declaration record, terminal route-not-started/started-placeholder/post-route-closed states, aggregate-only readout, and forbidden capability/import list. No external route or service configuration occurred.
- [x] Increment L4e3b — Defined post-route closure publication, candidate retirement/quarantine/revocation authority, no-retry/alternate-channel rule, renewed no-target-deployment attestation, and stop conditions for any actual external failure. No credential, builder, registry, Docker, Azure, target, projection, Compose, or proof path was accessed.
- [x] Increment L4e3c — Agent `909470e` implements the source-only one-candidate action-consumption state contract with strict scalar facts, deterministic pre-route/review/retirement fakes, route-not-started and non-executing route-started placeholders, terminal pre/post-route closure, aggregate-only readout, and forbidden-import tests. Local CI passed 96 TypeScript plus 4 Python tests; Hospital Node Quality Gates `32693437721` succeeded. No instruction/capability or external capability was accessed.
- [ ] Safety stop L4e3d — Any actual protected-builder execution requires a separately named external builder/registry provider, explicit credential and permission authority, immutable external candidate/source/base evidence, a target-staging dossier, and user confirmation for the security-critical external action. Do not create/use a credential or contact a builder, registry, Docker, Azure, target, projection, or proof path without that new boundary decision.
- [x] Safety gate L4e3e — Selected and documented a separate GitHub Actions protected-builder workflow and private repository-linked GitHub Container Registry package with owner separation, least privilege, provenance/attestation rules, revocation/quarantine custody, log redaction, and no-target-deployment boundary. No provider was configured and no credential, image, registry, Azure, target, projection, or proof action occurred.
- [x] Increment L4e3e1 — Evaluated the existing repository-hosted control plane and documented the one-candidate builder/registry choice, immutable provenance, least privilege, expiry, audit, revocation, and failure-closure criteria. No external action or service configuration occurred.
- [x] Increment L4e3e2 — Defined independent credential-custody and reviewer roles, separation from Agent/Core/target/runtime identities, candidate quarantine/retirement rules, private registry-package visibility boundary, and conditions still required before any external execution.
- [ ] Safety stop L4e3f — Before any external workflow/package configuration or execution, require a one-candidate authorization, protected-environment reviewer and credential-custody configuration, private package access verification, immutable base/source evidence, dedicated workflow design review, target-staging dossier, and a security-critical external-action confirmation. Do not configure or invoke a provider before this stop is affirmatively cleared.
- [ ] Increment L4e2k4 — Implement each concrete adapter only in isolated fake-first slices with local negative tests, then record distinct source quality outcomes before any image binding, Azure staging, Compose render, or one-shot proof consideration.
- [x] Workflow Skill S1 — Package the reusable documentation-first bounded federated-system workflow, chronological public-ledger requirements, safe autonomy rules, and validation/checkpoint pattern as an installable skill. The package includes the boundary checklist, staged delivery sequence, Core/Agent artifact-delivery guardrails, autonomous progression rules, and a redacted bounded-proof template.
- [x] Workflow Skill S2 — Validate the skill package, publish a ledger record of its scope, and attach the installable skill without exposing any project secrets, provider details, raw data, or internal paths. Validation passed after installing the validator’s missing YAML dependency; the skill is ready for delivery as a reusable package.

## Technical Requirements Analysis

- [x] Inventory the earlier clean-room Node.js services, Python ML core, documentation product, tests, and contracts.
- [x] Compare earlier implementation components against the accepted aggregator-core requirements.
- [x] Research current Node.js/TypeScript control-plane and Python federated-worker integration patterns.
- [x] Define API, event, artifact, authentication, persistence, model-registry, observability, and deployment requirements.
- [x] Specify the Node.js control-plane and Python ML-worker contract, including FedProx responsibilities.
- [x] Record reuse, rewrite, and defer decisions with technical rationale.
- [x] Publish the technical requirements chapter and architecture-gate questions in the documentation ledger.
- [ ] Build, verify, commit, and push the documentation update using the user's Git identity.

## Clarified Technical Analysis and Navigation Revision

- [x] Inspect the attached technical-requirements example and identify its exact section pattern.
- [x] Reframe the aggregator analysis in the example's requirements-specification format.
- [x] Replace redundant navigation groups with a single responsive chapter index and contextual page controls.
- [ ] Verify the revised technical page at desktop and mobile breakpoints.
- [ ] Commit and push the revised documentation update using the user's Git identity.

## Requirements Analysis Route Correction

- [x] Audit the visible requirements and system-specification chapters for cross-project example content.
- [x] Restore the federated-aggregator Requirements Analysis as a visible primary route.
- [x] Make the distinction between project requirements analysis and technical system specification explicit in the navigation and chapter introductions.
- [ ] Verify direct links and mobile navigation for both chapters.
- [ ] Commit and push the corrected documentation route using the user's Git identity.

## Deep Integrated Requirements Analysis

- [x] Map the supplied example’s structural depth to federated-aggregator-specific concerns without reusing its unrelated content.
- [x] Expand the project requirements into connected stakeholder, governance, research, workflow, data, artifact, security, operations, observability, and acceptance requirements.
- [x] Consolidate the business/research and technical requirements so that each technical decision traces to a project need or research risk.
- [x] Reorganize the documentation reading path around the single comprehensive requirements specification.
- [ ] Verify the revised requirements chapter and navigation at desktop and mobile widths.
- [ ] Commit and push the expanded requirements-analysis documentation using the user's Git identity.

## Vercel Static Deployment

- [x] Inspect the current Vite output and existing Vercel configuration.
- [x] Add Vercel static-build settings and SPA deep-link rewrites.
- [x] Build and verify the configured static output for all documentation routes.
- [ ] Commit and push the Vercel deployment configuration using the user's Git identity.

## Documentation Interface Refresh

- [x] Review the deployed documentation shell and identify visual regressions from the earlier design.
- [x] Define a refined modern documentation system with improved hierarchy, navigation, and reading rhythm.
- [x] Refresh the shell, home page, and core chapter presentation without reintroducing deployment-dependent assets.
- [x] Verify the refreshed desktop and mobile layouts plus Vercel static build output.
- [ ] Commit and push the documentation interface refresh using the user's Git identity.

## Data Management and Schema Design

- [x] Extract the structural depth of the supplied schema example without reusing its unrelated entities or content.
- [x] Research federated-healthcare data lineage, artifact governance, privacy boundaries, and schema requirements.
- [x] Define original schema groups for identity, federation governance, protocol/rounds, artifacts, aggregation jobs, release ledger, audit, and retention.
- [x] Create original Mermaid ERD, artifact-flow, and retention/lineage diagrams.
- [x] Add the detailed data-management chapter and diagrams to the Vercel-hosted documentation site.
- [x] Verify Mermaid rendering, mobile layout, and Vercel static build, then commit and push the update using the user's Git identity.

## Workflow Design and Orchestration

- [x] Extract the supplied workflow example’s structural depth without reusing its unrelated actors, routes, or flows.
- [x] Research federated round lifecycle, FedProx provenance, local-versus-central evaluation, and hospital-local data boundaries.
- [x] Write the original workflow specification with protocol activation, round launch, submission validation, aggregation, release, rollback, and recovery semantics.
- [x] Add the Workflow Design chapter, six original Mermaid diagrams, responsive navigation, research sources, and chronology entry.
- [x] Verify desktop/mobile rendering, type-checking, and Vercel static output without storage-proxy references.
- [x] Commit, push, and checkpoint the workflow-design documentation update using the user's Git identity.

## Full Aggregator Core System Architecture and Wiring

- [x] Analyze the supplied architecture demo for structural depth and exclude unrelated client, billing, content-generation, and product concerns.
- [x] Reconcile all current requirements, workflow, data-management, API, and prior core-repository decisions into one explicit architecture boundary.
- [x] Research authoritative patterns for OIDC/workload identity, NestJS control planes, durable jobs, artifact integrity, Python ML workers, PostgreSQL, Redis, and observability.
- [x] Define the complete component inventory, trust boundaries, interfaces, service dependencies, data flows, failure paths, and deployment topology.
- [x] Write original Mermaid system, sequence, deployment, trust-boundary, and event-flow diagrams plus an in-depth implementation specification.
- [x] Add or expand the responsive documentation chapter and update the Notion/research ledgers.
- [x] Verify diagrams, mobile layout, TypeScript, Vercel static output, then commit, push, and checkpoint under the user's Git identity.

## Modular Codebase Architecture and Engineering Standards

- [x] Analyze the clean-room repository, prior implementation decisions, and the supplied system scope to separate reusable references from new production modules.
- [x] Research comparable federated-learning/control-plane repositories plus authoritative TypeScript, Python, modular-monolith, clean-code, and testing guidance.
- [x] Define the monorepo folders, package ownership, dependency direction, public interfaces, shared libraries, adapters, supplementary services, and explicit non-dependencies.
- [x] Specify coding rules, naming, error/result strategy, configuration/secrets discipline, data contracts, observability, review criteria, and enforceable quality gates.
- [x] Specify a layered test strategy for unit, integration, contract, property, deterministic ML, security, migration, end-to-end, and resilience tests.
- [x] Add the responsive engineering-standards chapter, original Mermaid diagrams, research/source register, and chronological/Notion decisions.
- [x] Verify, commit, push, and checkpoint the update under the user Git identity.

## Handoff Implementation Plan and Identity Scope

- [x] Reconcile the approved governance, schema, workflow, system-wiring, and engineering-standards decisions into an explicit first-release feature inventory.
- [x] Research supported OIDC/Clerk patterns and the security/product implications of MetaMask or SIWE for an institution-governed research control plane.
- [x] Decide whether the first core requires a human user subsystem, workload identity subsystem, Clerk, wallet authentication, or a deliberately deferred wallet feature.
- [x] Write the phased product-core implementation plan with modules, schema/migrations, APIs, worker contracts, tests, dependencies, acceptance criteria, and handoff sequence.
- [x] Add the plan and identity decision to the documentation/Notion research ledgers.
- [x] Verify, commit, push, and checkpoint the handoff documentation update under the user Git identity.

## Product-Core Phase 0–1 Implementation Kickoff

- [x] Establish the private `hstu-research/federated-aggregator-core` repository with the user's Git identity and a clear Phase 0–1 README/ADR index.
- [x] Establish pnpm and Python workspace roots, strict lint/type/format/testing configuration, local dependency definitions, CI, secret policy, and synthetic-fixture policy.
- [x] Create framework-free TypeScript contracts, domain, application-port, test-kit, and configuration packages with enforced dependency direction.
- [x] Implement local user, organization, membership, workload, federation, protocol, and round domain types/invariants with explicit OIDC/Clerk-ready and workload-identity ports.
- [x] Create deterministic unit tests for membership authorization, workload separation, protocol immutability, and core round transition rules.
- [x] Run all baseline quality gates, record the milestone in the research ledgers, then commit and push the implementation foundation under the user Git identity.

## Product-Core Phase 2 Persistence and API Foundation

- [x] Select Drizzle/PostgreSQL with generated reviewed SQL migrations while preserving application/domain port boundaries.
- [x] Implement governance, audit, idempotency, transactional-outbox, participation, and append-only round-history schema records.
- [x] Implement remote-JWKS OIDC verification, local principal hydration, separate workload vocabulary, controlled health/readiness, and a scoped federation read.
- [x] Verify migration execution on PostgreSQL 16, transactional commit/rollback, OIDC claims, guard denial, HTTP behavior, and 17 test cases.
- [x] Record the milestone in Notion and the public research chronology, then commit and push under the user Git identity.

## Product-Core Phase 3 Descriptor-Only Artifact Intake

- [x] Research and define direct-upload, SHA-256 integrity, generated-key, descriptor-only, and quarantine constraints.
- [x] Implement S3-compatible presigned intent/storage contracts and additive PostgreSQL artifact, upload-intent, and verification/quarantine records.
- [x] Implement local-membership/federation-scoped descriptor intent and storage-metadata verification workflows with atomic audit/outbox evidence.
- [x] Verify PostgreSQL migration, integrity mismatch quarantine, descriptor-only HTTP behavior, authorization, storage signing, and 24 test cases.
- [x] Record the milestone in the public research chronology and queue the Notion ledger record for retry after the connector timeout.

## Product-Core Phase 4 Verified Aggregation Dispatch

- [x] Research transactional-outbox, idempotent queue, and versioned Node–Python worker-contract constraints for verified federated aggregation.
- [x] Implement immutable aggregation jobs, frozen verified inputs, dispatch attempts, worker-result evidence, queue leases, and PostgreSQL reconciliation records.
- [x] Implement descriptor-only command/result contracts, verified-artifact-only BullMQ dispatch, deterministic Python FedAvg/FedProx-compatible averaging, and separate ML-worker callback authentication.
- [x] Verify canonical TypeScript/Python fixtures, duplicate delivery, dispatch identity, deterministic aggregation, malformed input rejection, stale callback rejection, candidate-ready transition, migration execution, and the 31 TypeScript plus 4 Python test evidence set.
- [x] Commit and push the core implementation and public chronology updates under the user Git identity.
- [ ] Retry the matching Notion ledger entry when Notion connector/browser transport is reachable; current attempts failed at connector initialization and network timeout.
- [ ] Checkpoint the documentation site under the user Git identity.

## Product-Core Phase 5 Candidate and Release Governance

- [x] Research and define bounded, evidence-backed, accountable, reversible, and retention-aware governance constraints for federated research-model releases.
- [x] Implement immutable candidates, evaluation-evidence descriptors, separated human approvals, release envelopes, safe rollbacks, review-only retention, audits, outbox records, and protected human routes.
- [x] Verify candidate provenance, self-approval denial, evidence and approval thresholds, descriptor integrity, idempotent publication/rollback, migration execution, and the complete 32 TypeScript plus 4 Python test evidence set.
- [ ] Record the milestone in Notion, commit/push the core and public chronology changes, and checkpoint the documentation site under the user Git identity.

## Product-Core Phase 6 Operational Resilience

- [x] Research and define bounded retry, dead-letter, dependency readiness, correlation visibility, and review-only retention constraints.
- [x] Implement delivery-state records, operator intervention evidence, protected operations read/control routes, PostgreSQL/Redis/object-storage readiness, and pending-only publisher guards.
- [x] Verify readiness failure isolation, platform-admin authorization, retry/dead-letter idempotency, migration execution, audit visibility, and the complete 36 TypeScript plus 4 Python test evidence set.
- [ ] Record the milestone in Notion, commit/push the core and public chronology changes, and checkpoint the documentation site under the user Git identity.

## Product-Core Phase 7 Human Administrator Portal

- [x] Research an administrator portal as a separate human-facing product, defining platform-admin and federation-owner boundaries, safe read models, explicit confirmation, accessibility, and preview-state constraints.
- [x] Maintain private `hstu-research/federated-aggregator-admin-portal` with React, TypeScript, Vite, a clinical instrument-panel design, source-only repository hygiene, and validated production build.
- [x] Add Core candidate/release governance summaries and federation-owner-protected API reads without returning artifact/model bytes, raw event payloads, patient data, evidence payloads, release envelopes, or policy internals.
- [x] Implement safe delivery, lineage, and review-only retention surfaces; require a named target, non-empty reason, explicit consequence, and submitted state for retry/dead-letter actions.
- [x] Verify Core CI (36 TypeScript plus 4 Python tests), PostgreSQL portal-read integration coverage, and portal production build; commit and push both private repositories with the user Git identity.
- [x] Record the milestone in the public research chronology and checkpoint the documentation site.
- [ ] Queue the matching Notion ledger update for retry after the unavailable connector/browser transport recovers.

## Product-Core Phase 8 Observability and Controlled Disposal

- [x] Research OpenTelemetry Collector resilience, endpoint-sensitive API resource controls, and media-sanitization boundaries to define a bounded control-plane hardening scope.[1] [2] [3]
- [x] Add a best-effort OTLP metrics adapter, no-op default, explicit telemetry configuration, local Collector health/memory/batch pipelines, and allowlisted telemetry contract.
- [x] Add per-principal operation-class privileged throttling before retry/dead-letter/disposal mutations, with HTTP 429 and `Retry-After` behavior for blocked commands.
- [x] Add additive reviewed disposal request, distinct federation-owner approvals, platform-admin execution, version-aware storage adapter command, immutable outcomes, and retained governance/release/audit lineage.
- [x] Validate full CI: formatting, lint, TypeScript, PostgreSQL migration/integration execution, 39 TypeScript tests, and 4 Python tests; build the portal and preserve its review-only disposal boundary until a safe Core summary exists.
- [x] Commit/push Core and portal milestones under the user Git identity, record the public chronology, and checkpoint the documentation site.
- [ ] Queue the matching Notion ledger update for retry after the unavailable connector/browser transport recovers.

### References

[1] [OpenTelemetry Collector Resiliency](https://opentelemetry.io/docs/collector/resiliency/)

[2] [OWASP API4:2023 Unrestricted Resource Consumption](https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/)

[3] [NIST SP 800-88 Rev. 2: Guidelines for Media Sanitization](https://doi.org/10.6028/NIST.SP.800-88r2)

## Product-Core Phase 9 Shared Controls and Safe Disposal View

- [x] Research and record Redis atomic rate-limit semantics and Collector self-observability constraints; keep storage-retention/sanitization claims explicitly deployment-bound.[4] [5]
- [x] Add a Redis-backed atomic limiter selected when the configured Core has Redis, while retaining the prior process-local implementation only for no-Redis development.
- [x] Add a federation-owner-authorized, redacted disposal lifecycle endpoint that returns only safe summary fields and excludes locators, versions, reasons, descriptors, and raw evidence.
- [x] Add Collector self-metrics configuration and portable alert-rule templates without committing a telemetry vendor, alert receiver, paging integration, or production secret.
- [x] Extend the portal with the safe summary and a reason-required owner approval confirmation; do not expose a browser storage-execution control.
- [x] Validate Core CI (39 TypeScript plus 4 Python tests), PostgreSQL integration/migration execution, and portal production build; record that Docker runtime validation is unavailable in this sandbox.
- [x] Commit/push Core and portal changes under the user Git identity, record the public chronology, and checkpoint the documentation ledger.
- [ ] Queue the matching Notion ledger update for retry after the unavailable connector/browser transport recovers.

### References

[4] [Redis, Rate Limiter](https://redis.io/docs/latest/develop/use-cases/rate-limiter/)

[5] [OpenTelemetry Collector Internal Telemetry](https://opentelemetry.io/docs/collector/internal-telemetry/)

## Product-Core Phase 10 Stale Disposal Recovery

- [x] Research idempotent outbox recovery and preserve the rule that an unknown storage outcome must be recorded, not automatically retried.[6]
- [x] Add the `recovery_pending_verification` lifecycle state, an additive immutable recovery-evidence table, a fixed minimum age, platform-admin authorization, required reason, and protected Core command.
- [x] Keep recovery redacted in the portal lifecycle summary; do not add a browser recovery or storage execution control.
- [x] Validate Core CI: formatting, lint, type checking, recovery service tests, PostgreSQL migration/integration execution, 40 TypeScript tests, and 4 Python tests; validate the portal production build.
- [x] Commit/push Core and portal changes under the user Git identity, record the public chronology, and checkpoint the documentation ledger.
- [ ] Phase 11: Add a deployment-attestation record/workflow for storage/telemetry infrastructure, provider-backed verification for recovery-pending disposal outcomes, and Redis/Collector runtime testing in a real multi-instance topology.
- [ ] Queue the matching Notion ledger update for retry after the unavailable connector/browser transport recovers.

### References

[6] [Microservices.io, Transactional Outbox](https://microservices.io/patterns/data/transactional-outbox.html)

## Product-Core Phase 11 Deployment Attestations

- [x] Research deployment-attestation and distributed rate-limit validation constraints while treating provider evidence as a controlled reference rather than a live-cloud claim.[7]
- [x] Add a Core schema, migration, application service, PostgreSQL adapter, platform-admin record path, federation-owner safe-summary read, audit/outbox evidence, and protected API routes.
- [x] Keep the public/browser-safe summary limited to scope, assurance label, evidence digest, and review time; exclude raw provider configuration, credentials, evidence references, artifact/model bytes, and patient data.
- [x] Extend the portal with a protected deployment-evidence count only; do not add a browser recording control.
- [x] Validate full Core CI (42 TypeScript plus 4 Python tests), PostgreSQL migration/integration execution, and portal production build; commit/push with the user Git identity.
- [x] Record the chronology and checkpoint the documentation ledger.
- [ ] Phase 12: Add provider-backed recovery-resolution evidence, an attestation review/expiry policy, real multi-instance Redis-unavailable testing, and deployed Collector/backend/alert-receiver validation.
- [ ] Queue the matching Notion ledger update for retry after the unavailable connector/browser transport recovers.

### References

[7] [Redis, Rate Limiter](https://redis.io/docs/latest/develop/use-cases/rate-limiter/)

## Product-Core Phase 12 Provider-Verification Resolution

- [x] Research bounded provider verification and retain the distinction between an observed object state and a sanitization/compliance conclusion.[8] [9]
- [x] Add immutable resolution evidence for recovery-pending disposal with the only permitted outcome categories: `object_absent`, `object_present`, and `provider_unavailable`.
- [x] Require platform-admin authorization, a bounded reference/digest, correlation evidence, and privileged-operation throttling; do not invoke storage, retry deletion, or reuse old approvals from the resolution path.
- [x] Extend the portal only to recognize redacted verification lifecycle states; do not expose evidence references, provider responses, locators, versions, or a browser resolution control.
- [x] Validate Core CI (43 TypeScript plus 4 Python tests), PostgreSQL migration/integration execution, and portal production build; commit/push Core and portal updates under the user Git identity.
- [x] Record the chronology and checkpoint the documentation ledger.
- [ ] Phase 13: Add attestation review/expiry policy, real multi-instance Redis-unavailable validation, and deployed Collector/backend/alert-receiver testing while retaining the no-automatic-retry rule.
- [ ] Queue the matching Notion ledger update for retry after the unavailable connector/browser transport recovers.

### References

[8] [NIST SP 800-88 Rev. 2: Guidelines for Media Sanitization](https://csrc.nist.gov/pubs/sp/800/88/r2/final)

[9] [OpenTelemetry Collector Configuration](https://opentelemetry.io/docs/collector/configuration/)

## Product-Core Phase 13 Attestation Freshness Policy

- [x] Research bounded attestation review/expiry policy and distributed Redis/Collector validation requirements.[10] [11]
- [x] Add a fixed 90-day expiry to every deployment attestation, including a migration backfill, protected safe-summary field, and portal-safe type.
- [x] Preserve the interpretation boundary: expiry marks review freshness only; it does not diagnose deployment configuration or imply a compliance result.
- [x] Validate full Core CI (43 TypeScript plus 4 Python tests), PostgreSQL migration/integration execution, and portal production build; commit/push Core and portal milestones with the user Git identity.
- [x] Record the chronology and checkpoint the documentation ledger.
- [ ] Phase 14: Build a real multi-instance Redis outage/failover test harness and deployed Collector/backend/alert-receiver validation record; retain the no-automatic-retry rule for provider-unavailable verification.
- [ ] Queue the matching Notion ledger update for retry after the unavailable connector/browser transport recovers.

### References

[10] [Redis Sentinel High Availability](https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/)

[11] [OpenTelemetry Collector Configuration](https://opentelemetry.io/docs/collector/configuration/)

## Product-Core Phase 14 Reproducible Infrastructure Validation

- [x] Research Redis Sentinel distributed-failure and Collector configuration-validation constraints.[12] [13]
- [x] Add a disposable Redis primary/replica/three-Sentinel compose topology, Sentinel configuration, controlled runbook, and a Collector `validate` command artifact.
- [x] Run static whitespace, format, lint, type, and test checks; record accurately that Docker is unavailable in this sandbox and no topology/failover/Collector/backend/alert runtime evidence exists yet.
- [x] Preserve the boundary that a topology artifact is not proof of Sentinel-aware Core support or production high availability.
- [x] Commit/push the Core validation artifacts under the user Git identity, record the chronology, and checkpoint the documentation ledger.
- [ ] Phase 15: Execute the validation topology in a disposable Docker-capable environment, record bounded deployment evidence, and decide whether the limiter needs explicit Sentinel-aware discovery support.
- [ ] Queue the matching Notion ledger update for retry after the unavailable connector/browser transport recovers.

### References

[12] [Redis Sentinel High Availability](https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/)

[13] [OpenTelemetry Collector Configuration](https://opentelemetry.io/docs/collector/configuration/)

## External Render Hosting

- [x] Confirm the user’s Render browser session and determine whether the documentation site will be created as a static site from the existing GitHub repository.
- [x] Verify the Render build command, publish directory, SPA routing behavior, and environment requirements against the existing Vercel-compatible static build.
- [x] Create and configure the Render Static Site, verify its public root and direct research-log route, and retain the current managed documentation domain as a fallback.
- [x] Record the external-hosting URL, settings, validation evidence, and GitHub-authentication limitation in the research ledger and deployment guide.
- [ ] Restore sandbox GitHub authentication and push the committed `render.yaml`/ledger changes so the remote main branch reproduces the running Render configuration.

## Azure VPS Production Hosting Preparation

- [x] Define the hosted production boundary for the Core API, dispatch worker, Python ML worker, PostgreSQL, Redis/Sentinel, object storage integration, administrator portal, documentation mirror, and future project applications.
- [x] Specify Azure Network Security Group ingress and egress rules using least privilege, including SSH source restriction, public TLS endpoints, private service ports, and managed-service dependencies.
- [ ] Prepare a VPS bootstrap and deployment runbook covering a non-root operator account, SSH key-only access, firewall, container runtime, secrets, backups, TLS, monitoring, and recovery evidence.
- [x] Receive initial Azure VPS SSH access for bootstrap; do not retain password-based administration after a key-only operator path is established.
- [x] Complete the initial VPS bootstrap: key-based operator access, updated Ubuntu baseline, SSH-only host firewall, Fail2ban, unattended updates, Docker/Compose, bounded Docker logs, swap, and source staging.
- [x] Run the Docker Collector configuration validator and start the disposable Redis Sentinel topology on Azure; correct the harness’s Docker-DNS startup race and record the incomplete primary-loss failover result without claiming high availability.
- [x] Add a private-by-default Core deployment definition and a supervised durable dispatch process entry point; retain explicit gates for capacity, secrets, reverse proxy/TLS, Azure NSG, owner recovery access, and the missing Python aggregation-worker runtime.
- [x] Verify the Azure VPS resize: 2 vCPUs, approximately 3.8 GiB RAM, 62 GiB disk, active 2 GiB swap, healthy Docker/Fail2ban/unattended-upgrades, and no running application containers.
- [ ] Verify Azure NSG restriction, owner recovery access, required protected secrets, reverse proxy/TLS configuration, and the Python aggregation-worker runtime gate before starting Core services.
- [ ] Deploy and validate eligible private Core services after all production gates are satisfied.

## Azure Test-Environment CI/CD

- [x] Define the automatic deployment boundary: Core-only, `main`-branch trigger after CI success, SSH transport, and public HTTPS for the test API only; keep database, Redis, workers, telemetry, and management ports private.
- [x] Add reproducible host-side release scripts and a CI workflow that packages only committed Core source, validates it, and deploys atomically over SSH.
- [x] Configure the protected `azure-test` repository deployment environment with host, user, host-key, and dedicated deployment-key secrets; keep Core runtime configuration separate on the VPS.
- [x] Configure the Azure-assigned hostname, host firewall TCP 80/443, and automated TLS; the public test API is available at `https://nirog.koreacentral.cloudapp.azure.com`.
- [x] Execute and observe a test deployment, including internal liveness/readiness and HTTPS health verification.
- [x] Validate the `main`-triggered GitHub Actions release path: Core Quality Gates and the protected SSH deployment completed for commit `25c7073`; public liveness and private container state were verified.
- [ ] Replace synthetic test configuration only after real protected storage/OIDC inputs, the Python aggregation-worker runtime, and workload-identity validation are implemented.

## Render Core Test Hosting

- [ ] Create one public Core API web service on Render’s free tier; retain PostgreSQL, Redis, and Cloudflare R2-compatible storage as external managed dependencies.
- [x] Retain the continuous dispatch worker and complete Core CI/CD topology on Azure because the Render free tier cannot host the required always-on background worker.
- [x] Select the Render free API tier after the paid Starter flow requested billing; it provides 512 MB RAM and 0.1 CPU, with spin-down after inactivity; do not create a paid service or request payment details.
- [x] Create the free `federated-aggregator-core-api-test` web service at `https://federated-aggregator-core-api-test.onrender.com`; its initial build uses Core commit `daaf132` and remains pending health verification.
- [x] Confirm the initial Docker build completed and Render began the free API instance; it is waiting for a successful internal `/health/ready` response and is not yet an accepted deployment.
- [x] Confirm the Render process registered the Core HTTP routes and started the Nest application; the platform health check remains pending, and the provider emitted a non-fatal PostgreSQL SSL-mode compatibility warning for later remediation.
- [x] Confirm the configured custom R2-compatible endpoint is reachable over IPv4 but returns HTTP 404 for both its root and the Core adapter’s path-style bucket route; treat object storage as the current readiness blocker until the true S3 API endpoint or compatible bucket addressing is supplied.
- [x] Set the protected Render `S3_REGION` value to Cloudflare R2’s required S3-compatible `auto` region after replacing the custom domain with the official API endpoint, then trigger a free-tier API redeployment.
- [ ] Verify that the revised Render deployment receives a successful `/health/ready` response; the Core process starts but the platform health probe remains pending.
- [x] Record that Render Shell is unavailable on the free instance, preventing an in-container readiness diagnostic without upgrading.
- [x] Change the free Render service’s platform health path from strict `/health/ready` to `/health/live` solely for test-environment admission; public liveness now returns HTTP 200.
- [x] Confirm strict `/health/ready` remains HTTP 503 after the official R2 endpoint and `auto` region correction; the free Render API is hosted for liveness testing but is not operationally ready for federated workflows.

## Azure-First Operational Boundary

- [x] Designate the Azure VPS deployment as the authoritative Core control-plane and execution environment for all current federated workflows.
- [x] Retain the Render free API and Cloudflare-managed backup components as a non-primary continuity path only; they must not become the source of operational state, dispatch ownership, or release authority.
- [ ] Implement and validate the missing Python aggregation-worker runtime against the Azure-first queue, storage, workload-identity, and callback boundary.
- [x] Implement the descriptor-only Python aggregation runtime with official BullMQ Python consumption, deterministic bounded archive adapters, worker-only S3 access, authenticated callback support, and an explicit disabled-by-default consumption gate.
- [x] Pass the full Core quality gate after the worker addition: 43 TypeScript tests and 8 Python tests.
- [x] Publish Core commit `351ee6f` to the protected main branch; the existing Azure quality-gate and deployment workflows have been triggered for the aggregation-worker runtime.
- [x] Confirm Core Quality Gates run 23 completed successfully for `351ee6f`; Azure deployment run 8 is in progress.
- [x] Confirm Azure deployment run 8 completed successfully for `351ee6f`; the aggregation-worker container is running but remains intentionally idle until a real workload credential enables queue consumption.
- [x] Publish follow-up Core commit `9b9b5ff` so the disabled worker explicitly logs its safety-gate state on the next automated Azure rollout.
- [x] Verify Azure deployment run 9 and Core Quality Gates run 24 both completed successfully for `9b9b5ff`.
- [x] Validate the Python worker image and disabled Azure Compose service directly on the VPS: release `9b9b5ff59d5901e33e65d610c59fa3b87115f6b1` runs the container and logs its explicit identity-gated disabled state.
- [x] Deploy the private Keycloak issuer/JWKS path, protected client-credentials source, active local `ml_worker` mapping, and image/runtime corrections on Azure; Core Quality Gates run 30 and protected deployment run 15 completed for `d35bebc`.
- [ ] Keep `AGGREGATION_WORKER_ENABLED=false` until a bounded synthetic queue and authenticated descriptor-only callback exercise is designed and verified; only that separate proof can justify a temporary explicit enablement.

## Azure Test Workload Identity

- [x] Define and deploy a private test-only Keycloak issuer/JWKS path within the Azure Core topology; no identity-management interface is public and it is not a production human-auth provider.
- [x] Register an active local `ml_worker` workload identity from the private client-credentials subject, with the callback audience and `workload_kind` claim mapper required by the Core callback guard.
- [x] Provision the worker’s protected client-credentials token path and gate worker startup on successful identity bootstrap; the worker remains explicitly disabled after start.
- [ ] Enable queue consumption only for a bounded synthetic test and verify an authenticated descriptor-only callback before treating the worker as operational.

## Verified Azure Private Workload-Identity Rollout

- [x] Repair release-helper drift by synchronizing the committed activation script before every SSH release activation; the helper self-provisions the protected test client-secret file when absent and exports it to Compose without placing its value in source control or the public ledger.
- [x] Repair the Node image to include the one-shot workload bootstrap, make the PostgreSQL client a direct root runtime dependency, and repair the Python image file permissions so the non-root worker can import its package.
- [x] Repair the PostgreSQL type inference issue in the test bootstrap organization query; bootstrap logs now confirm the active mapping.
- [x] Verify Azure release `d35bebca16e7ef50e691c76e074cbdbd957359ab`: Keycloak and API are healthy, bootstrap exited successfully, `ml_worker|active` is present in PostgreSQL, the worker logs its disabled safety gate, and public `/health/live` and `/health/ready` both return HTTP 200.
- [ ] Add a bounded end-to-end synthetic aggregation/callback exercise before any worker enablement or operational claim.

## Redis Sentinel Revalidation on Azure

- [x] Run the disposable, isolated Redis primary/replica/Sentinel topology on the resized Azure VPS without altering the live Core Redis container or its persisted state.
- [x] Confirm initial master recognition at the disposable primary and two healthy replicas before a controlled primary loss.
- [x] Record the bounded failover outcome: all Sentinels reached objective down detection, but repeated Sentinel `+tilt` intervals and `-failover-abort-no-good-slave` prevented a replacement-primary election.
- [x] Remove all disposable validation containers, network, and volumes; confirm the live Core Redis container remains healthy.
- [x] Keep the Core on its direct Redis URL for the Azure test environment. Do not introduce Sentinel-aware application connections until a stable, repeatable promotion is proven in an isolated topology.
- [ ] Investigate the recurring Sentinel tilt/no-good-slave behavior in a future dedicated resilience pass before considering Redis Sentinel as a Core availability dependency.
- [ ] Configure Docker build/start settings, health/readiness checks, non-secret configuration validation, and explicit separation from the existing Azure test deployment for each Render service.
- [ ] Update the Render GitHub App installation to grant access only to `hstu-research/federated-aggregator-core`, then revalidate the separate API service’s `main` branch and tested `infra/deploy/Dockerfile.node` build path.
- [x] Stage the API service’s protected runtime variables in Render, including explicit test-only OIDC placeholders; Render masks variable values in the service form, and the selected Starter instance requires active Render billing before service creation can complete.
- [x] Configure the staged API service with `/health/ready`, Docker command `node apps/api/dist/main.js`, and a pre-deploy compiled migration command; no persistent disk or registry credential is configured.
- [ ] Complete Render’s final free-tier service-form validation and create the API; free-tier controls cleared the pre-deploy migration field, so migrations must be run separately through the approved database path.
- [x] Receive protected Neon PostgreSQL, Upstash Redis, and Cloudflare R2-compatible storage configuration for Render service settings; never copy these values into source control, the ledger, browser evidence, or deploy logs.
- [ ] Configure the Render services with the supplied protected PostgreSQL, Redis, and Cloudflare R2 variables, using test-only placeholder OIDC values until the human identity provider is selected and configured.
- [ ] Select and configure a real OIDC issuer, audience, and JWKS endpoint before any authenticated user, hospital, or release-management workflow is enabled on Render.
- [ ] Deploy and verify the Render HTTPS API and private worker topology without exposing database, Redis, storage credentials, worker callbacks, telemetry, or management ports.
