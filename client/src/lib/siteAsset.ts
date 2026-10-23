export const SITE_BASE = process.env.GITHUB_PAGES === "true" ? "/san-carlos-adventures" : "";

export function siteAsset(path: string): string {
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  return `${SITE_BASE}/${relativePath}`;
}
