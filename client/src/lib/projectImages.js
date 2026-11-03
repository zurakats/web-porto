// Automatic project image discovery using Vite's import.meta.glob
const coverModules = import.meta.glob(
  '../assets/projects/*/cover.{png,jpg,jpeg,webp,avif,svg}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
);

// Map slug -> cover URL
export const projectCovers = Object.fromEntries(
  Object.entries(coverModules).map(([filePath, imageUrl]) => {
    const parts = filePath.replace(/\\/g, '/').split('/');
    const slug = parts[parts.length - 2];
    return [slug, imageUrl];
  })
);

export function getProjectCover(slug) {
  return projectCovers[slug] || null;
}
