import { Router } from 'express';
import { getPortfolio, getHealth } from '../controllers/portfolio.controller.js';
import { getProjects, getProjectBySlug } from '../controllers/projects.controller.js';

const router = Router();

router.get('/health', getHealth);
router.get('/portfolio', getPortfolio);
router.get('/projects', getProjects);
router.get('/projects/:slug', getProjectBySlug);

export default router;
