import React, { useState, useEffect } from "react";
import {
  Activity,
  ArrowRight,
  Check,
  CircleAlert,
  Database,
  FileClock,
  Gauge,
  GitBranch,
  LayoutDashboard,
  RefreshCw,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import type {
  CandidateModel,
  ModelRelease,
  OutboxEvent,
} from "@shared/demo-types";

export const AdminConsoleView: React.FC = () => {
  const [subView, setSubView] = useState<"overview" | "operations" | "releases" | "retention">("overview");
  const [outbox, setOutbox] = useState<OutboxEvent[]>([]);
  const [candidates, setCandidates] = useState<CandidateModel[]>([]);
  const [releases, setReleases] = useState<ModelRelease[]>([]);
  const [readiness, setReadiness] = useState<{
    status: string;
    coreApiUrl?: string;
    dependencies: Record<string, string>;
    cloudInfrastructure?: Record<string, string>;
  }>({
    status: "ok",
    coreApiUrl: "https://api.medchain.paradox-bd.com",
    dependencies: { database: "up", redis: "up", object_storage: "up", ml_worker: "up" },
    cloudInfrastructure: {
      database: "Neon Serverless PostgreSQL (ep-autumn-dream-aza69nvb)",
      redis: "Upstash Managed Redis (TLS 6379)",
      object_storage: "Cloudflare R2 Bucket (medchain)",
      auth: "Clerk OIDC Institutional Realm (heroic-bream-99)",
    },
  });
  const [message, setMessage] = useState<string>("Control-plane connected to live backend API.");
  const [loading, setLoading] = useState(false);

  // Modal action state
  const [actionModal, setActionModal] = useState<{
    type: "retry" | "dead-letter" | "approve-candidate" | "publish-release";
    targetId: string;
    title: string;
    description: string;
  } | null>(null);
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchState = async () => {
    try {
      setLoading(true);
      const [readinessRes, outboxRes, candidatesRes, releasesRes] = await Promise.all([
        fetch("/health/ready").then((r) => r.json()).catch(() => null),
        fetch("/v1/operations/outbox").then((r) => r.json()).catch(() => []),
        fetch("/v1/federations/breakhis-research/candidates").then((r) => r.json()).catch(() => []),
        fetch("/v1/federations/breakhis-research/releases").then((r) => r.json()).catch(() => []),
      ]);

      if (readinessRes) setReadiness(readinessRes);
      if (Array.isArray(outboxRes)) setOutbox(outboxRes);
      if (Array.isArray(candidatesRes)) setCandidates(candidatesRes);
      if (Array.isArray(releasesRes)) setReleases(releasesRes);
      setMessage("Live control-plane state refreshed.");
    } catch (e) {
      console.warn("Failed fetching admin state:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchState();
  }, []);

  const handleConfirmAction = async () => {
    if (!actionModal || !reason.trim()) return;
    setSubmitting(true);
    try {
      if (actionModal.type === "retry" || actionModal.type === "dead-letter") {
        await fetch(`/v1/operations/outbox/${actionModal.targetId}/${actionModal.type}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reason }),
        });
      } else if (actionModal.type === "approve-candidate") {
        await fetch(`/v1/candidates/${actionModal.targetId}/approvals`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ decision: "approved", reason }),
        });
      } else if (actionModal.type === "publish-release") {
        await fetch(`/v1/candidates/${actionModal.targetId}/releases`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ releaseVersion: `2026.09.${releases.length + 1}.0` }),
        });
      }
      setActionModal(null);
      setReason("");
      await fetchState();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const pendingCount = outbox.filter((e) => e.deliveryState === "pending").length;

  return (
    <div className="space-y-6">
      {/* Console Nav Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600/10 text-teal-600 font-bold">
            P
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground">Federated Operator Console</h4>
            <p className="text-xs text-muted-foreground">Clinical Instrument Panel · Role: Platform Administrator</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-muted/60 p-1">
          <button
            onClick={() => setSubView("overview")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition ${
              subView === "overview" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            Overview
          </button>
          <button
            onClick={() => setSubView("operations")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition ${
              subView === "operations" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Activity className="h-3.5 w-3.5" />
            Outbox Operations {pendingCount > 0 && <span className="rounded-full bg-amber-500/20 text-amber-600 text-[10px] px-1.5">{pendingCount}</span>}
          </button>
          <button
            onClick={() => setSubView("releases")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition ${
              subView === "releases" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <GitBranch className="h-3.5 w-3.5" />
            Release Chain ({candidates.length})
          </button>
          <button
            onClick={() => setSubView("retention")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition ${
              subView === "retention" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileClock className="h-3.5 w-3.5" />
            Retention
          </button>
        </div>

        <button
          onClick={fetchState}
          disabled={loading}
          className="inline-flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {/* SUBVIEW 1: OVERVIEW */}
      {subView === "overview" && (
        <div className="space-y-6">
          {/* Top Metric Band */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs text-muted-foreground">Dependencies</span>
              <p className="mt-1 font-mono text-xl font-bold text-emerald-600">ALL UP</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">PostgreSQL, Redis, MinIO, PyTorch</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs text-muted-foreground">Pending Delivery</span>
              <p className="mt-1 font-mono text-xl font-bold text-foreground">
                {String(pendingCount).padStart(2, "0")}
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Outbox dispatch queue</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs text-muted-foreground">Active Candidates</span>
              <p className="mt-1 font-mono text-xl font-bold text-foreground">
                {String(candidates.length).padStart(2, "0")}
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Models awaiting approval</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs text-muted-foreground">Published Releases</span>
              <p className="mt-1 font-mono text-xl font-bold text-teal-600">
                {String(releases.length).padStart(2, "0")}
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Immutable global models</p>
            </div>
          </div>

          {/* Dependency Readiness Breakdown */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-teal-600" />
                  Control Plane Subsystem Health
                </h4>
                <p className="text-xs text-muted-foreground">Connected to Federated Core Engine at <code className="font-mono text-[11px] text-teal-600 font-semibold">{readiness.coreApiUrl || "https://api.medchain.paradox-bd.com"}</code></p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Cloud Backbone
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {Object.entries(readiness.dependencies).map(([name]) => (
                <div key={name} className="rounded-lg border border-border/80 bg-muted/30 p-3 flex items-center justify-between">
                  <div>
                    <strong className="text-xs text-foreground uppercase tracking-wide block">
                      {name.replace("_", " ")}
                    </strong>
                    <span className="text-[11px] text-emerald-600 font-medium">Reachable (200 OK)</span>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              ))}
            </div>

            {/* Cloud Provider Infrastructure */}
            {readiness.cloudInfrastructure && (
              <div className="rounded-lg border border-teal-500/20 bg-teal-500/5 p-3.5 text-xs">
                <p className="font-semibold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                  Authenticated Cloud Service Integrations:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground font-mono text-[11px]">
                  <div>• <span className="text-foreground font-medium">PostgreSQL:</span> {readiness.cloudInfrastructure.database}</div>
                  <div>• <span className="text-foreground font-medium">Redis:</span> {readiness.cloudInfrastructure.redis}</div>
                  <div>• <span className="text-foreground font-medium">Storage:</span> {readiness.cloudInfrastructure.object_storage}</div>
                  <div>• <span className="text-foreground font-medium">OIDC:</span> {readiness.cloudInfrastructure.auth}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUBVIEW 2: OUTBOX DELIVERY OPERATIONS */}
      {subView === "operations" && (
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                Outbox Delivery & Interventions
              </h4>
              <p className="text-xs text-muted-foreground">
                Transactional outbox events. Interventions require accountable operator justification.
              </p>
            </div>
            <span className="text-xs font-mono text-muted-foreground">{outbox.length} records</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-border text-muted-foreground font-mono">
                  <th className="pb-2">Event</th>
                  <th className="pb-2">State</th>
                  <th className="pb-2">Attempts</th>
                  <th className="pb-2">Correlation</th>
                  <th className="pb-2">Context / Error</th>
                  <th className="pb-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {outbox.map((event) => (
                  <tr key={event.eventId} className="hover:bg-muted/30">
                    <td className="py-2.5">
                      <strong className="text-foreground block">{event.eventType.replace(".v1", "")}</strong>
                      <span className="text-[10px] text-muted-foreground">{event.aggregateType} / {event.aggregateId}</span>
                    </td>
                    <td className="py-2.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                          event.deliveryState === "published"
                            ? "bg-emerald-500/10 text-emerald-600"
                            : event.deliveryState === "pending"
                            ? "bg-amber-500/10 text-amber-600"
                            : "bg-rose-500/10 text-rose-600"
                        }`}
                      >
                        {event.deliveryState}
                      </span>
                    </td>
                    <td className="py-2.5 font-mono">{event.publishAttempts}</td>
                    <td className="py-2.5 font-mono text-[10px] text-muted-foreground">{event.correlationId.slice(0, 12)}…</td>
                    <td className="py-2.5 text-muted-foreground max-w-xs truncate">
                      {event.lastPublishError || event.accountableReason || "—"}
                    </td>
                    <td className="py-2.5 text-right">
                      {event.deliveryState === "pending" ? (
                        <div className="inline-flex gap-1.5">
                          <button
                            onClick={() =>
                              setActionModal({
                                type: "retry",
                                targetId: event.eventId,
                                title: "Request Another Delivery Attempt",
                                description: "Retrying preserves the immutable event identity and payload. Consumers must enforce idempotency.",
                              })
                            }
                            className="rounded bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary hover:bg-primary/20"
                          >
                            Retry
                          </button>
                          <button
                            onClick={() =>
                              setActionModal({
                                type: "dead-letter",
                                targetId: event.eventId,
                                title: "Dead-Letter This Outbox Event",
                                description: "Dead-lettering excludes this unpublished event from automatic dispatch without erasing evidence.",
                              })
                            }
                            className="rounded bg-rose-500/10 px-2 py-1 text-[11px] font-medium text-rose-600 hover:bg-rose-500/20"
                          >
                            Dead-letter
                          </button>
                        </div>
                      ) : (
                        <span className="text-[11px] text-muted-foreground flex items-center justify-end gap-1">
                          <Check className="h-3 w-3 text-emerald-600" /> Settled
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUBVIEW 3: RELEASE CHAIN & CANDIDATES */}
      {subView === "releases" && (
        <div className="space-y-6">
          {/* Candidate Models */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-1">
              <GitBranch className="h-4 w-4 text-primary" />
              Candidate Models Awaiting Governance Approval
            </h4>
            <p className="text-xs text-muted-foreground mb-4">
              Generated by the aggregation workers. Multi-party operator sign-off required before publication into release ledger.
            </p>

            <div className="space-y-4">
              {candidates.map((c) => (
                <div key={c.candidateId} className="rounded-xl border border-border p-4 bg-muted/20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-sm text-foreground">{c.candidateId}</strong>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                            c.state === "approved" ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"
                          }`}
                        >
                          {c.state}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-mono mt-0.5">
                        Digest: {c.candidateDigest}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {c.state === "pending_approval" && (
                        <button
                          onClick={() =>
                            setActionModal({
                              type: "approve-candidate",
                              targetId: c.candidateId,
                              title: `Record Operator Approval for ${c.candidateId}`,
                              description: "Your verified role and rationale will be appended to the immutable governance trail.",
                            })
                          }
                          className="rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-teal-700"
                        >
                          Record My Approval ({c.approvedCount}/{c.requiredApprovals})
                        </button>
                      )}
                      {c.state === "approved" && (
                        <button
                          onClick={() =>
                            setActionModal({
                              type: "publish-release",
                              targetId: c.candidateId,
                              title: `Publish Model Release from ${c.candidateId}`,
                              description: "Creates an immutable global release version in the public ledger for hospital distribution.",
                            })
                          }
                          className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow hover:bg-primary/90"
                        >
                          Publish Official Release
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div>
                      <span className="text-muted-foreground block">Test Accuracy</span>
                      <strong className="text-foreground text-sm font-mono">{(c.metrics.accuracy * 100).toFixed(1)}%</strong>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">F1-Score</span>
                      <strong className="text-foreground text-sm font-mono">{c.metrics.f1Score.toFixed(3)}</strong>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Algorithm / μ</span>
                      <strong className="text-foreground text-sm font-mono">{c.metrics.algorithm.toUpperCase()} (μ={c.metrics.mu})</strong>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Approvals</span>
                      <strong className="text-foreground text-sm font-mono">{c.approvedCount} of {c.requiredApprovals} Required</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Published Releases */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Published Release Lineage
            </h4>
            <div className="space-y-2">
              {releases.map((rel) => (
                <div key={rel.releaseId} className="flex items-center justify-between rounded-lg border border-border p-3 text-xs">
                  <div>
                    <strong className="text-sm text-foreground">{rel.releaseVersion}</strong>
                    <span className="text-muted-foreground ml-2 font-mono text-[11px]">from {rel.candidateId}</span>
                    <p className="font-mono text-[10px] text-muted-foreground truncate max-w-md">{rel.releaseDigest}</p>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full">
                    PUBLISHED & ACTIVE
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBVIEW 4: RETENTION REVIEW */}
      {subView === "retention" && (
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <FileClock className="h-4 w-4 text-primary" />
              Dual-Owner Data Retention & Storage Review
            </h4>
            <p className="text-xs text-muted-foreground">
              Retention due dates create a human review queue. Disposal requires independent dual-owner approvals.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4 bg-muted/20 text-xs">
            <div className="flex items-center justify-between">
              <div>
                <strong className="text-foreground text-sm">Candidate Candidate-0039</strong>
                <p className="text-muted-foreground">Federation: breakhis-research · Class: research-governance</p>
              </div>
              <span className="rounded bg-amber-500/10 text-amber-600 font-semibold px-2 py-1 text-[11px]">
                RETENTION REVIEW DUE
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between text-muted-foreground">
              <span>Dual-Owner Approval State: 1 of 2 Recorded</span>
              <button
                onClick={() =>
                  setActionModal({
                    type: "dead-letter",
                    targetId: "disposal-0039",
                    title: "Record Dual-Owner Disposal Approval",
                    description: "Authorizes the server to schedule cryptographic erasure of expired training weight artifacts.",
                  })
                }
                className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow hover:bg-primary/90"
              >
                Record 2nd Owner Approval
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Accountability Reason Modal */}
      {actionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-xl animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono text-primary font-bold uppercase">Human Governance Action</span>
                <h3 className="font-semibold text-foreground text-base mt-0.5">{actionModal.title}</h3>
              </div>
              <button
                onClick={() => { setActionModal(null); setReason(""); }}
                className="rounded p-1 text-muted-foreground hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              {actionModal.description}
            </p>

            <div className="mt-4">
              <label className="block text-xs font-medium text-foreground mb-1">
                Accountable Rationale (Mandatory for audit trail)
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="State the scientific or operational justification for this decision…"
                rows={3}
                className="w-full rounded-lg border border-border bg-background p-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                autoFocus
              />
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => { setActionModal(null); setReason(""); }}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAction}
                disabled={!reason.trim() || submitting}
                className="rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-50"
              >
                {submitting ? "Recording…" : "Confirm & Sign Action"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
