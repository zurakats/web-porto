import { createRequire } from 'module';
import { githubService } from './github.service.js';

const require = createRequire(import.meta.url);

const profileData = require('../data/profile.json');
const projectsData = require('../data/projects.json');
const experienceData = require('../data/experience.json');
const educationData = require('../data/education.json');
const skillsData = require('../data/skills.json');
const certificationsData = require('../data/certifications.json');

class PortfolioService {
  async getProfile() {
    return JSON.parse(JSON.stringify(profileData));
  }

  async getRawProjects() {
    return JSON.parse(JSON.stringify(projectsData));
  }

  async getProjects(enrichWithGitHub = true) {
    const rawProjects = await this.getRawProjects();
    if (!enrichWithGitHub) {
      return rawProjects;
    }
    return githubService.enrichProjects(rawProjects);
  }

  async getExperience() {
    return JSON.parse(JSON.stringify(experienceData));
  }

  async getEducation() {
    return JSON.parse(JSON.stringify(educationData));
  }

  async getSkills() {
    return JSON.parse(JSON.stringify(skillsData));
  }

  async getCertifications() {
    return JSON.parse(JSON.stringify(certificationsData));
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
    };
  }
}

export const portfolioService = new PortfolioService();
