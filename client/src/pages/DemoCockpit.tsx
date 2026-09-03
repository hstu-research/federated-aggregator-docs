import React, { useState, useEffect } from "react";
import {
  Activity,
  Play,
  RotateCcw,
  ShieldCheck,
  Server,
  Sliders,
  Sparkles,
  Layers,
  FileText,
  ChevronRight,
  Flame,
  CheckCircle2,
  Clock,
  ArrowRight,
  Database,
  Cpu,
  LockKeyhole,
  Check,
  Terminal,
  Blocks,
  ExternalLink,
} from "lucide-react";
import { HospitalNodeCard } from "../components/demo/HospitalNodeCard";
import { ConvergenceCharts } from "../components/demo/ConvergenceCharts";
import { PrivacyShieldInspector } from "../components/demo/PrivacyShieldInspector";
import { DefenseSlideViewer } from "../components/demo/DefenseSlideViewer";
import { AdminConsoleView } from "../components/demo/AdminConsoleView";
import { BlockchainRegistryView } from "../components/demo/BlockchainRegistryView";
import type { HospitalNode, RoundState } from "@shared/demo-types";

export default function DemoCockpit() {
  const [activeTab, setActiveTab] = useState<
    "flight-deck" | "operator-console" | "defense-deck" | "privacy-shield" | "blockchain-registry"
  >("flight-deck");
  const [hospitals, setHospitals] = useState<HospitalNode[]>([]);
  const [roundInfo, setRoundInfo] = useState<{
    roundId: string;
    state: RoundState;
    protocolVersion: string;
    architectureId: string;
    targetParticipants: number;
    acceptedUpdates: number;
    auditLog: Array<{ event: string; at: string; actor: string }>;
  }>({
    roundId: "round-0049",
    state: "collecting",
    protocolVersion: "v1.2-breast-fedprox",
    architectureId: "efficientnet-b0-ca-v1",
    targetParticipants: 3,
    acceptedUpdates: 2,
    auditLog: [],
  });

  // Hyperparameters
  const [algorithm, setAlgorithm] = useState<"fedavg" | "fedprox">("fedprox");
  const [mu, setMu] = useState<number>(0.1);
  const [localEpochs, setLocalEpochs] = useState<number>(3);
  const [rounds, setRounds] = useState<number>(3);
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [trainingMessage, setTrainingMessage] = useState<string | null>(null);
  const [trainingStage, setTrainingStage] = useState<string>("");
  const [lastGeneratedCandidateId, setLastGeneratedCandidateId] = useState<string | null>(null);

  // Training results
  const [mlOutput, setMlOutput] = useState<any>(null);

  const fetchFederationState = async () => {
    try {
      const [hospRes, roundRes] = await Promise.all([
        fetch("/api/demo/hospitals").then((r) => r.json()),
        fetch("/api/demo/round").then((r) => r.json()),
      ]);
      if (hospRes?.hospitals) setHospitals(hospRes.hospitals);
      if (roundRes) setRoundInfo(roundRes);
    } catch (e) {
      console.warn("Error loading federation state:", e);
    }
  };

  useEffect(() => {
    fetchFederationState();
  }, []);

  const handleAddSpecimen = async (hospitalId: string, label: "benign" | "malignant") => {
    try {
      await fetch(`/api/demo/hospitals/${hospitalId}/specimens`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label }),
      });
      await fetchFederationState();
    } catch (e) {
      console.error(e);
    }
  };

  const handleAdvanceRound = async (nextState: RoundState) => {
    try {
      await fetch("/api/demo/round/transition", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nextState }),
      });
      await fetchFederationState();
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetDemo = async () => {
    try {
      await fetch("/api/demo/round/reset", { method: "POST" });
      setMlOutput(null);
      setLastGeneratedCandidateId(null);
      setTrainingStage("");
      setTrainingMessage("Demo state reset to clean baseline.");
      await fetchFederationState();
    } catch (e) {
      console.error(e);
    }
  };

  const handleRunTraining = async () => {
    setIsTraining(true);
    setTrainingStage("1/4: Distributing global model weights to 3 hospital enclaves…");
    setTrainingMessage("Beginning PyTorch distributed execution across hospital partitions…");

    const timer1 = setTimeout(() => {
      setTrainingStage(`2/4: Hospital nodes optimizing local PyTorch gradients (${algorithm.toUpperCase()} μ=${mu}, E=${localEpochs})…`);
    }, 800);

    const timer2 = setTimeout(() => {
      setTrainingStage("3/4: Gateway verifying zero-leakage manifests, tensor finite bounds, and SHA-256 digests…");
    }, 1800);

    try {
      const res = await fetch("/api/demo/train", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          algorithm,
          mu,
          localEpochs,
          rounds,
          clients: hospitals.length || 3,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setMlOutput(data.mlOutput);
        setLastGeneratedCandidateId(data.candidate.candidateId);
        setTrainingStage("4/4: Weighted parameter aggregation complete. Candidate registered in Outbox.");
        setTrainingMessage(`PyTorch run completed (${data.source}). Candidate model ${data.candidate.candidateId} generated and awaiting operator approval.`);
        await fetchFederationState();
      }
    } catch (e) {
      setTrainingMessage("Training execution error.");
      setTrainingStage("Execution failed.");
    } finally {
      clearTimeout(timer1);
      clearTimeout(timer2);
      setIsTraining(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      {/* Top Hero Banner */}
      <div className="border-b border-border bg-card/60 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold text-teal-700 dark:text-teal-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
                  LIVE GOVERNED PLATFORM DEMO
                </span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs font-mono text-muted-foreground">{roundInfo.protocolVersion}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight mt-1">
                Breast Cancer Federated Learning Control Platform
              </h1>
            </div>

            {/* Quick Status Pill */}
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-border bg-background/80 px-3.5 py-1.5 text-xs font-mono">
                <span className="text-muted-foreground">ROUND: </span>
                <strong className="text-foreground font-semibold">{roundInfo.roundId}</strong>
                <span className="mx-2 text-border">|</span>
                <span className="text-muted-foreground">STATE: </span>
                <span className="text-teal-600 dark:text-teal-400 font-bold uppercase">{roundInfo.state}</span>
              </div>

              <a
                href="http://localhost:3001"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-teal-500/40 bg-teal-500/10 px-3 py-1.5 text-xs font-semibold text-teal-700 dark:text-teal-400 hover:bg-teal-500/20 transition shadow-sm"
                title="Open standalone Hospital Node Workstation running on port 3001"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Hospital Node (:3001)
              </a>

              <button
                onClick={handleResetDemo}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition"
                title="Reset demo to clean initial baseline"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset Demo
              </button>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTab("flight-deck")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition ${
                activeTab === "flight-deck"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Activity className="h-4 w-4" />
              1. Federation Flight Deck (Simulator)
            </button>

            <button
              onClick={() => setActiveTab("operator-console")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition ${
                activeTab === "operator-console"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              2. Operator Governance Console
              {roundInfo.state === "awaiting-approval" && (
                <span className="rounded-full bg-amber-400 text-amber-950 font-bold text-[10px] px-1.5 animate-pulse">
                  NEEDS SIGN-OFF
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("defense-deck")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition ${
                activeTab === "defense-deck"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <FileText className="h-4 w-4" />
              3. Thesis Defense Deck (11 Slides)
            </button>

            <button
              onClick={() => setActiveTab("privacy-shield")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition ${
                activeTab === "privacy-shield"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <LockKeyhole className="h-4 w-4" />
              4. Zero-Leakage Privacy Inspector
            </button>

            <button
              onClick={() => setActiveTab("blockchain-registry")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition ${
                activeTab === "blockchain-registry"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Blocks className="h-4 w-4" />
              5. Blockchain & IPFS Registry (Sepolia)
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* =================================================================== */}
        {/* TAB 1: FEDERATION FLIGHT DECK */}
        {/* =================================================================== */}
        {activeTab === "flight-deck" && (
          <div className="space-y-6">
            {/* Round State Machine Banner */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <Server className="h-4 w-4 text-primary" />
                    Central Aggregator Round Lifecycle
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Formal state transitions governed by cryptographic update validation and operator release approval.
                  </p>
                </div>

                {/* State Progress Stepper */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                  {(["draft", "open", "collecting", "validating", "aggregating", "awaiting-approval", "published"] as RoundState[]).map(
                    (st, idx) => {
                      const isCurrent = roundInfo.state === st;
                      return (
                        <React.Fragment key={st}>
                          <span
                            className={`px-2.5 py-1 rounded-md font-semibold transition ${
                              isCurrent
                                ? "bg-teal-600 text-white shadow"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {st}
                          </span>
                          {idx < 6 && <ChevronRight className="h-3 w-3 text-muted-foreground/50" />}
                        </React.Fragment>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Advance Round Quick Actions */}
              <div className="mt-4 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-muted-foreground">
                  Update submissions: <strong>{roundInfo.acceptedUpdates} / {roundInfo.targetParticipants} verified</strong>
                </span>
                <div className="flex items-center gap-2">
                  {roundInfo.state === "draft" && (
                    <button
                      onClick={() => handleAdvanceRound("open")}
                      className="rounded-lg bg-teal-600 px-3 py-1 text-white font-medium hover:bg-teal-700"
                    >
                      Open Round for Hospital Nodes →
                    </button>
                  )}
                  {roundInfo.state === "open" && (
                    <button
                      onClick={() => handleAdvanceRound("collecting")}
                      className="rounded-lg bg-teal-600 px-3 py-1 text-white font-medium hover:bg-teal-700"
                    >
                      Begin Model Collection →
                    </button>
                  )}
                  {roundInfo.state === "collecting" && (
                    <button
                      onClick={() => handleAdvanceRound("validating")}
                      className="rounded-lg bg-teal-600 px-3 py-1 text-white font-medium hover:bg-teal-700"
                    >
                      Validate Hospital Uploads →
                    </button>
                  )}
                  {roundInfo.state === "validating" && (
                    <button
                      onClick={() => handleAdvanceRound("aggregating")}
                      className="rounded-lg bg-teal-600 px-3 py-1 text-white font-medium hover:bg-teal-700"
                    >
                      Run Server Aggregation →
                    </button>
                  )}
                  {roundInfo.state === "awaiting-approval" && (
                    <button
                      onClick={() => setActiveTab("operator-console")}
                      className="rounded-lg bg-teal-600 px-3.5 py-1.5 text-white font-semibold hover:bg-teal-700 flex items-center gap-1.5 shadow"
                    >
                      <ShieldCheck className="h-4 w-4" />
                      Review & Approve Candidate in Operator Console →
                    </button>
                  )}
                  {roundInfo.state === "published" && (
                    <span className="rounded-lg bg-emerald-500/10 text-emerald-600 font-semibold px-3 py-1 flex items-center gap-1.5">
                      <Check className="h-4 w-4" />
                      Round Successfully Published
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Hyperparameter & Real PyTorch Run Box */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <Sliders className="h-4 w-4 text-primary" />
                    Federated Optimization Parameters
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Configure local optimization parameters. FedProx penalizes drift from the global weights via (μ / 2) ||w - w_t||².
                  </p>
                </div>

                <button
                  onClick={handleRunTraining}
                  disabled={isTraining}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90 disabled:opacity-50 active:scale-[0.98]"
                >
                  {isTraining ? (
                    <>
                      <RotateCcw className="h-3.5 w-3.5 animate-spin" />
                      PyTorch Worker Executing…
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5" />
                      Execute Live PyTorch FL Training
                    </>
                  )}
                </button>
              </div>

              {/* Parameter Controls Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4 pt-4 border-t border-border/40 text-xs">
                <div>
                  <label className="text-muted-foreground block font-medium mb-1">Algorithm</label>
                  <select
                    value={algorithm}
                    onChange={(e) => setAlgorithm(e.target.value as any)}
                    className="w-full rounded-lg border border-border bg-card p-2 text-foreground font-semibold"
                  >
                    <option value="fedprox">FedProx (Proximal Regularized)</option>
                    <option value="fedavg">FedAvg (Standard Averaging)</option>
                  </select>
                </div>

                <div>
                  <label className="text-muted-foreground block font-medium mb-1">
                    Proximal Term (μ): <strong className="text-foreground">{mu}</strong>
                  </label>
                  <input
                    type="range"
                    min="0.0"
                    max="1.0"
                    step="0.05"
                    value={mu}
                    disabled={algorithm === "fedavg"}
                    onChange={(e) => setMu(Number(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {algorithm === "fedavg" ? "μ=0 for FedAvg" : "Controls client drift dampening"}
                  </span>
                </div>

                <div>
                  <label className="text-muted-foreground block font-medium mb-1">Local Epochs (E)</label>
                  <select
                    value={localEpochs}
                    onChange={(e) => setLocalEpochs(Number(e.target.value))}
                    className="w-full rounded-lg border border-border bg-card p-2 text-foreground font-semibold"
                  >
                    <option value="1">1 Epoch (Fast sync)</option>
                    <option value="3">3 Epochs (Standard thesis baseline)</option>
                    <option value="5">5 Epochs (Moderate computation)</option>
                    <option value="10">10 Epochs (High local drift)</option>
                  </select>
                </div>

                <div>
                  <label className="text-muted-foreground block font-medium mb-1">Global Rounds</label>
                  <select
                    value={rounds}
                    onChange={(e) => setRounds(Number(e.target.value))}
                    className="w-full rounded-lg border border-border bg-card p-2 text-foreground font-semibold"
                  >
                    <option value="3">3 Rounds</option>
                    <option value="4">4 Rounds</option>
                    <option value="5">5 Rounds</option>
                  </select>
                </div>
              </div>

              {/* Real-time multi-stage training progress banner */}
              {isTraining && (
                <div className="mt-4 rounded-xl border border-primary/40 bg-primary/10 p-3.5 text-xs animate-in fade-in">
                  <div className="flex items-center gap-2 font-semibold text-primary">
                    <RotateCcw className="h-4 w-4 animate-spin text-primary" />
                    <span>Real PyTorch ML Training in Progress</span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-foreground font-medium">
                    {trainingStage}
                  </p>
                </div>
              )}

              {!isTraining && trainingMessage && (
                <div className="mt-3 text-xs text-primary font-medium flex flex-wrap items-center justify-between gap-2 bg-primary/10 rounded-lg p-2.5">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span>{trainingMessage}</span>
                  </div>
                  {lastGeneratedCandidateId && (
                    <button
                      onClick={() => setActiveTab("operator-console")}
                      className="rounded bg-teal-600 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-teal-700 transition"
                    >
                      Review in Operator Console →
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Participating Hospital Nodes Grid */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                  <Server className="h-4 w-4 text-primary" />
                  Participating Hospital Nodes (Edge Enclaves)
                </h3>
                <span className="text-xs text-muted-foreground">3 Institutional Nodes Online</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {hospitals.map((hosp) => (
                  <HospitalNodeCard
                    key={hosp.id}
                    hospital={hosp}
                    onAddSpecimen={handleAddSpecimen}
                    isLoading={isTraining}
                  />
                ))}
              </div>
            </div>

            {/* Live Convergence & Scientific Baseline Charts */}
            <ConvergenceCharts
              mlOutput={mlOutput}
              currentAlgorithm={algorithm}
              mu={mu}
            />

            {/* Live Append-Only Ledger & Audit Stream */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-primary" />
                  Append-Only Ledger & Verification Audit Stream
                </h4>
                <span className="text-[10px] font-mono bg-muted px-2 py-0.5 rounded text-muted-foreground">
                  FIPS 180-4 Verified
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-[11px] max-h-48 overflow-y-auto pr-2 scrollbar-thin">
                {roundInfo.auditLog.map((log, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded bg-muted/40 p-2 border border-border/40">
                    <span className="text-foreground font-medium flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                      {log.event}
                    </span>
                    <div className="flex items-center gap-3 text-muted-foreground text-[10px]">
                      <span>actor: {log.actor}</span>
                      <span>{new Date(log.at).toLocaleTimeString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: OPERATOR CONSOLE */}
        {/* =================================================================== */}
        {activeTab === "operator-console" && <AdminConsoleView />}

        {/* =================================================================== */}
        {/* TAB 3: THESIS DEFENSE DECK */}
        {/* =================================================================== */}
        {activeTab === "defense-deck" && <DefenseSlideViewer />}

        {/* =================================================================== */}
        {/* TAB 4: ZERO-LEAKAGE PRIVACY INSPECTOR */}
        {/* =================================================================== */}
        {activeTab === "privacy-shield" && <PrivacyShieldInspector />}

        {/* =================================================================== */}
        {/* TAB 5: BLOCKCHAIN & IPFS MODEL REGISTRY (SEPOLIA SMART CONTRACT) */}
        {/* =================================================================== */}
        {activeTab === "blockchain-registry" && <BlockchainRegistryView />}
      </div>
    </div>
  );
}
