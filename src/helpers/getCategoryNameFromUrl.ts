export const getCategoryNameFromUrl = (url: string): string | null => {
  const params = new URLSearchParams(url.split('?')[1]);
  return params.get('filters[category][name][$eq]');
}