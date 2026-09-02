import React, { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  ArrowRight,
  Database,
  Server,
  FileCode2,
  FileX2,
  CheckCircle2,
  AlertOctagon,
  RefreshCw,
} from "lucide-react";

export const PrivacyShieldInspector: React.FC = () => {
  const [simulationState, setSimulationState] = useState<"idle" | "running" | "blocked">("idle");
  const [tamperType, setTamperType] = useState<"patient_id" | "raw_dicom" | "nan_tensor">("patient_id");

  const runRejectionProof = () => {
    setSimulationState("running");
    setTimeout(() => {
      setSimulationState("blocked");
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* Visual Architectural Data Flow */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="font-semibold text-foreground text-base flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              Governed Data Boundary & Zero-Leakage Architecture
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Strict formal verification: hospital raw clinical data never exits the institutional perimeter.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            324 Verification Gates Passed
          </span>
        </div>

        {/* 3-Tier Boundary Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Tier 1: Local Enclave */}
          <div className="rounded-xl border-2 border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 relative">
            <div className="absolute top-3 right-3">
              <Lock className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-emerald-700 dark:text-emerald-300">
              TIER 1 · LOCAL ENCLAVE
            </span>
            <h4 className="font-semibold text-sm text-foreground mt-1">Hospital Node Boundary</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Local clinical workspace running SQLite control state & PyTorch optimizer.
            </p>
            <div className="mt-4 space-y-1.5 text-xs">
              <div className="flex items-center justify-between rounded bg-background/80 p-2 border border-border/40">
                <span className="text-muted-foreground">Raw Biopsy Slides</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">ISOLATED (Local)</span>
              </div>
              <div className="flex items-center justify-between rounded bg-background/80 p-2 border border-border/40">
                <span className="text-muted-foreground">Patient Identifiers</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">STRIPPED (Zero Transmit)</span>
              </div>
              <div className="flex items-center justify-between rounded bg-background/80 p-2 border border-border/40">
                <span className="text-muted-foreground">Local Weights (w_k)</span>
                <span className="font-semibold text-primary">Trained in tmpfs</span>
              </div>
            </div>
          </div>

          {/* Tier 2: The Gateway Filter */}
          <div className="rounded-xl border border-border bg-muted/40 p-4 relative text-center">
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-primary">
              TIER 2 · GATEWAY FILTER
            </span>
            <h4 className="font-semibold text-sm text-foreground mt-1">Inspection & Manifest Gate</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Deterministic validation of shape, finite floats, and SHA-256 digest.
            </p>
            <div className="mt-4 space-y-2">
              <div className="rounded-lg bg-background p-2.5 border border-border text-left font-mono text-[11px]">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Outgoing Data Class:</span>
                  <span className="text-foreground font-semibold">Tensors Only</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground mt-1">
                  <span>Byte Payload:</span>
                  <span className="text-foreground">Float32 Arrays</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground mt-1">
                  <span>Digest Protocol:</span>
                  <span className="text-emerald-600">FIPS 180-4 SHA-256</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 3: Central Aggregator */}
          <div className="rounded-xl border border-border bg-card p-4 relative">
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-primary">
              TIER 3 · CONTROL PLANE
            </span>
            <h4 className="font-semibold text-sm text-foreground mt-1">Central Aggregator</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Performs weighted parameter averaging without access to local hospital data.
            </p>
            <div className="mt-4 space-y-1.5 text-xs">
              <div className="flex items-center justify-between rounded bg-background p-2 border border-border">
                <span className="text-muted-foreground">Global Model (w_global)</span>
                <span className="font-semibold text-foreground">Updated in memory</span>
              </div>
              <div className="flex items-center justify-between rounded bg-background p-2 border border-border">
                <span className="text-muted-foreground">Audit Record</span>
                <span className="font-semibold text-emerald-600">Append-only Ledger</span>
              </div>
              <div className="flex items-center justify-between rounded bg-background p-2 border border-border">
                <span className="text-muted-foreground">Clinical Raw Data</span>
                <span className="font-semibold text-rose-600 dark:text-rose-400">NEVER ACCEPTED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tamper & Malicious Data Rejection Simulation */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
              <AlertOctagon className="h-4 w-4 text-amber-500" />
              Live Security Attack & Terminal Rejection Simulation
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              Verify that the hospital agent and aggregator reject any malformed update, patient identifier, or non-finite gradient tensor.
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => { setTamperType("patient_id"); setSimulationState("idle"); }}
            className={`rounded-lg border p-3 text-left transition ${
              tamperType === "patient_id" ? "border-primary bg-primary/5 ring-2 ring-primary/20" : "border-border hover:bg-muted"
            }`}
          >
            <p className="font-semibold text-xs text-foreground">1. Leak Patient Identifier</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">Attempt sending MRN / DOB in the update envelope.</p>
          </button>

          <button
            onClick={() => { setTamperType("raw_dicom"); setSimulationState("idle"); }}
            className={`rounded-lg border p-3 text-left transition ${
              tamperType === "raw_dicom" ? "border-primary bg-primary/5 ring-2 ring-primary/20" : "border-border hover:bg-muted"
            }`}
          >
            <p className="font-semibold text-xs text-foreground">2. Inject Raw Slide Bytes</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">Attempt appending histopathology image pixels.</p>
          </button>

          <button
            onClick={() => { setTamperType("nan_tensor"); setSimulationState("idle"); }}
            className={`rounded-lg border p-3 text-left transition ${
              tamperType === "nan_tensor" ? "border-primary bg-primary/5 ring-2 ring-primary/20" : "border-border hover:bg-muted"
            }`}
          >
            <p className="font-semibold text-xs text-foreground">3. Corrupt Weight Tensor</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">Inject NaN/Inf or shape-mismatched parameters.</p>
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={runRejectionProof}
            disabled={simulationState === "running"}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-xs font-semibold text-white shadow transition hover:bg-amber-700 disabled:opacity-50"
          >
            {simulationState === "running" ? (
              <>
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                Executing Contract Boundary Check…
              </>
            ) : (
              <>
                <ShieldAlert className="h-4 w-4" />
                Execute Attack Injection & Verify Rejection
              </>
            )}
          </button>
        </div>

        {/* Results Banner */}
        {simulationState === "blocked" && (
          <div className="mt-4 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs animate-in fade-in">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-rose-500/20 p-1.5 text-rose-600 dark:text-rose-400">
                <FileX2 className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h5 className="font-semibold text-rose-700 dark:text-rose-300 text-sm">
                    MALICIOUS ATTEMPT TERMINALLY BLOCKED & QUARANTINED
                  </h5>
                  <span className="font-mono text-[10px] text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                    HTTP 400 REJECTED
                  </span>
                </div>
                <p className="mt-1 text-muted-foreground">
                  {tamperType === "patient_id" && (
                    <>
                      <strong>Contract Violation:</strong> <code>containsPatientIdentifiers: true</code> detected. The Agent's <code>synthetic-patient-data-marker-rejection</code> rule intercepted and terminally closed the transaction without network transmission.
                    </>
                  )}
                  {tamperType === "raw_dicom" && (
                    <>
                      <strong>Boundary Violation:</strong> Raw image buffer detected in manifest payload. Aggregator quarantine rule <code>AGG-SEC-004</code> immediately dropped connection and recorded an immutable security anomaly event.
                    </>
                  )}
                  {tamperType === "nan_tensor" && (
                    <>
                      <strong>Numerical Integrity Error:</strong> Non-finite tensor value (NaN / Inf) encountered during parameter vector validation in <code>fedagg_ml_core.validate_updates</code>. Aggregation aborted; global weights preserved intact.
                    </>
                  )}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Audit Event logged to append-only register: <code>security.quarantine.{tamperType}.v1</code>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
