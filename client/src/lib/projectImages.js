// Pengaturan Path Gambar Proyek Manual (Explicit Mapping)
// Anda bisa langsung mengganti path import di bawah ini jika ingin mengganti gambar proyek:

import myaNavigatorCover from '../assets/projects/mya-navigator/transkarta.png';
import scanTranslatorCover from '../assets/projects/scan-translator/comic-translator.png';
import predictiveLeadScoringCover from '../assets/projects/predictive-lead-scoring/banking-sales.png';
import gradehubCover from '../assets/projects/gradehub/gradehub.jpeg';

export const projectCovers = {
  // slug proyek : file gambar hasil import
  'mya-navigator': myaNavigatorCover,
  'scan-translator': scanTranslatorCover,
  'predictive-lead-scoring': predictiveLeadScoringCover,
  'gradehub': gradehubCover,
};

export function getProjectCover(slug) {
  return projectCovers[slug] || null;
}
