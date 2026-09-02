export interface HospitalNode {
  id: string;
  name: string;
  location: string;
  status: "online" | "training" | "syncing" | "idle";
  specimens: {
    total: number;
    benign: number;
    malignant: number;
  };
  privacyBoundary: {
    rawImagesRemainLocal: boolean;
    patientIdentifiersLeaveNode: boolean;
    outboundTransmissionBytes: number;
    firewallStatus: "enforced" | "degraded";
  };
  lastExportedManifest?: {
    manifestSha256: string;
    sampleCount: number;
    algorithm: string;
    exportedAt: string;
  };
}

export type RoundState =
  | "draft"
  | "open"
  | "collecting"
  | "validating"
  | "aggregating"
  | "awaiting-approval"
  | "published"
  | "closed"
  | "failed";

export interface CandidateModel {
  candidateId: string;
  federationId: string;
  roundId: string;
  protocolVersionId: string;
  state: "pending_approval" | "approved" | "rejected";
  candidateDigest: string;
  retentionClass: string;
  retentionDueAt: string;
  requiredEvidenceKinds: readonly string[];
  evidenceKinds: readonly string[];
  requiredApprovals: number;
  approvedCount: number;
  createdAt: string;
  metrics: {
    accuracy: number;
    f1Score: number;
    sensitivity: number;
    specificity: number;
    algorithm: "fedavg" | "fedprox";
    mu: number;
    rounds: number;
  };
  approvals: Array<{ approverRole: string; reason: string; approvedAt: string }>;
}

export interface ModelRelease {
  releaseId: string;
  federationId: string;
  candidateId: string;
  releaseVersion: string;
  state: "published" | "active" | "rolled_back";
  releaseDigest: string;
  publishedAt: string;
  publishedBy: string;
}

export interface OutboxEvent {
  eventId: string;
  aggregateType: string;
  aggregateId: string;
  eventType: string;
  correlationId: string;
  deliveryState: "pending" | "published" | "dead_lettered";
  publishAttempts: number;
  lastPublishError?: string;
  availableAt: string;
  publishedAt?: string;
  deadLetteredAt?: string;
  accountableReason?: string;
}

export type DisposalState =
  | "requested"
  | "approved_once"
  | "authorized"
  | "executing"
  | "recovery_pending_verification"
  | "verification_object_absent"
  | "verification_object_present"
  | "verification_provider_unavailable"
  | "disposed"
  | "failed"
  | "cancelled";
