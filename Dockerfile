# ==============================================================================
# Multi-Stage Lightweight Dockerfile for Federated Aggregator Docs & Cockpit
# Designed for 1GB VPS deployments (< 50MB Runtime RAM)
# ==============================================================================

# --- Stage 1: Build ---
FROM node:20-alpine AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate

COPY package.json pnpm-lock.yaml ./
COPY patches/ ./patches/
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# --- Stage 2: Ultra-Lightweight Production Runner ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_OPTIONS="--max-old-space-size=96"

COPY package.json pnpm-lock.yaml ./
COPY patches/ ./patches/
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate && pnpm install --prod --frozen-lockfile

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]
