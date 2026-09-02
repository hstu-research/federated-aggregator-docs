import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Plus,
  Server,
  Activity,
  CheckCircle2,
  FileCheck,
  AlertCircle,
} from "lucide-react";
import type { HospitalNode } from "@shared/demo-types";

interface Props {
  hospital: HospitalNode;
  onAddSpecimen: (hospitalId: string, label: "benign" | "malignant") => Promise<void>;
  isLoading?: boolean;
}

export const HospitalNodeCard: React.FC<Props> = ({ hospital, onAddSpecimen, isLoading }) => {
  const [adding, setAdding] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<"benign" | "malignant">("benign");
  const [showModal, setShowModal] = useState(false);

  const benignPct =
    hospital.specimens.total > 0
      ? Math.round((hospital.specimens.benign / hospital.specimens.total) * 100)
      : 50;
  const malignantPct = 100 - benignPct;

  const handleAdd = async () => {
    setAdding(true);
    try {
      await onAddSpecimen(hospital.id, selectedLabel);
      setShowModal(false);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="rounded-xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Server className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm tracking-tight">{hospital.name}</h3>
            <p className="text-xs text-muted-foreground">{hospital.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {hospital.status.toUpperCase()}
        </div>
      </div>

      {/* Specimen Counts */}
      <div className="mt-4 rounded-lg bg-muted/40 p-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span>Local Biopsy Inventory</span>
          <span className="font-mono font-semibold text-foreground">{hospital.specimens.total} specimens</span>
        </div>
        {/* Progress bar */}
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted flex">
          <div
            className="bg-emerald-500 transition-all duration-500"
            style={{ width: `${benignPct}%` }}
            title={`Benign: ${hospital.specimens.benign} (${benignPct}%)`}
          />
          <div
            className="bg-amber-500 transition-all duration-500"
            style={{ width: `${malignantPct}%` }}
            title={`Malignant: ${hospital.specimens.malignant} (${malignantPct}%)`}
          />
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-muted-foreground font-mono">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
            Benign: <strong>{hospital.specimens.benign}</strong> ({benignPct}%)
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-amber-500 inline-block" />
            Malignant: <strong>{hospital.specimens.malignant}</strong> ({malignantPct}%)
          </span>
        </div>
      </div>

      {/* Privacy Barrier Seal */}
      <div className="mt-3 flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs">
        <div className="flex items-center gap-2 text-primary font-medium">
          <ShieldCheck className="h-4 w-4" />
          <span>Zero-Leakage Boundary Active</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground">
          <Lock className="h-3 w-3 text-emerald-600" />
          <span>0B Raw Images Out</span>
        </div>
      </div>

      {/* Outbound Manifest */}
      {hospital.lastExportedManifest && (
        <div className="mt-3 rounded-lg border border-border/60 bg-background/50 p-2.5 text-[11px] text-muted-foreground">
          <div className="flex items-center justify-between font-mono mb-1">
            <span className="flex items-center gap-1 text-foreground font-medium">
              <FileCheck className="h-3.5 w-3.5 text-primary" />
              Manifest Digest
            </span>
            <span className="text-[10px] uppercase text-primary font-semibold">
              {hospital.lastExportedManifest.algorithm}
            </span>
          </div>
          <p className="font-mono text-[10px] truncate text-muted-foreground" title={hospital.lastExportedManifest.manifestSha256}>
            sha256:{hospital.lastExportedManifest.manifestSha256.slice(0, 24)}…
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setShowModal(true)}
          disabled={isLoading}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition hover:bg-muted active:scale-[0.98]"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Local Specimen
        </button>
      </div>

      {/* Modal for adding specimen */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-xl border border-border bg-card p-5 shadow-xl animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
              <Plus className="h-4 w-4 text-primary" />
              Register Biopsy Specimen locally
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Simulates digitizing a new tissue sample within <strong>{hospital.name}</strong>. Raw histopathology slides remain strictly in local storage.
            </p>

            <div className="mt-4 space-y-2">
              <label className="text-xs font-medium text-foreground block">Pathology Classification</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedLabel("benign")}
                  className={`flex items-center justify-center gap-1.5 rounded-lg border p-2.5 text-xs font-medium transition ${
                    selectedLabel === "benign"
                      ? "border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 ring-2 ring-emerald-500/20"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Benign
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLabel("malignant")}
                  className={`flex items-center justify-center gap-1.5 rounded-lg border p-2.5 text-xs font-medium transition ${
                    selectedLabel === "malignant"
                      ? "border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 ring-2 ring-amber-500/20"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  Malignant
                </button>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-muted/50 p-2.5 text-[11px] text-muted-foreground">
              <p className="flex items-center gap-1 font-medium text-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                Zero-Leakage Assurance
              </p>
              <p className="mt-0.5">Only an incremented local sample count and updated parameter gradient leave this hospital enclave.</p>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAdd}
                disabled={adding}
                className="rounded-lg bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground shadow transition hover:bg-primary/90 disabled:opacity-50"
              >
                {adding ? "Registering…" : "Confirm Local Registration"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
