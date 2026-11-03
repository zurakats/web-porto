import { config } from '../config/env.js';
import { logger } from '../utils/logger.js';

class GitHubService {
  constructor() {
    this.cache = new Map(); // key -> { data, expiresAt }
  }

  getCacheKey(owner, repo) {
    return `${owner}/${repo}`.toLowerCase();
  }

  async fetchRepoMetadata(owner, repo) {
    const key = this.getCacheKey(owner, repo);
    const now = Date.now();

    // Check in-memory cache
    if (this.cache.has(key)) {
      const entry = this.cache.get(key);
      if (entry.expiresAt > now) {
        return entry.data;
      }
    }

    const url = `${config.githubApiBaseUrl}/repos/${owner}/${repo}`;
    const headers = {
      'User-Agent': 'Edra-Portfolio-Service',
      'Accept': 'application/vnd.github.v3+json',
    };

    if (config.githubToken) {
      headers['Authorization'] = `token ${config.githubToken}`;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), config.requestTimeoutMs);

      const response = await fetch(url, {
        headers,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        logger.warn(`GitHub API response ${response.status} for ${owner}/${repo}`);
        // If cached (even expired), fallback to it
        if (this.cache.has(key)) {
          return this.cache.get(key).data;
        }
        return {
          isAccessible: false,
          statusCode: response.status,
          error: response.status === 404 ? 'Repository not found or private' : 'GitHub API unavailable',
        };
      }

      const repoData = await response.json();
      const metadata = {
        isAccessible: true,
        htmlUrl: repoData.html_url,
        description: repoData.description,
        language: repoData.language,
        topics: repoData.topics || [],
        stargazersCount: repoData.stargazers_count,
        forksCount: repoData.forks_count,
        updatedAt: repoData.updated_at,
        pushedAt: repoData.pushed_at,
        defaultBranch: repoData.default_branch,
      };

      // Store in cache
      this.cache.set(key, {
        data: metadata,
        expiresAt: now + config.cacheTtlMs,
      });

      return metadata;
    } catch (err) {
      logger.error(`Failed to fetch repo ${owner}/${repo}: ${err.message}`);
      if (this.cache.has(key)) {
        return this.cache.get(key).data;
      }
      return {
        isAccessible: false,
        error: err.name === 'AbortError' ? 'Request timed out' : 'Network error',
      };
    }
  }

  async enrichProject(project) {
    if (!project.repository || !project.repository.owner || !project.repository.name) {
      return project;
    }

    // If marked inaccessible in curated data, don't ping or handle gracefully
    if (project.repository.isAccessible === false) {
      return {
        ...project,
        repository: {
          ...project.repository,
          enriched: false,
        },
      };
    }

    const repoMeta = await this.fetchRepoMetadata(
      project.repository.owner,
      project.repository.name
    );

    return {
      ...project,
      repository: {
        ...project.repository,
        url: repoMeta.htmlUrl || project.repository.url,
        isAccessible: repoMeta.isAccessible ?? true,
        language: repoMeta.language,
        topics: repoMeta.topics,
        stargazersCount: repoMeta.stargazersCount,
        updatedAt: repoMeta.updatedAt,
        enriched: repoMeta.isAccessible === true,
      },
    };
  }

  async enrichProjects(projects) {
    return Promise.all(projects.map((project) => this.enrichProject(project)));
  }
}

export const githubService = new GitHubService();
