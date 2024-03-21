FROM mcr.microsoft.com/playwright:v1.39.0-jammy

COPY . /fair
WORKDIR /fair

ARG CONGSTAR_GITLAB_NPM_TOKEN
ARG CONGSTAR_GITLAB_FAIR_NPM_TOKEN


# init pnpm
RUN corepack enable && \
    corepack prepare pnpm@8.5.1 --activate && \
    node --max-old-space-size=8192 && \
    pnpm config set store-dir .pnpm-store && \
    rm -Rf node_modules && \
    pnpm install

WORKDIR /fair/packages/react
CMD npx playwright test -c ./playwright/environments/playwright.config.local.os-agnostic.ts
