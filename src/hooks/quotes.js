import { useState, useEffect } from 'react';
import { getQuote } from '../services/quotesAPI';

export const useQuote = () => {
  const [quoteObject, setQuoteObject] = useState([]);

  useEffect(() => {
    getQuote()
      .then(quoteObject => setQuoteObject(quoteObject));
  }, []);

  const handleClick = () => {
    return getQuote()
      .then(quoteObject => setQuoteObject(quoteObject));
  };

  return quoteObject;
};
