import React, { useState, useEffect } from "react";
import {
  Link2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Database,
  Blocks,
  ArrowUpRight,
  HardDrive,
  Copy,
  Check,
  RefreshCw,
  Send,
  Lock,
} from "lucide-react";

interface GlobalModelEntry {
  version: number;
  modelWeightsCID: string;
  modelHash: string;
  timestamp: string;
  totalSamples: number;
  accuracy: number;
  aucScore: number;
  sensitivity: number;
  specificity: number;
  contributorCount: number;
  parentVersion: number;
  blockNumber: number;
  txHash: string;
}

interface HospitalContributor {
  address: string;
  name: string;
  region: string;
  totalContributions: number;
  totalSamplesContributed: number;
  isActive: boolean;
}

interface BlockchainData {
  network: string;
  chainId: number;
  contractName: string;
  contractAddress: string;
  deploymentBlock: number;
  deploymentDate: string;
  etherscanUrl: string;
  oracleAddress: string;
  framework: string;
  globalModels: GlobalModelEntry[];
  contributingHospitals: HospitalContributor[];
}

export const BlockchainRegistryView: React.FC = () => {
  const [data, setData] = useState<BlockchainData | null>(null);
  const [loading, setLoading] = useState(true);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [submittingHospital, setSubmittingHospital] = useState<string | null>(null);
  const [txReceipt, setTxReceipt] = useState<{
    txHash: string;
    blockNumber: number;
    ipfsCid: string;
  } | null>(null);

  const fetchRegistry = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/demo/blockchain/registry");
      const json = await res.json();
      if (json.success) {
        setData(json);
      }
    } catch (e) {
      console.error("Failed fetching blockchain registry:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistry();
  }, []);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmitOnChainUpdate = async (hospital: HospitalContributor) => {
    setSubmittingHospital(hospital.address);
    setTxReceipt(null);
    try {
      const res = await fetch("/api/demo/blockchain/submit-update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hospitalId: hospital.name,
          modelHash: "0x" + Math.random().toString(16).slice(2, 66),
          sampleCount: hospital.totalSamplesContributed,
        }),
      });
      const receipt = await res.json();
      if (receipt.success) {
        setTxReceipt(receipt);
      }
    } catch (err) {
      console.error("Transaction error:", err);
    } finally {
      setSubmittingHospital(null);
    }
  };

  if (loading && !data) {
    return (
      <div className="flex items-center justify-center p-12 text-muted-foreground">
        <RefreshCw className="h-6 w-6 animate-spin text-primary mr-2" />
        Loading Sepolia smart contract state…
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner - Sepolia Smart Contract Verification */}
      <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-background p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <Blocks className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                Decentralized Coordination & Governance
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Sepolia Active
              </span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Ethereum Smart Contract: {data.contractName}
            </h2>
            <p className="text-xs text-muted-foreground max-w-2xl">
              Model weight updates and aggregation receipts are immutably registered on-chain via Solidity smart contracts, ensuring verifiable model provenance and cryptographic zero-knowledge bounds.
            </p>
          </div>

          <a
            href={data.etherscanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow hover:bg-indigo-700 transition"
          >
            <span>View on Sepolia Etherscan</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Contract Key Specs */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border/60">
          <div className="rounded-lg bg-background/60 p-2.5 border border-border/40 font-mono text-[11px]">
            <span className="text-[10px] text-muted-foreground uppercase block">Contract Address</span>
            <div className="flex items-center justify-between mt-0.5">
              <span className="truncate font-semibold text-foreground" title={data.contractAddress}>
                {data.contractAddress.slice(0, 10)}…{data.contractAddress.slice(-6)}
              </span>
              <button
                onClick={() => handleCopy(data.contractAddress, "contract")}
                className="text-muted-foreground hover:text-foreground"
              >
                {copiedText === "contract" ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
              </button>
            </div>
          </div>

          <div className="rounded-lg bg-background/60 p-2.5 border border-border/40 font-mono text-[11px]">
            <span className="text-[10px] text-muted-foreground uppercase block">Deployment Block</span>
            <span className="font-semibold text-foreground mt-0.5 block">#{data.deploymentBlock}</span>
          </div>

          <div className="rounded-lg bg-background/60 p-2.5 border border-border/40 font-mono text-[11px]">
            <span className="text-[10px] text-muted-foreground uppercase block">FedProx Oracle</span>
            <span className="truncate font-semibold text-foreground mt-0.5 block" title={data.oracleAddress}>
              {data.oracleAddress.slice(0, 8)}…{data.oracleAddress.slice(-4)}
            </span>
          </div>

          <div className="rounded-lg bg-background/60 p-2.5 border border-border/40 font-mono text-[11px]">
            <span className="text-[10px] text-muted-foreground uppercase block">Decentralized Storage</span>
            <span className="font-semibold text-foreground mt-0.5 block">IPFS Pinned CIDs</span>
          </div>
        </div>
      </div>

      {/* Transaction Success Alert */}
      {txReceipt && (
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/30 p-4 animate-in fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">On-Chain Update Confirmed</h4>
                <p className="text-xs text-muted-foreground">
                  Transaction mined in Sepolia block #{txReceipt.blockNumber} with IPFS CID digest.
                </p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
              CONFIRMED
            </span>
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-background/80 p-2.5 rounded-lg border border-border/60">
            <div>
              <span className="text-muted-foreground">Tx Hash: </span>
              <span className="text-foreground truncate block">{txReceipt.txHash}</span>
            </div>
            <div>
              <span className="text-muted-foreground">IPFS CID: </span>
              <span className="text-foreground truncate block">{txReceipt.ipfsCid}</span>
            </div>
          </div>
        </div>
      )}

      {/* Two Columns: Registered Global Models & Enclave Participants */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Global Models on IPFS & Ethereum (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-primary" />
              On-Chain Global Model Lineage (IPFS Registry)
            </h3>
            <span className="text-xs font-mono text-muted-foreground">
              {data.globalModels.length} Versions Pinned
            </span>
          </div>

          <div className="space-y-3">
            {data.globalModels.map((m) => (
              <div
                key={m.version}
                className="rounded-xl border border-border bg-card p-4 shadow-sm space-y-3 hover:border-primary/40 transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-mono font-bold text-primary">
                        v{m.version}.0
                      </span>
                      <h4 className="text-sm font-semibold text-foreground">
                        {m.version === 2 ? "FedProx Proximal Aggregated Global Model" : "Initial Backbone Seed Weights"}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Trained over {m.totalSamples.toLocaleString()} specimens across {m.contributorCount} hospital nodes
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {(m.accuracy / 100).toFixed(2)}% Acc
                    </span>
                    <span className="block text-[11px] text-muted-foreground font-mono">
                      AUC: {(m.aucScore / 10000).toFixed(4)}
                    </span>
                  </div>
                </div>

                {/* Lineage & IPFS CID */}
                <div className="rounded-lg bg-muted/40 p-2.5 font-mono text-xs space-y-1.5 border border-border/60">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">IPFS Model Weights CID:</span>
                    <span className="text-foreground font-semibold truncate max-w-[240px]" title={m.modelWeightsCID}>
                      {m.modelWeightsCID}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">SHA-256 Model Hash:</span>
                    <span className="text-foreground truncate max-w-[240px]" title={m.modelHash}>
                      {m.modelHash.slice(0, 20)}…
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground">Sepolia Block / Tx:</span>
                    <span className="text-indigo-600 dark:text-indigo-400">
                      #{m.blockNumber} ({m.txHash.slice(0, 10)}…)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contributing Hospital Enclaves on-chain (1 col) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Verified Hospital Signers
            </h3>
          </div>

          <div className="space-y-3">
            {data.contributingHospitals.map((h, i) => (
              <div
                key={h.address}
                className="rounded-xl border border-border bg-card p-4 shadow-sm space-y-2.5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="text-xs font-semibold text-foreground">{h.name}</h5>
                    <span className="text-[11px] text-muted-foreground">{h.region}</span>
                  </div>
                  <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-600">
                    ACTIVE
                  </span>
                </div>

                <div className="text-[11px] font-mono text-muted-foreground bg-muted/40 p-2 rounded border border-border/60">
                  <div className="flex justify-between">
                    <span>Signer:</span>
                    <span className="text-foreground">{h.address.slice(0, 8)}…{h.address.slice(-4)}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Contributed Samples:</span>
                    <span className="text-foreground font-semibold">{h.totalSamplesContributed.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleSubmitOnChainUpdate(h)}
                  disabled={submittingHospital === h.address}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition disabled:opacity-50"
                >
                  {submittingHospital === h.address ? (
                    <>
                      <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                      Signing Sepolia Tx…
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      Sign & Submit On-Chain Update
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
