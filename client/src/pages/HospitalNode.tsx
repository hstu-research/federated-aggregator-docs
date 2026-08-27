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
  { title: "Synthetic FedProx thesis evidence matrix", description: "Thesis-safe wording that separates the research question and source-only controls from unperformed empirical, clinical, hospital, and performance claims.", file: "SYNTHETIC_FEDPROX_THESIS_EVIDENCE_MATRIX.md" },
  { title: "Synthetic FedProx thesis methods and limitations", description: "Thesis-ready scope, procedure, conformance analysis, limitations, and results wording that report no empirical outcome.", file: "SYNTHETIC_FEDPROX_THESIS_METHODS_AND_LIMITATIONS_DRAFT.md" },
  { title: "Synthetic FedProx thesis traceability appendix", description: "Claim-to-evidence map that marks source-only controls as bounded and empirical, clinical, and runtime evidence as absent.", file: "SYNTHETIC_FEDPROX_THESIS_TRACEABILITY_APPENDIX.md" },
  { title: "Synthetic FedProx thesis abstract and contributions", description: "Evidence-bounded title, abstract, keywords, and contribution statement that report no empirical outcome.", file: "SYNTHETIC_FEDPROX_THESIS_ABSTRACT_AND_CONTRIBUTIONS.md" },
  { title: "Synthetic FedProx related-work outline", description: "Literature-positioning for FedProx, healthcare translation, and governance without inferring an empirical or clinical result.", file: "SYNTHETIC_FEDPROX_RELATED_WORK_OUTLINE.md" },
  { title: "Synthetic FedProx pre-empirical readiness protocol", description: "Default-closed governance and evidence gates that must be independently satisfied before any empirical study is considered.", file: "SYNTHETIC_FEDPROX_PREEMPIRICAL_EVALUATION_READINESS_PROTOCOL.md" },
  { title: "Synthetic FedProx governance handoff brief", description: "Independent decision register and no-action stop condition for any future empirical study consideration.", file: "SYNTHETIC_FEDPROX_GOVERNANCE_HANDOFF_BRIEF.md" },
  { title: "Synthetic FedProx thesis submission-readiness audit", description: "Claim-safe audit that separates completed source-only evidence from absent empirical, clinical, privacy, operational, and deployment evidence.", file: "SYNTHETIC_FEDPROX_THESIS_SUBMISSION_READINESS_AUDIT.md" },
  { title: "Synthetic FedProx thesis Results and Discussion draft", description: "Claim-safe source-only findings, limitations, and future-work discussion without empirical inference.", file: "SYNTHETIC_FEDPROX_THESIS_RESULTS_AND_DISCUSSION_DRAFT.md" },
  { title: "Synthetic FedProx thesis Conclusion and Future Work draft", description: "Evidence-bounded conclusion, explicit non-results, and independently governed path to future empirical study.", file: "SYNTHETIC_FEDPROX_THESIS_CONCLUSION_AND_FUTURE_WORK_DRAFT.md" },
  { title: "Synthetic FedProx thesis manuscript assembly map", description: "Chapter sequence and citation rules that organize every artifact without broadening source-only claims.", file: "SYNTHETIC_FEDPROX_THESIS_MANUSCRIPT_ASSEMBLY_MAP.md" },
  { title: "Synthetic FedProx thesis defense brief", description: "Claim-safe defense narrative, anticipated questions, and grounded answers for the source-only contribution.", file: "SYNTHETIC_FEDPROX_THESIS_DEFENSE_BRIEF.md" },
  { title: "Synthetic FedProx thesis consistency and claim audit", description: "Cross-artifact review confirming the shared source-only boundary and explicit non-results.", file: "SYNTHETIC_FEDPROX_THESIS_CONSISTENCY_AND_CLAIM_AUDIT.md" },
  { title: "Synthetic FedProx thesis executive brief", description: "One-page claim-safe summary for supervisor or examiner review of the bounded source-only contribution.", file: "SYNTHETIC_FEDPROX_THESIS_EXECUTIVE_BRIEF.md" },
  { title: "Synthetic FedProx thesis integrated manuscript", description: "Six-chapter claim-safe manuscript draft that assembles the documented source-only contribution without empirical inference.", file: "SYNTHETIC_FEDPROX_THESIS_INTEGRATED_MANUSCRIPT.md" },
  { title: "Synthetic FedProx thesis final editorial handoff", description: "Bounded checklist for supervisor, examiner, and copy-edit review without broadening the manuscript’s source-only claims.", file: "SYNTHETIC_FEDPROX_THESIS_EDITORIAL_HANDOFF_CHECKLIST.md" },
  { title: "Verified-front-matter source-only thesis manuscript (Word)", description: "Professionally formatted Word companion with corroborated institutional conventions and intentionally blank personal fields; it adds no research evidence.", file: "SYNTHETIC_FEDPROX_THESIS_PROFESSIONAL_EDITABLE_MANUSCRIPT.docx", href: "/manus-storage/SYNTHETIC_FEDPROX_THESIS_PROFESSIONAL_EDITABLE_MANUSCRIPT_d2be78c8.docx" },
  { title: "Final source-only thesis review package", description: "Compact archive of the verified-front-matter professional manuscript and claim-control materials for supervisor, examiner, or copy-edit review.", file: "SYNTHETIC_FEDPROX_THESIS_FINAL_REVIEW_PACKAGE.zip", href: "/manus-storage/SYNTHETIC_FEDPROX_THESIS_FINAL_REVIEW_PACKAGE_2b729747.zip" },
  { title: "Final thesis citation and claim-boundary audit", description: "Checks that external literature is contextual only and project records retain the source-only claim boundary.", file: "SYNTHETIC_FEDPROX_THESIS_CITATION_AND_CLAIM_BOUNDARY_AUDIT.md" },
  { title: "Final thesis package-readiness record", description: "Records that the editable manuscript, controls, archive, and delivery link were reconciled for bounded editorial review.", file: "SYNTHETIC_FEDPROX_THESIS_FINAL_PACKAGE_READINESS_RECORD.md" },
  { title: "Professional generic thesis manuscript delivery", description: "Explains the formal generic template, required placeholder treatment, and retained source-only evidence boundary.", file: "SYNTHETIC_FEDPROX_THESIS_PROFESSIONAL_MANUSCRIPT_DELIVERY.md" },
  { title: "Verified thesis front-matter application", description: "Records which supplied formatting conventions were applied and why personal and approval fields remain blank.", file: "SYNTHETIC_FEDPROX_THESIS_VERIFIED_FRONT_MATTER_APPLICATION.md" },
  { title: "Synthetic patient-data marker rejection boundary", description: "Source-only design for terminal rejection of a generated marker before any transfer or workload representation.", file: "SYNTHETIC_FEDPROX_PATIENT_DATA_MARKER_REJECTION_BOUNDARY_DESIGN.md" },
  { title: "Synthetic patient-data marker rejection evidence", description: "Local contract evidence for scalar marker rejection; it is not real patient-data detection or privacy proof.", file: "SYNTHETIC_FEDPROX_PATIENT_DATA_MARKER_REJECTION_EVIDENCE.md" },
  { title: "Synthetic marker-rejection receipt-consumption design", description: "Source-only design for consuming one scalar rejection receipt without reopening a transfer or workload state.", file: "SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_RECEIPT_CONSUMPTION_DESIGN.md" },
  { title: "Synthetic marker-rejection receipt-consumption evidence", description: "Local evidence for one-use scalar receipt consumption; it is not a real data-transfer, privacy, or runtime result.", file: "SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_RECEIPT_CONSUMPTION_EVIDENCE.md" },
  { title: "Synthetic marker-rejection terminal-ledger design", description: "Source-only design for deterministic in-memory closure retention without external persistence.", file: "SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_TERMINAL_LEDGER_DESIGN.md" },
  { title: "Synthetic marker-rejection terminal-ledger evidence", description: "Local in-memory state-machine evidence; it is not a persistent ledger, real transfer, privacy, or runtime result.", file: "SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_TERMINAL_LEDGER_EVIDENCE.md" },
  { title: "Synthetic marker-rejection disabled-application design", description: "Source-only design for a deterministic fake that projects only a scalar disabled outcome.", file: "SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_DISABLED_APPLICATION_DESIGN.md" },
  { title: "Synthetic marker-rejection disabled-application evidence", description: "Local test-double evidence for a disabled scalar outcome; it is not an upload, privacy, clinical, or runtime result.", file: "SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_DISABLED_APPLICATION_EVIDENCE.md" },
  { title: "Synthetic marker-rejection composition design", description: "Source-only design for the fixed generated-marker composition of the complete local rejection chain.", file: "SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_COMPOSITION_DESIGN.md" },
  { title: "Synthetic marker-rejection composition evidence", description: "Local composition evidence for one fixed blocked scalar result; it is not an end-to-end data or runtime result.", file: "SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_COMPOSITION_EVIDENCE.md" },
  { title: "Synthetic marker-rejection chain-completion audit", description: "Final local audit of the completed scalar closure chain; it is not patient-data detection or an operational proof.", file: "SYNTHETIC_PATIENT_DATA_MARKER_REJECTION_CHAIN_COMPLETION_AUDIT.md" },
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
          <section className="node-evidence-row"><div><span>REPOSITORY / COMMIT</span><strong>hstu-research / <i>2d38453</i></strong></div><p>Hospital Node Quality Gates run 32696462452 completed successfully after the fresh BuildKit OCI provenance workflow release: formatting, all protected import guards, strict TypeScript, 104 TypeScript tests, and four Python optimization tests.</p><a className="editorial-link" href="https://github.com/hstu-research/federated-aggregator-hospital-node" target="_blank" rel="noreferrer">Inspect repository <ArrowUpRight size={15} /></a></section>
          <section className="node-documents"><div className="section-heading"><span>DOCUMENTED DELIVERY RECORD</span><span>curated design artifacts</span></div>{documents.map((document, index) => <a key={document.file} className="node-document" href={document.href ?? `https://github.com/hstu-research/federated-aggregator-docs/blob/main/docs/${document.file}`} target="_blank" rel="noreferrer"><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{document.title}</h2><p>{document.description}</p></div><FileText size={19} /><ArrowUpRight size={17} /></a>)}</section>
          <section className="node-next"><div><span>SOURCE-ONLY CONTROL — FINAL CHAIN AUDIT CONFIRMS A SINGLE CLOSED BOUNDARY</span><h2>The complete local chain remains closed without receiving any data.</h2></div><p>The final audit confirms that the validator, one-use consumer, in-memory ledger, disabled fake, and fixed composition retain one immutable scalar closure path from a generated declaration to a blocked, evaluation-not-started, execution-not-performed readout. The aggregate Agent quality suite passed. It accepts no payload, does not process patient data, and is not a detector, privacy, clinical, hospital, deployment, or runtime proof.</p><CheckCircle2 size={24} /></section>
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
