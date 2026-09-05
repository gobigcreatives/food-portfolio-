// Auto-loads every image placed under src/assets/projects/<slug>/ at build
// time (Vite import.meta.glob). Drop a project's photos into its folder and
// they appear on that project's page automatically — no code changes needed.
const modules = import.meta.glob(
  "../assets/projects/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, import: "default" }
);

// Group image URLs by the project slug (the folder name).
const bySlug = {};
for (const [path, url] of Object.entries(modules)) {
  const match = path.match(/\/projects\/([^/]+)\//);
  if (!match) continue;
  const slug = match[1];
  (bySlug[slug] ||= []).push({ path, url });
}
// Sort within each project by filename so ordering is predictable.
for (const slug of Object.keys(bySlug)) {
  bySlug[slug].sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true }));
}

export function getProjectImages(slug) {
  return (bySlug[slug] || []).map((e) => e.url);
}
