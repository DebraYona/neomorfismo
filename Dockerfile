FROM node:12 as builder
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build && yarn --production

FROM node:12
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]