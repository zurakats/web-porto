import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  githubApiBaseUrl: process.env.GITHUB_API_BASE_URL || 'https://api.github.com',
  githubToken: process.env.GITHUB_TOKEN || '',
  cacheTtlMs: parseInt(process.env.CACHE_TTL_MS || String(6 * 60 * 60 * 1000), 10), // 6 hours
  requestTimeoutMs: parseInt(process.env.REQUEST_TIMEOUT_MS || '5000', 10),
};
