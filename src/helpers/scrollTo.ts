export const scrollTo = (elemPosition: number) => {
  const topOffset = 0;
  const offsetPosition = elemPosition - topOffset;
  window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
};
