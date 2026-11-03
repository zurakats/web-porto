import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { githubService } from './github.service.js';
import { logger } from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', 'data');

class PortfolioService {
  async readJson(filename) {
    try {
      const filePath = path.join(DATA_DIR, filename);
      const raw = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(raw);
    } catch (err) {
      logger.error(`Error reading ${filename}: ${err.message}`);
      throw err;
    }
  }

  async getProfile() {
    return this.readJson('profile.json');
  }

  async getRawProjects() {
    return this.readJson('projects.json');
  }

  async getProjects(enrichWithGitHub = true) {
    const rawProjects = await this.getRawProjects();
    if (!enrichWithGitHub) {
      return rawProjects;
    }
    return githubService.enrichProjects(rawProjects);
  }

  async getExperience() {
    return this.readJson('experience.json');
  }

  async getEducation() {
    return this.readJson('education.json');
  }

  async getSkills() {
    return this.readJson('skills.json');
  }

  async getCertifications() {
    return this.readJson('certifications.json');
  }

  async getFullPortfolio() {
    const [profile, projects, experience, education, skills, certifications] = await Promise.all([
      this.getProfile(),
      this.getProjects(true),
      this.getExperience(),
      this.getEducation(),
      this.getSkills(),
      this.getCertifications(),
    ]);

    return {
      profile,
      projects,
      experience,
      education,
      skills,
      certifications,
      meta: {
        timestamp: new Date().toISOString(),
        version: '1.0.0',
      },
    };
  }
}

export const portfolioService = new PortfolioService();
