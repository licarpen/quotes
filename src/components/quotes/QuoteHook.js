import React from 'react';
import styles from './Quote.css';
import { useQuote } from '../../hooks/quotes';

const Quote = () => {
  const { handleClick, quote, character, image } = useQuote();

  return (
    <div className={styles.Quote}>
      <button onClick={handleClick}>Get New Quote</button>
      <p>&quot;{quote} --{character}&quot;</p>
      <img src={image}/>
    </div>
  );
};

export default Quote;
