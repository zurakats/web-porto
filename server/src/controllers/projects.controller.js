import { portfolioService } from '../services/portfolio.service.js';

export async function getProjects(req, res, next) {
  try {
    const enrich = req.query.enrich !== 'false';
    const projects = await portfolioService.getProjects(enrich);
    res.json({
      success: true,
      data: projects,
    });
  } catch (err) {
    next(err);
  }
}

export async function getProjectBySlug(req, res, next) {
  try {
    const { slug } = req.params;
    const projects = await portfolioService.getProjects(true);
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found',
      });
    }

    res.json({
      success: true,
      data: project,
    });
  } catch (err) {
    next(err);
  }
}
