const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD ? '/api' : 'http://localhost:5000/api');

export async function fetchPortfolio() {
  try {
    const res = await fetch(`${API_BASE_URL}/portfolio`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`API returned HTTP ${res.status}`);
    }

    const payload = await res.json();
    if (!payload.success || !payload.data) {
      throw new Error('Malformed API payload');
    }

    return {
      data: payload.data,
      isLive: true,
      error: null,
    };
  } catch (err) {
    console.warn(`[API] Failed to fetch portfolio from server (${err.message}). Using local backup data.`);
    // Import fallback data directly
    const [profile, projects, experience, education, skills, certifications] = await Promise.all([
      import('../../../server/src/data/profile.json'),
      import('../../../server/src/data/projects.json'),
      import('../../../server/src/data/experience.json'),
      import('../../../server/src/data/education.json'),
      import('../../../server/src/data/skills.json'),
      import('../../../server/src/data/certifications.json'),
    ]);

    return {
      data: {
        profile: profile.default,
        projects: projects.default,
        experience: experience.default,
        education: education.default,
        skills: skills.default,
        certifications: certifications.default,
      },
      isLive: false,
      error: err.message,
    };
  }
}

export async function checkServerHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    return res.ok;
  } catch {
    return false;
  }
}
