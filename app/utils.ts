export const decodeFormat = (str?: unknown) => {
  if (!str) {
    return null;
  }
  if (typeof str !== 'string') {
    return str;
  }
  return str.replace(/<.+?>(.+?)<\/>/g, '<$1>');
};
