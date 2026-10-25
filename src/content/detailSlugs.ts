// A project has a full write-up when src/content/projectDetails/<project id>.json exists.
export const detailSlugs = new Set(
  Object.keys(import.meta.glob('./projectDetails/*.json')).map((path) => path.split('/').pop()!.replace('.json', '')),
)
