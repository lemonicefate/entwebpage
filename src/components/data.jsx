function computeFeed() {
  const CATEGORIES = window.CATEGORIES || [];
  const all = CATEGORIES.flatMap(cat =>
    (cat.topics || []).map(t => ({
      ...t, tag: cat.name, categoryId: cat.id, accent: cat.tone,
    }))
  ).sort((a, b) => (b.lastUpdated || '').localeCompare(a.lastUpdated || ''));
  return { FEATURED: all.slice(0, 3), LATEST: all.slice(3, 9) };
}
const { FEATURED, LATEST } = computeFeed();
Object.assign(window, { __data: { FEATURED, LATEST } });
