/** Research Ledger design: institutional dossier with a ruled evidence margin for the separate hospital-local workload boundary. */
import { ArrowUpRight, CheckCircle2, FileText, ShieldCheck, Workflow } from "lucide-react";
import { StatusStamp } from "@/components/StatusStamp";

const documents = [
  { title: "Product selection", description: "Why a local training workload is next, and why legacy patient-upload/blockchain routes are excluded.", file: "HOSPITAL_NODE_AGENT_PRODUCT_SELECTION.md" },
  { title: "Requirements analysis", description: "Non-technical and technical requirements, explicit privacy boundary, research value, and measurable acceptance signals.", file: "HOSPITAL_NODE_AGENT_REQUIREMENTS.md" },
  { title: "Schema and workflow", description: "Local SQLite control state, append-only events, normal and exception flows, and no patient-data persistence.", file: "HOSPITAL_NODE_AGENT_DATA_AND_SCHEMA.md" },
  { title: "Architecture and API", description: "TypeScript/Python split, simulated deployment topology, existing Core limitations, and proposed workload contract.", file: "HOSPITAL_NODE_AGENT_ENGINEERING_AND_API.md" },
  { title: "Core workload contract", description: "Additive Core authorization, assignment, lease, descriptor, audit, and verified bounded Azure lease and creation evidence before later integration boundaries.", file: "CORE_HOSPITAL_NODE_WORKLOAD_CONTRACT.md" },
  { title: "Core-mediated streaming dossier", description: "Complete synthetic-first requirements, schema, workflow, architecture, API, test, and handoff constraints for the now-validated server-mediated generated-model stream.", file: "CORE_MEDIATED_MODEL_STREAMING.md" },
  { title: "Agent receipt and persistence", description: "Next documentation-only gate: receipt verification, exact full-body integrity checks, redacted SQLite evidence, and private generated-fixture materialization without training.", file: "HOSPITAL_NODE_AGENT_MODEL_RECEIPT_AND_PERSISTENCE.md" },
  { title: "Typed Core client and private workspace", description: "L4 transport and pathless-workspace contract: exactly two guarded routes, workload identity seam, safe status taxonomy, redaction, fake compatibility tests, and later proof limits.", file: "HOSPITAL_NODE_AGENT_CORE_CLIENT_AND_PRIVATE_WORKSPACE.md" },
  { title: "Deployment and bounded proof", description: "L4e protected runtime and one-shot proof dossier: opaque configuration references, separate identity, release gates, redacted closure, and explicit no-training limits.", file: "HOSPITAL_NODE_AGENT_DEPLOYMENT_AND_BOUNDED_PROOF.md" },
  { title: "Private proof handoff", description: "L4e coordination contract: one ephemeral Core-to-Agent assignment handoff, independent lease-first consumption, narrow result return, and no discovery/public channel.", file: "CORE_AGENT_PROOF_HANDOFF_COORDINATION.md" },
  { title: "Implementation handoff", description: "Repository map, delivery slices, test gates, contract policy, and autonomous decision rules.", file: "HOSPITAL_NODE_AGENT_IMPLEMENTATION_HANDOFF.md" }
];

export default function HospitalNode() {
  return (
    <div className="doc-page node-dossier">
      <header className="doc-topbar"><p>10 / LOCAL WORKLOAD</p><span className="topbar-meta"><ShieldCheck size={15} />synthetic-first boundary</span></header>
      <section className="page-title"><p className="folio">10.0 / HOSPITAL NODE AGENT</p><h1>Send the work<br /><i>to the data.</i></h1><p>A separate, locally operated training workload now carries the research system beyond a proven Core callback—without turning the Core into a hospital system or moving raw study data across the boundary.</p></section>
      <section className="node-charter">
        <div className="node-charter-symbol"><Workflow size={29} /></div>
        <div><span>ACCEPTED PRODUCT BOUNDARY</span><h2>Local optimization is an accountable workload, not an API upload.</h2><p>The Agent validates a frozen command, trains only against its configured local adapter, and submits a descriptor-backed update through a scoped capability. It does not host patient records, diagnosis routes, a browser portal, blockchain coordination, or Core database access.</p></div>
        <StatusStamp status="VALIDATED" />
      </section>
      <div className="node-ledger-layout">
        <div className="node-ledger-main">
          <section className="node-proof-grid">
            <article><span>RESEARCH BASIS</span><h2>FedProx is local.</h2><p>The thesis’ heterogeneity assumptions and proximal objective are now treated as frozen local-training inputs. Server aggregation remains Core authority.</p></article>
            <article><span>IMPLEMENTED BASELINE</span><h2>One synthetic slice.</h2><p>The private repository proves canonical command validation, one-run local state transitions, deterministic FedAvg/FedProx primitives, and descriptor-only fake submission.</p></article>
            <article><span>RETAINED LIMIT</span><h2>No hospital claim.</h2><p>Only generated values and tiny tensors are accepted today. Real images, patient data, institution integration, and clinical use remain explicitly out of scope.</p></article>
          </section>
          <section className="node-evidence-row"><div><span>REPOSITORY / COMMIT</span><strong>hstu-research / <i>a4bf11a</i></strong></div><p>Hospital Node Quality Gates run 32689772080 completed successfully after the source-only image admission and release-mapping contract release: formatting, production-source import guard, strict TypeScript, 77 TypeScript tests, and four Python optimization tests.</p><a className="editorial-link" href="https://github.com/hstu-research/federated-aggregator-hospital-node" target="_blank" rel="noreferrer">Inspect repository <ArrowUpRight size={15} /></a></section>
          <section className="node-documents"><div className="section-heading"><span>DOCUMENTED DELIVERY RECORD</span><span>twelve design artifacts</span></div>{documents.map((document, index) => <a key={document.file} className="node-document" href={`https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/${document.file}`} target="_blank" rel="noreferrer"><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{document.title}</h2><p>{document.description}</p></div><FileText size={19} /><ArrowUpRight size={17} /></a>)}</section>
          <section className="node-next"><div><span>PRE-ROUTE BLOCK</span><h2>Protected-builder custody is documented; the Agent remains image-free, target-unbound, and blocked from staging or projection access.</h2></div><p>The decision separates policy authority, a future protected builder, and a registry-release approver; requires immutable admission, approved-base class, isolated non-root build constraints, redacted scalar evidence, independent review, terminal quarantine, and policy-side rollback. It records no credential creation or use and requires a no-target-deployment attestation before any later execution approval. It authorizes no build daemon, registry contact, image push, Azure staging, Compose profile, target binding, projection, or runner. Azure read-only checks still show Core live/ready health and the aggregation worker disabled marker, but do not prove Agent image or platform readiness. The next safe work may model source-only builder admission orchestration with fakes; any protected build remains a separately authorized later gate. No training, update, submission, provider contact, or aggregation-worker activation is permitted.</p><CheckCircle2 size={24} /></section>
        </div>
        <aside className="node-provenance" aria-label="Bounded Azure proof provenance">
          <span>PROOF / 006</span>
          <h2>Typed fake<br />evidence</h2>
          <StatusStamp status="VALIDATED" />
          <div><span>RELEASE</span><strong>afc98d1</strong></div>
          <div><span>AUTHORITY</span><strong>typed fakes</strong></div>
          <div><span>BOUND</span><strong>two Core interactions</strong></div>
          <div><span>CLOSURE</span><strong>deny / classify / clean</strong></div>
          <p>Compatibility fakes only. No Core connection, token, socket, filesystem, real storage, training, submission, hospital data, or provider access.</p>
        </aside>
      </div>
    </div>
  );
}
