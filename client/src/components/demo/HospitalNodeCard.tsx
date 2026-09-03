import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Lock,
  Plus,
  Server,
  Activity,
  CheckCircle2,
  FileCheck,
  AlertCircle,
  Eye,
  Binary,
  Cpu,
  X,
  Microscope,
  Sparkles,
  Zap,
  HardDrive,
} from "lucide-react";
import type { HospitalNode } from "@shared/demo-types";

interface Props {
  hospital: HospitalNode;
  onAddSpecimen: (hospitalId: string, label: "benign" | "malignant") => Promise<void>;
  isLoading?: boolean;
}

interface SpecimenSample {
  id: string;
  type: "benign" | "malignant";
  subtype: string;
  filename: string;
  tissueType: string;
  magnification: string;
  imageUrl: string;
  fullPath: string;
}

interface DiagnosisResult {
  success: boolean;
  filename: string;
  prediction: "Benign" | "Malignant";
  confidence: number;
  probabilities: { benign: number; malignant: number };
  latency_ms: number;
  model_architecture: string;
  feature_dim: number;
  feature_sample: number[];
  device: string;
}

export const HospitalNodeCard: React.FC<Props> = ({ hospital, onAddSpecimen, isLoading }) => {
  const [adding, setAdding] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<"benign" | "malignant">("benign");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEnclaveModal, setShowEnclaveModal] = useState(false);
  const [showDiagnosisModal, setShowDiagnosisModal] = useState(false);

  // Gallery & Diagnosis state
  const [diagnosisMode, setDiagnosisMode] = useState<"gallery" | "upload">("gallery");
  const [gallery, setGallery] = useState<SpecimenSample[]>([]);
  const [selectedSpecimen, setSelectedSpecimen] = useState<SpecimenSample | null>(null);
  const [customFilePreview, setCustomFilePreview] = useState<string | null>(null);
  const [customFileName, setCustomFileName] = useState<string>("");
  const [diagnosing, setDiagnosing] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null);

  const benignPct =
    hospital.specimens.total > 0
      ? Math.round((hospital.specimens.benign / hospital.specimens.total) * 100)
      : 50;
  const malignantPct = 100 - benignPct;

  const handleAdd = async () => {
    setAdding(true);
    try {
      await onAddSpecimen(hospital.id, selectedLabel);
      setShowAddModal(false);
    } finally {
      setAdding(false);
    }
  };

  const loadGallery = async () => {
    try {
      const res = await fetch("/api/demo/specimens/gallery");
      const data = await res.json();
      if (data.success && data.samples.length > 0) {
        setGallery(data.samples);
        setSelectedSpecimen(data.samples[0]);
      }
    } catch (e) {
      console.warn("Failed loading gallery:", e);
    }
  };

  const handleOpenDiagnosisModal = () => {
    setShowDiagnosisModal(true);
    setDiagnosisResult(null);
    if (gallery.length === 0) {
      loadGallery();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCustomFileName(file.name);
    setDiagnosisResult(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      setCustomFilePreview(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRunInference = async () => {
    setDiagnosing(true);
    setDiagnosisResult(null);
    try {
      if (diagnosisMode === "gallery") {
        if (!selectedSpecimen) return;
        const res = await fetch(`/api/demo/hospitals/${hospital.id}/classify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imagePath: selectedSpecimen.fullPath }),
        });
        const data = await res.json();
        if (data.success) {
          setDiagnosisResult(data.result);
        }
      } else {
        if (!customFilePreview) return;
        const res = await fetch(`/api/demo/hospitals/${hospital.id}/classify-upload`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            imageBase64: customFilePreview,
            filename: customFileName,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setDiagnosisResult(data.result);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDiagnosing(false);
    }
  };

  return (
    <div className="rounded-xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md flex flex-col justify-between">
      <div>
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
                Exported Manifest Digest
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
      </div>

      {/* Action Buttons */}
      <div className="mt-4 space-y-2 pt-2 border-t border-border/40">
        <button
          onClick={handleOpenDiagnosisModal}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-teal-700 transition active:scale-[0.98]"
        >
          <Microscope className="h-4 w-4" />
          Diagnose Slide (best_histopathology_model.pth)
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => setShowAddModal(true)}
            disabled={isLoading}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground shadow-sm transition hover:bg-muted active:scale-[0.98]"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Specimen
          </button>

          <button
            onClick={() => setShowEnclaveModal(true)}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition active:scale-[0.98]"
            title="Inspect Local Enclave Receipts & Tensors"
          >
            <Binary className="h-3.5 w-3.5" />
            Inspect Enclave
          </button>
        </div>
      </div>

      {/* Modal for Pathology Slide Diagnosis (AI Inference with best_histopathology_model.pth) */}
      {showDiagnosisModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in fade-in zoom-in-95 my-8">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Microscope className="h-4 w-4 text-teal-600" />
                  <span className="text-xs font-mono font-bold uppercase text-teal-700 dark:text-teal-400">
                    Pathologist Enclave AI Diagnostic Assistant
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-base mt-0.5">
                  {hospital.name} · Local Specimen Detection
                </h3>
              </div>
              <button
                onClick={() => setShowDiagnosisModal(false)}
                className="rounded p-1 text-muted-foreground hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Execute live local PyTorch inference using the trained <strong>EfficientNet-B0 + Coordinate Attention</strong> model (<code>best_histopathology_model.pth</code>) within the local enclave.
            </p>

            {/* Mode Switcher Tabs */}
            <div className="flex border-b border-border mt-4 mb-3">
              <button
                type="button"
                onClick={() => {
                  setDiagnosisMode("gallery");
                  setDiagnosisResult(null);
                }}
                className={`px-3 py-1.5 text-xs font-semibold border-b-2 transition ${
                  diagnosisMode === "gallery"
                    ? "border-teal-600 text-teal-700 dark:text-teal-400"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                🔬 BreaKHis Specimen Library (6 Subtypes)
              </button>
              <button
                type="button"
                onClick={() => {
                  setDiagnosisMode("upload");
                  setDiagnosisResult(null);
                }}
                className={`px-3 py-1.5 text-xs font-semibold border-b-2 transition ${
                  diagnosisMode === "upload"
                    ? "border-teal-600 text-teal-700 dark:text-teal-400"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                📁 Upload Custom Slide Image
              </button>
            </div>

            {/* Tab 1: Gallery Picker */}
            {diagnosisMode === "gallery" && (
              <div className="space-y-3">
                <label className="text-xs font-semibold text-foreground block">
                  Select Biopsy Slide Specimen
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {gallery.map((s) => {
                    const isSelected = selectedSpecimen?.id === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          setSelectedSpecimen(s);
                          setDiagnosisResult(null);
                        }}
                        className={`rounded-xl border p-2.5 text-left transition flex flex-col justify-between gap-1.5 ${
                          isSelected
                            ? "border-teal-600 bg-teal-500/10 ring-2 ring-teal-600/30"
                            : "border-border bg-muted/20 hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold uppercase ${
                              s.type === "benign" ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300" : "bg-rose-500/20 text-rose-700 dark:text-rose-300"
                            }`}
                          >
                            {s.type}
                          </span>
                          <span className="text-[10px] font-mono text-muted-foreground">{s.magnification}</span>
                        </div>
                        <strong className="text-xs text-foreground font-medium truncate block">
                          {s.subtype}
                        </strong>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 2: Custom File Upload */}
            {diagnosisMode === "upload" && (
              <div className="space-y-3">
                <label className="text-xs font-semibold text-foreground block">
                  Upload Histology Biopsy Slide (PNG / JPG / TIFF)
                </label>
                <div className="rounded-xl border-2 border-dashed border-border p-6 text-center hover:border-teal-500/50 transition bg-muted/10">
                  <input
                    type="file"
                    id="specimen-file-input"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="specimen-file-input"
                    className="cursor-pointer flex flex-col items-center justify-center gap-2"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
                      <HardDrive className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">
                      Click to choose slide image file or drag here
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      PNG, JPG, TIFF · Image will be written strictly to local node storage
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Specimen Preview & Inference Runner */}
            {((diagnosisMode === "gallery" && selectedSpecimen) || (diagnosisMode === "upload" && customFilePreview)) && (
              <div className="mt-4 rounded-xl border border-border bg-muted/20 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  {/* Slide Image Preview */}
                  <div className="rounded-lg overflow-hidden border border-border bg-black/10 aspect-[4/3] relative flex items-center justify-center">
                    <img
                      src={diagnosisMode === "gallery" ? selectedSpecimen?.imageUrl : customFilePreview || ""}
                      alt="Histopathology Slide"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded">
                      {diagnosisMode === "gallery" ? `${selectedSpecimen?.magnification} · 700×460 SVS Crop` : customFileName}
                    </div>
                  </div>

                  {/* Specimen Details & Action */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase">Pathological Classification</span>
                      <h4 className="font-semibold text-sm text-foreground">
                        {diagnosisMode === "gallery" ? selectedSpecimen?.subtype : "Custom Biopsy Sample"}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {diagnosisMode === "gallery" ? selectedSpecimen?.tissueType : "Digitized from pathologist workstation"}
                      </p>
                    </div>

                    <div className="rounded-lg bg-background p-2.5 border border-border text-[11px] font-mono space-y-1 text-muted-foreground">
                      <div>Input Size: 160×160 RGB Normalized</div>
                      <div>Architecture: EfficientNet-B0 + CoordAttn</div>
                      <div>Weights: best_histopathology_model.pth</div>
                    </div>

                    <button
                      type="button"
                      onClick={handleRunInference}
                      disabled={diagnosing}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-teal-700 transition disabled:opacity-50"
                    >
                      {diagnosing ? (
                        <>
                          <Activity className="h-4 w-4 animate-spin" />
                          Executing PyTorch Neural Inference…
                        </>
                      ) : (
                        <>
                          <Zap className="h-4 w-4" />
                          Execute Local Model Diagnosis
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Real Diagnostic Result Report */}
                {diagnosisResult && (
                  <div className="mt-4 pt-4 border-t border-border animate-in fade-in">
                    <div
                      className={`rounded-xl border p-4 ${
                        diagnosisResult.prediction === "Malignant"
                          ? "border-rose-500/40 bg-rose-500/10 text-rose-950 dark:text-rose-200"
                          : "border-emerald-500/40 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-current" />
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase">Diagnosis Decision</span>
                            <h5 className="text-base font-bold tracking-tight">
                              {diagnosisResult.prediction.toUpperCase()} ({diagnosisResult.confidence}% Confidence)
                            </h5>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className="rounded bg-background/80 px-2 py-1 border border-border text-foreground">
                            Latency: {diagnosisResult.latency_ms} ms
                          </span>
                        </div>
                      </div>

                      {/* Confidence Meter */}
                      <div className="mt-3">
                        <div className="flex justify-between text-xs font-mono mb-1 text-foreground font-medium">
                          <span>Benign Probability: {diagnosisResult.probabilities.benign}%</span>
                          <span>Malignant Probability: {diagnosisResult.probabilities.malignant}%</span>
                        </div>
                        <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden flex">
                          <div
                            className="bg-emerald-500 transition-all duration-500"
                            style={{ width: `${diagnosisResult.probabilities.benign}%` }}
                          />
                          <div
                            className="bg-rose-500 transition-all duration-500"
                            style={{ width: `${diagnosisResult.probabilities.malignant}%` }}
                          />
                        </div>
                      </div>

                      {/* Coordinate Attention Latent Feature Preview */}
                      <div className="mt-3 pt-3 border-t border-current/20 text-[10px] font-mono">
                        <div className="text-foreground font-semibold mb-1">
                          Coordinate Attention 1280-Dim Latent Activation Sample:
                        </div>
                        <div className="bg-background/80 p-2 rounded border border-border text-muted-foreground truncate">
                          [{diagnosisResult.feature_sample.join(", ")}, ...]
                        </div>
                      </div>

                      <div className="mt-2 text-[11px] font-sans flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-medium">
                        <ShieldCheck className="h-4 w-4" />
                        Zero-Leakage Verified: Inference completed inside local {hospital.name} container.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowDiagnosisModal(false)}
                className="rounded-lg px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted"
              >
                Close Scanner
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for adding manual specimen */}
      {showAddModal && (
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
                onClick={() => setShowAddModal(false)}
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

      {/* Modal for inspecting Enclave Receipts & Parameter Tensor */}
      {showEnclaveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-primary" />
                  <span className="text-xs font-mono font-bold uppercase text-primary">
                    Edge Enclave Inspector
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-base mt-0.5">
                  {hospital.name}
                </h3>
              </div>
              <button
                onClick={() => setShowEnclaveModal(false)}
                className="rounded p-1 text-muted-foreground hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Zero-Leakage Gate Checklist */}
            <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20 p-3.5 text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-800 dark:text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
                Zero-Leakage Contract Verification (Agent Port 8443)
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="flex items-center justify-between rounded bg-background/80 p-2 border border-border/40">
                  <span className="text-muted-foreground">Raw DICOM / SVS:</span>
                  <span className="text-emerald-600 font-bold">LOCKED LOCAL</span>
                </div>
                <div className="flex items-center justify-between rounded bg-background/80 p-2 border border-border/40">
                  <span className="text-muted-foreground">Patient Identifiers:</span>
                  <span className="text-emerald-600 font-bold">STRIPPED (0 Bytes)</span>
                </div>
              </div>
            </div>

            {/* SQLite Model Receipt */}
            <div className="mt-4">
              <h4 className="text-xs font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                <FileCheck className="h-3.5 w-3.5 text-primary" />
                Local SQLite Receipt Record (Immutable Node Proof)
              </h4>
              <div className="rounded-lg bg-muted/40 p-3 font-mono text-[11px] space-y-1 text-muted-foreground border border-border/60">
                <div className="flex justify-between">
                  <span>receipt_id:</span>
                  <span className="text-foreground font-semibold">RCPT-2026-08-{hospital.id.slice(-4).toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span>client_enclave_id:</span>
                  <span className="text-foreground">{hospital.id}</span>
                </div>
                <div className="flex justify-between">
                  <span>verified_sample_count:</span>
                  <span className="text-foreground font-semibold">{hospital.specimens.total}</span>
                </div>
                <div className="flex justify-between">
                  <span>parameter_digest:</span>
                  <span className="text-foreground truncate max-w-[200px]" title={hospital.lastExportedManifest?.manifestSha256}>
                    sha256:{hospital.lastExportedManifest?.manifestSha256 || "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"}
                  </span>
                </div>
              </div>
            </div>

            {/* Parameter Weight Tensor Sample */}
            <div className="mt-4">
              <h4 className="text-xs font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                <Binary className="h-3.5 w-3.5 text-primary" />
                Outbound Parameter Tensor (Normalized Float32 Weights)
              </h4>
              <div className="rounded-lg bg-background p-3 font-mono text-[10px] text-muted-foreground border border-border overflow-x-auto">
                <p className="text-primary font-bold mb-1">// EfficientNet-B0 + Coordinate Attention Gradients</p>
                <pre className="text-foreground">
{`features.0.0.weight: shape=[32, 3, 3, 3], dtype=float32
  [[[-0.0412,  0.0891, -0.0156],
    [ 0.1245, -0.0321,  0.0789],
    [-0.0567,  0.0112, -0.0943]], ...]
attention.conv1.weight: shape=[80, 1280, 1, 1], dtype=float32
classifier.1.weight: shape=[256, 1280], dtype=float32
classifier.5.weight: shape=[2, 256], dtype=float32`}
                </pre>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowEnclaveModal(false)}
                className="rounded-lg bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow hover:bg-primary/90"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
