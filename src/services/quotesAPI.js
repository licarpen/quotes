export const getQuotes = (url) => {
  return fetch(url)
    .then(res => res.json());
};
