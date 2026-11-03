// Dynamic discovery of experience gallery photos in assets/images/experience/
const imageModules = import.meta.glob(
  '../assets/images/experience/*.{jpg,jpeg,png,webp,avif,svg}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
);

const allEntries = Object.entries(imageModules).sort(([a], [b]) => a.localeCompare(b));

// Separate real raster photos (jpg, png, etc.) from default placeholder SVGs
const realPhotos = allEntries
  .filter(([path]) => !path.toLowerCase().endsWith('.svg'))
  .map(([, url]) => url);

const fallbackPhotos = allEntries
  .filter(([path]) => path.toLowerCase().endsWith('.svg'))
  .map(([, url]) => url);

export function getExperienceGallery() {
  if (realPhotos.length >= 4) {
    return realPhotos.slice(0, 4);
  }
  // Fill remaining slots with fallbacks to always guarantee exactly 4 photos
  return [...realPhotos, ...fallbackPhotos].slice(0, 4);
}
