export const getQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes/100')
    .then(res => res.json())
    .then(res => res[Math.floor(Math.random() * 101)]);
};

