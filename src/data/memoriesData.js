/**
 * Auto-loads images under src/assets/memories/ and src/assets/IEEEEduWeekLaunching/.
 */

import { launchingCeremonyPhotos } from "./launchingCeremonyData";

const albumFromPath = (path) => {
  const lower = path.toLowerCase();
  if (lower.includes("ieeeeduweeklaunching")) return "Launching Ceremony 2026";
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

const folderMemoryImages = Object.entries(memoryModules)
  .filter(([path]) => !path.endsWith("README.md"))
  .map(([path, src], index) => ({
    id: `memory-${index}`,
    src,
    alt: "Challenge Sphere memory",
    album: albumFromPath(path),
  }));

const launchIds = new Set(launchingCeremonyPhotos.map((photo) => photo.src));

export const memoryImages = [
  ...launchingCeremonyPhotos,
  ...folderMemoryImages.filter((photo) => !launchIds.has(photo.src)),
].sort((a, b) => {
  if (a.album === b.album) return 0;
  if (a.album === "Launching Ceremony 2026") return -1;
  if (b.album === "Launching Ceremony 2026") return 1;
  return a.album.localeCompare(b.album);
});

export const memoryAlbums = [...new Set(memoryImages.map((m) => m.album))];

/** Home preview — prioritise launching ceremony photos */
export const getMemoryPreviewImages = (limit) => {
  const launch = memoryImages.filter(
    (img) => img.album === "Launching Ceremony 2026"
  );
  const rest = memoryImages.filter(
    (img) => img.album !== "Launching Ceremony 2026"
  );
  return [...launch, ...rest].slice(0, limit);
};
