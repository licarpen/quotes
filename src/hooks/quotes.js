import { useState, useEffect } from 'react';
import { getQuotes } from '../services/quotesAPI';

export const useQuotes = () => {
  // const [quoteObject, setQuoteObject] = useState([]);
  const [url, setUrl] = useState('');
  const [numQuotes, setNumQuotes] = useState(2);
  const [, setCharacter] = useState('');
  const [quotesArray, setQuotesArray] = useState([]);

  useEffect(() => {
    getQuotes(url)
      .then(quotes => setQuotesArray(quotes));
  }, [url]);

  const handleNumQuotesChange = (numQuotes) => {
    //set numQuotes in state for range input
    setNumQuotes(numQuotes);
  };

  const handleCharacterChange = (character) => {
    setCharacter(character);
    setUrl(`http://futuramaapi.herokuapp.com/api/characters/${character}/1`);
  };

  const handleClick = (url) => {
    setUrl(url);
  };

  return { quotesArray, handleClick, handleNumQuotesChange, handleCharacterChange, numQuotes };
};
