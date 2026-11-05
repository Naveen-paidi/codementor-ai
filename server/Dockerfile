
FROM node:24-trixie-slim

# Install Java 21, Python 3 and C/C++ compilers
RUN apt-get update && apt-get install -y --no-install-recommends \
    openjdk-21-jdk-headless \
    python3 \
    python-is-python3 \
    gcc \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install backend dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy backend source and curriculum files
COPY . .

# Verify compiler installations during image build
RUN node --version \
    && java -version \
    && javac -version \
    && python --version \
    && gcc --version \
    && g++ --version

ENV NODE_ENV=production

EXPOSE 5000

CMD ["npm", "start"]
