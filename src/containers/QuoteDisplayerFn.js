import React, { useState, useEffect } from 'react';
import Quote from '../components/quotes/Quote';
import { getQuote } from '../services/quotesAPI';

const QuoteDisplayerFn = () => {
  const [quoteObject, setQuoteObject] = useState({ quote: '', character: '', image: '' });

  useEffect(() => {
    getQuote()
      .then(quoteObject => setQuoteObject(quoteObject));
  }, []);

  const handleClick = () => {
    return getQuote()
      .then(quoteObject => setQuoteObject(quoteObject));
  };

  return (
    <>
      <Quote { ...quoteObject } onClick={handleClick} />;
    </>
  );
};

export default QuoteDisplayerFn;
