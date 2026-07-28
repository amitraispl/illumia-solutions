# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ENV NODE_ENV=production
RUN npm run build

# Stage 2: Serve static export
FROM node:20-alpine AS runner
WORKDIR /app

RUN npm i -g serve@14 && \
    addgroup -S app && adduser -S app -G app

COPY --from=builder /app/out ./out
USER app

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost:3000/ || exit 1

CMD ["serve", "-s", "out", "-l", "3000"]
