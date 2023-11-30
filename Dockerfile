FROM node:15.12-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:15.12-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /src/app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

FROM node:15.12-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /src/app/.next ./.next
COPY --from=builder /src/app/node_modules ./node_modules
COPY --from=builder /src/app/package.json ./package.json

USER nextjs

EXPOSE 80

ENV PORT 80

CMD ["node_modules/.bin/next", "start"]
