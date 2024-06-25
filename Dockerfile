# Stage 1: Install dependencies and generate Prisma client
FROM node:21-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json (or npm-shrinkwrap.json if present)
COPY package.json package-lock.json* ./

# Install dependencies using npm
RUN npm install

# Copy Prisma schema
COPY prisma ./prisma

# Generate Prisma client
RUN npx prisma generate

# Copy source code and configuration files
COPY tsconfig.json ./
COPY src ./src
RUN npm run proto:gen

# Build TypeScript files
RUN npm run build

# Stage 2: Run
FROM node:21-alpine

WORKDIR /app

# Copy dependencies and compiled code from previous stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/prisma ./prisma

# Default command
CMD ["npm", "start"]
