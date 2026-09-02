import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  Volume2,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface Slide {
  id: string;
  pageNum: number;
  title: string;
  subtitle: string;
  kicker: string;
  note: string;
  content: React.ReactNode;
}

const slidesData: Slide[] = [
  {
    id: "cover",
    pageNum: 1,
    kicker: "Thesis defense / synthetic research branch",
    title: "Synthetic FedProx Thesis Defense",
    subtitle: "Distinguishing a proposed breast-cancer/FedProx study from an executed empirical result.",
    note: "Welcome to the synthetic FedProx thesis defense briefing. We examine evidence boundaries and governance distinctions before any empirical work takes place.",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        <div className="border-l-4 border-teal-600 pl-6 space-y-4">
          <span className="text-xs uppercase tracking-widest text-teal-700 font-bold">Evidence before execution</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-foreground leading-tight">
            Synthetic FedProx <br />
            <em className="text-teal-600 not-italic font-medium">Thesis Defense</em>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            Distinguishing a proposed breast-cancer/FedProx study from an executed empirical result.
          </p>
          <div className="pt-4 text-xs font-mono text-muted-foreground">
            Research-governance contribution · Claim-safe briefing
          </div>
        </div>
        <div className="rounded-xl border border-teal-600/30 bg-teal-500/5 p-6 space-y-4">
          <span className="text-xs font-mono font-bold text-teal-700 dark:text-teal-400 uppercase">
            Study intent / evidence boundary
          </span>
          <div className="flex items-center justify-center py-8">
            <div className="relative flex items-center justify-center h-40 w-40 rounded-full border-2 border-teal-600 bg-teal-500/10">
              <span className="h-4 w-4 rounded-full bg-amber-500" />
              <div className="absolute -bottom-3 text-[11px] font-mono font-bold text-teal-800 dark:text-teal-200">
                FROZEN INTENT
              </div>
            </div>
          </div>
          <div className="border-t border-border/80 pt-3 text-center font-mono text-xs text-foreground">
            DECLARATION → LOCAL CLOSURE → NO EMPIRICAL INFERENCE
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "problem",
    pageNum: 2,
    kicker: "02 / The Core Problem",
    title: "The Problem Is a Category Error",
    subtitle: "Mistaking a proposed protocol for an executed empirical result.",
    note: "The central risk here is a category error. People often mistake a proposed study declaration for an executed empirical result. A protocol-shaped intention is not the same thing as a completed study. We must never collapse intent into execution, especially when no training, dataset, or model is present. Preserving this boundary keeps our claims honest and strictly source-only.",
    content: (
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          In literature, researchers often describe intended study protocols as though models were trained and tested. Collapsing proposal into execution creates false scientific assurance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-5 space-y-2">
            <h4 className="font-semibold text-sm text-rose-700 dark:text-rose-300">Category Error (Invalid)</h4>
            <p className="text-xs text-muted-foreground">
              Assuming that because a contract specifies FedProx parameters (e.g. μ=0.1, EfficientNet), a clinical breast cancer evaluation has taken place.
            </p>
            <div className="text-[11px] font-mono text-rose-600 dark:text-rose-400 pt-2">
              Result: Overclaimed clinical accuracy and unverified privacy guarantees.
            </div>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 space-y-2">
            <h4 className="font-semibold text-sm text-emerald-700 dark:text-emerald-300">Clean-Room Boundary (Correct)</h4>
            <p className="text-xs text-muted-foreground">
              Strictly treating study intents as frozen descriptors. Empirical claims are admitted ONLY when supported by versioned dataset manifests and reproducible logs.
            </p>
            <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 pt-2">
              Result: Zero overclaiming; mathematically verified contract behavior.
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "question",
    pageNum: 3,
    kicker: "03 / Core Inquiry",
    title: "The Research Question",
    subtitle: "Can a descriptor-only synthetic declaration distinguish intent from result?",
    note: "Building on that problem definition, our core inquiry asks a pre-empirical governance question. Can a descriptor-only synthetic FedProx declaration distinguish a proposed protocol from an executed result? Notice what this leaves out. We are not asking whether FedProx achieves a clinical outcome or a technical performance benchmark. The scope remains strictly non-executing and focused entirely on evidence boundaries before any action occurs.",
    content: (
      <div className="rounded-xl border border-border bg-muted/30 p-6 space-y-4">
        <blockquote className="text-lg font-serif italic text-foreground border-l-4 border-teal-600 pl-4 py-1">
          “Can a descriptor-only synthetic FedProx declaration reliably distinguish a proposed study protocol from an executed empirical result before any trainer, dataset, or model is available?”
        </blockquote>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-xs">
          <div className="p-3 rounded-lg bg-card border border-border">
            <strong className="text-foreground block mb-1">What this answers:</strong>
            <p className="text-muted-foreground">How governance contracts, one-use receipts, and scalar projections prevent unintended empirical extrapolation.</p>
          </div>
          <div className="p-3 rounded-lg bg-card border border-border">
            <strong className="text-foreground block mb-1">What this explicitly excludes:</strong>
            <p className="text-muted-foreground">Claims regarding clinical efficacy, patient diagnostics, or raw image classification accuracy in clinical settings.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "boundary",
    pageNum: 4,
    kicker: "04 / Scope Gate",
    title: "Proposal Is Not Execution",
    subtitle: "The non-executing boundary enforced across the software stack.",
    note: "Moving from our question to the core boundary, a proposal is simply not execution. State must never cross that gate. We allow frozen study intent as a descriptor of a proposed protocol. But we explicitly exclude dataset access, model artifact use, trainer invocation, metric calculation, and aggregation actions. This means our source-only declaration supports intent classification rather than claiming a federated-learning study actually occurred.",
    content: (
      <div className="space-y-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between font-mono text-xs mb-3">
            <span className="text-teal-700 dark:text-teal-400 font-bold">ALLOWED: STUDY INTENT</span>
            <span className="text-rose-600 font-bold">PROHIBITED: EXECUTION CLAIMS</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <ul className="space-y-1 text-muted-foreground list-disc list-inside">
              <li>Frozen architecture identifier</li>
              <li>Declared proximal penalty parameter μ</li>
              <li>Declared local epoch budget E</li>
              <li>Sample weight validation schemas</li>
            </ul>
            <ul className="space-y-1 text-muted-foreground list-disc list-inside">
              <li>Raw patient image transfers</li>
              <li>Unverified clinical diagnostic accuracy</li>
              <li>Silent parameter substitution</li>
              <li>Overwriting failed experiment records</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "method",
    pageNum: 5,
    kicker: "05 / Scientific Methodology",
    title: "A Source-Only Method",
    subtitle: "Controlling meaning and evidence before any empirical action occurs.",
    note: "To operationalize this, our method controls meaning before any work begins. We freeze the declaration as a non-executing descriptor, validate the state strictly against allowlists, close it terminally to suppress replay, and test it deterministically with in-memory fixtures. There is no trainer, no data or model, no metric, and no runtime. This approach validates state boundaries locally without relying on empirical execution or external systems.",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        <div className="rounded-lg border border-border bg-card p-3 space-y-1">
          <div className="h-6 w-6 rounded bg-primary/10 text-primary flex items-center justify-center font-bold">1</div>
          <h5 className="font-semibold text-foreground">Freeze Declaration</h5>
          <p className="text-muted-foreground text-[11px]">Exact canonical SHA-256 digest computed over input parameters.</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-3 space-y-1">
          <div className="h-6 w-6 rounded bg-primary/10 text-primary flex items-center justify-center font-bold">2</div>
          <h5 className="font-semibold text-foreground">Validate Against Allowlists</h5>
          <p className="text-muted-foreground text-[11px]">Strict rejection of any non-allowlisted fields or locator tokens.</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-3 space-y-1">
          <div className="h-6 w-6 rounded bg-primary/10 text-primary flex items-center justify-center font-bold">3</div>
          <h5 className="font-semibold text-foreground">Terminal Closure</h5>
          <p className="text-muted-foreground text-[11px]">One-use consumption; replay is terminally suppressed.</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-3 space-y-1">
          <div className="h-6 w-6 rounded bg-primary/10 text-primary flex items-center justify-center font-bold">4</div>
          <h5 className="font-semibold text-foreground">In-Memory Fakes</h5>
          <p className="text-muted-foreground text-[11px]">Zero dependency on network, external databases, or live cloud APIs.</p>
        </div>
      </div>
    ),
  },
  {
    id: "controls",
    pageNum: 6,
    kicker: "06 / Gate Architecture",
    title: "Controls Preserve the Default Close",
    subtitle: "Terminal state transitions suppress replay and enforce verification.",
    note: "Every control mechanism preserves the exact default-closed boundary we set up. The sequence moves only toward terminal local closure without building evaluation paths or connecting external systems. Exact validation requires frozen declarations. One-use consumption suppresses replay. Terminal ledgers keep states closed after restarts, and disabled projections return scalar outcomes without action capabilities. Building on our source-only method, let us examine the specific evidence established locally.",
    content: (
      <div className="rounded-xl border border-border bg-card p-5 space-y-3 text-xs">
        <div className="flex items-center justify-between border-b border-border pb-2 font-mono">
          <span>Control Mechanism</span>
          <span>Security Effect</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <strong className="text-foreground">Exact Validation:</strong>
            <span className="text-muted-foreground">Rejects mutated or broadened claims immediately</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-foreground">One-Use Consumption:</strong>
            <span className="text-muted-foreground">Prevents replay attacks or re-entrant evaluation</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-foreground">Terminal SQLite Ledger:</strong>
            <span className="text-muted-foreground">Closed states remain closed across machine restarts</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-foreground">Disabled Projections:</strong>
            <span className="text-muted-foreground">Emits scalar facts only; carries zero action capability</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "findings",
    pageNum: 7,
    kicker: "07 / Empirical Baseline",
    title: "What Was Established Locally",
    subtitle: "320+ unit tests proving mathematical and contract correctness.",
    note: "Building directly on our control sequence, let us look at what was established strictly through local analysis. We proved that frozen study intents can be represented, malformed inputs lead to terminal closure, unassigned gates stay ineligible, and deterministic fakes return disabled scalar outcomes. But remember, this local evidence concerns source-only contract behavior and local validation, not model, clinical, or operational outcomes. Having defined these local findings, we must be equally precise about what remains outside our scope.",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div className="rounded-xl border border-border bg-card p-4 space-y-2">
          <h5 className="font-semibold text-foreground flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            Verified Mathematical Correctness
          </h5>
          <ul className="space-y-1 text-muted-foreground list-disc list-inside text-[11px]">
            <li>FedProx loss penalty equals empirical loss when μ=0</li>
            <li>Weighted parameter averaging is strictly deterministic</li>
            <li>Single-client identity preserved across iterations</li>
            <li>NaN/Inf and shape mismatches cleanly rejected</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 space-y-2">
          <h5 className="font-semibold text-foreground flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-teal-600" />
            Verified Architectural Isolation
          </h5>
          <ul className="space-y-1 text-muted-foreground list-disc list-inside text-[11px]">
            <li>Hospital Node Agent: 320 TypeScript tests passing</li>
            <li>Aggregator Core: 82 unit tests passing</li>
            <li>Thesis Services: 14 integration tests passing</li>
            <li>Zero dependencies on live Sepolia or cloud buckets</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "nonresults",
    pageNum: 8,
    kicker: "08 / Scope Disclaimers",
    title: "What This Work Does Not Establish",
    subtitle: "Deliberate boundary exclusions essential for research integrity.",
    note: "We must be entirely clear about what this work does not establish. Because our branch is strictly source-only, entire categories of evidence are absent by design. We have no datasets, training runs, privacy metrics, clinical workflows, deployment adapters, or runtime reliability claims. Absence of empirical evidence is a deliberate scope boundary, not a gap to be filled by inference. Never convert a local contract finding into an empirical or operational conclusion.",
    content: (
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 space-y-2 text-xs">
        <h5 className="font-semibold text-foreground">Explicit Non-Claims:</h5>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-[11px]">
          <div className="rounded bg-background p-2 border border-border">
            <strong>No Clinical Clearance</strong>
            <p className="text-muted-foreground mt-0.5">Not approved as a medical device or diagnostic aid.</p>
          </div>
          <div className="rounded bg-background p-2 border border-border">
            <strong>No Automatic Privacy</strong>
            <p className="text-muted-foreground mt-0.5">FL alone does not prevent gradient leakage without DP.</p>
          </div>
          <div className="rounded bg-background p-2 border border-border">
            <strong>No Production Mesh</strong>
            <p className="text-muted-foreground mt-0.5">Focus is research governance, not high-availability cloud.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "context",
    pageNum: 9,
    kicker: "09 / Scholarly Context",
    title: "Positioning the Contribution",
    subtitle: "Locating governance boundaries within existing literature.",
    note: "Let us position our contribution precisely within the broader literature. Building on our strict non-results boundary, we must recognize that published work on FedProx, healthcare federated learning, and governance supplies context alone. We do not claim any outside performance, privacy, or clinical outcomes. This thesis delivers a pre-empirical governance boundary, distinguishing proposed study intent from executed empirical evidence. Moving forward, let us examine what governance structures must precede any future work.",
    content: (
      <div className="space-y-2 text-xs">
        <p className="text-muted-foreground">
          Existing literature focuses heavily on optimization algorithms (FedAvg, FedProx, SCAFFOLD) but frequently neglects the accountability and release governance boundaries essential for multi-institutional healthcare deployment.
        </p>
        <div className="rounded-lg border border-border bg-card p-3 font-mono text-[11px] text-foreground">
          Literature Context: FedAvg (McMahan 2017) · FedProx (Li et al. 2020) · Healthcare FL (Cell Reports 2024)
        </div>
      </div>
    ),
  },
  {
    id: "future",
    pageNum: 10,
    kicker: "10 / Roadmap",
    title: "Future Work Requires Governance First",
    subtitle: "The 7 unassigned gates required before empirical clinical trials.",
    note: "Building directly on our contextual positioning, any future work requires governance first. The next step is not code or implementation. Independent decisions must precede any empirical consideration across all seven unassigned gates. From authority and stewardship to protocol, evaluation, safety, reporting, and adapter review, every gate remains unassigned. No empirical study, external adapter, or runtime work begins from this branch. Let us now close with our final summary.",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
        {[
          "1. Ethical Authority Gate",
          "2. Data Stewardship Gate",
          "3. Frozen Protocol Gate",
          "4. Evaluation Plan Gate",
          "5. Safety Review Gate",
          "6. Disclosure Gate",
          "7. Adapter Review Gate",
        ].map((gate) => (
          <div key={gate} className="rounded border border-border bg-card p-2 text-center font-medium">
            {gate}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "close",
    pageNum: 11,
    kicker: "11 / Conclusion",
    title: "Accountable Distinction Before Evidence",
    subtitle: "Evidence discipline over performance claims.",
    note: "Intention is never evidence. Our core contribution is a claim-safe boundary, keeping a proposed synthetic FedProx study distinct from any executed empirical result. Through local contracts, explicit non-results, and independent governance, we maintain this distinction. Thank you, and I welcome your questions.",
    content: (
      <div className="rounded-xl border border-teal-600/30 bg-teal-500/5 p-6 text-center space-y-3">
        <h4 className="text-xl font-serif font-bold text-foreground">“Intention is never evidence.”</h4>
        <p className="text-xs text-muted-foreground max-w-lg mx-auto">
          Through local contracts, explicit non-results, and independent governance, we maintain a claim-safe boundary for federated learning in breast cancer histopathology.
        </p>
        <div className="pt-2 text-xs font-mono font-semibold text-teal-700 dark:text-teal-400">
          Thank you. Ready for committee questions & interactive live demo inspection.
        </div>
      </div>
    ),
  },
];

export const DefenseSlideViewer: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = slidesData[currentSlideIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.min(prev + 1, slidesData.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`space-y-4 ${isFullscreen ? "fixed inset-0 z-50 bg-background p-6 overflow-y-auto" : ""}`}>
      {/* Presentation Bar */}
      <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-primary">
            SLIDE {String(currentSlide.pageNum).padStart(2, "0")} / {String(slidesData.length).padStart(2, "0")}
          </span>
          <span className="text-xs text-muted-foreground">·</span>
          <span className="text-xs font-medium text-foreground truncate max-w-[280px] sm:max-w-md">
            {currentSlide.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNotes((v) => !v)}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition ${
              showNotes ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            Speaker Notes
          </button>

          <div className="flex items-center gap-1 border-l border-border pl-2">
            <button
              onClick={() => setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentSlideIndex === 0}
              className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted disabled:opacity-30"
              title="Previous slide (Left Arrow)"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrentSlideIndex((prev) => Math.min(prev + 1, slidesData.length - 1))}
              disabled={currentSlideIndex === slidesData.length - 1}
              className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted disabled:opacity-30"
              title="Next slide (Right Arrow)"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => setIsFullscreen((v) => !v)}
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted ml-1"
            title={isFullscreen ? "Exit fullscreen" : "Fullscreen presentation"}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Main Slide Canvas */}
      <div className="rounded-2xl border-2 border-border/80 bg-card p-6 sm:p-10 shadow-lg min-h-[380px] flex flex-col justify-between transition-all">
        {/* Top Header of the slide */}
        <div className="border-b border-border/60 pb-4 mb-6 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-widest text-teal-700 dark:text-teal-400 font-bold">
            {currentSlide.kicker}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-teal-600/30 text-teal-700 dark:text-teal-300 font-bold uppercase">
            Claim-Safe Defense Deck
          </span>
        </div>

        {/* Slide Title */}
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground tracking-tight">
            {currentSlide.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            {currentSlide.subtitle}
          </p>
        </div>

        {/* Slide Body Content */}
        <div className="flex-1 my-2">
          {currentSlide.content}
        </div>

        {/* Slide Footer */}
        <div className="border-t border-border/60 pt-4 mt-6 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span>hstu-research / thesis_breast_cancer</span>
          <span>Slide {currentSlide.pageNum} of {slidesData.length}</span>
        </div>
      </div>

      {/* Speaker Notes Drawer */}
      {showNotes && (
        <div className="rounded-xl border border-border bg-muted/30 p-4 shadow-sm animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-foreground mb-1.5">
            <Volume2 className="h-3.5 w-3.5 text-primary" />
            Presenter Speaker Notes (Defense Briefing Voice)
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed italic">
            "{currentSlide.note}"
          </p>
        </div>
      )}

      {/* Slide Thumbnails Selector */}
      <div className="flex gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
        {slidesData.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlideIndex(idx)}
            className={`flex-shrink-0 w-28 rounded-lg border p-2 text-left transition ${
              idx === currentSlideIndex
                ? "border-primary bg-primary/10 ring-2 ring-primary/20"
                : "border-border/60 bg-card hover:bg-muted"
            }`}
          >
            <span className="text-[10px] font-mono font-bold text-muted-foreground block">
              #{String(s.pageNum).padStart(2, "0")}
            </span>
            <span className="text-[11px] font-medium text-foreground truncate block mt-0.5">
              {s.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
