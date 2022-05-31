export const getTermination = (count: number): string => {
  if (String(count).slice(-1) === '1') {
    return 'статья';
  }

  if (count < 5) {
    return 'статьи';
  }

  return 'статей';
};
