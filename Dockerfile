##### DEPENDENCIES

FROM node:20-alpine AS deps
# Update to use openssl3 and required dependencies
RUN apk add --no-cache \
    libc6-compat \
    openssl \
    # Alternative to openssl1.1-compat:
    libssl3 \
    libcrypto3 \
    # Additional dependencies for Next.js
    ca-certificates \
    && update-ca-certificates \
    # For Rust binaries
    gcompat

WORKDIR /app

# Install dependencies based on the preferred package manager

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

##### BUILDER

FROM node:20-alpine AS builder
ARG NEXT_PUBLIC_CLIENTVAR
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1 \
    OXIDE=1

RUN SKIP_ENV_VALIDATION=1 npm run build


##### RUNNER

FROM gcr.io/distroless/nodejs20-debian12 AS runner

LABEL org.opencontainers.image.source="https://github.com/DaSteff91/website_kite-engineer" \
    org.opencontainers.image.description="Hompage of the Kite-Engineer" \
    org.opencontainers.image.version="dev"


WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["server.js"]