# 1단계: React 빌드
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

# 2단계: Express 서버로 빌드된 React 서빙
FROM node:20-alpine AS server

WORKDIR /app
COPY --from=builder /app/build ./build
COPY server.js ./
COPY package*.json ./

RUN npm install --omit=dev

EXPOSE 80
CMD ["node", "server.js"]
