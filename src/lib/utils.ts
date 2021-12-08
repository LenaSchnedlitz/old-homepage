export const stripTags = (html: string): string => {
  if (!html) {
    return 'Ooops!';
  }
  return html.replace(/<.*\/>/, '').replace(/<.*>/, '');
};
