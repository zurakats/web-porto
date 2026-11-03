import { portfolioService } from '../services/portfolio.service.js';

export async function getPortfolio(req, res, next) {
  try {
    const portfolio = await portfolioService.getFullPortfolio();
    res.json({
      success: true,
      data: portfolio,
    });
  } catch (err) {
    next(err);
  }
}

export async function getHealth(req, res) {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}
