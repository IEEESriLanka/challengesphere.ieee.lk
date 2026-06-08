/**
 * Auto-loads every image under src/assets/memories/ (any subfolder).
 * Add new photos to that folder — no code changes needed beyond rebuild.
 */

const albumFromPath = (path) => {
  const lower = path.toLowerCase();
  if (lower.includes("award-ceremony")) return "Award Ceremony";
  if (lower.includes("elevate-session")) return "Elevate Session";
  if (lower.includes("_general")) return "General";
  const parts = path.split("/");
  const folder = parts[parts.length - 2];
  if (folder && folder !== "memories") {
    return folder
      .split(/[-_]/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  return "Memories";
};

const memoryModules = import.meta.glob(
  "../assets/memories/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
);

export const memoryImages = Object.entries(memoryModules)
  .filter(([path]) => !path.endsWith("README.md"))
  .map(([path, src], index) => ({
    id: `memory-${index}`,
    src,
    alt: "Challenge Sphere memory",
    album: albumFromPath(path),
  }))
  .sort((a, b) => a.album.localeCompare(b.album));

export const memoryAlbums = [...new Set(memoryImages.map((m) => m.album))];
