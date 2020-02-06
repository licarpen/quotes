import React from 'react';
import styles from './Quote.css';
import { useQuotes } from '../../hooks/quotes';

const Quote = () => {
  const { handleClick, handleNumQuotesChange, handleCharacterChange, numQuotes, quotesArray } = useQuotes();

  const characters = ['Get Quote by Character', 'Bender', 'Fry', 'Leela', 'Professor Farnsworth', 'Amy', 'Zapp Brannigan', 'Lurr', 'Dr Zoidberg', 'Linda the reporter', 'Bob Barker', 'Hermes', 'Morgan Proctor', 'Mom', 'Robot Mob', 'Giant', 'Kif', 'Don bot'];

  return (

    <div className={styles.Quote}>
      <button onClick={() => handleClick('http://futuramaapi.herokuapp.com/api/quotes/1')}>Get Random Quote</button>

      <select onChange={({ target }) => handleCharacterChange(target.value)} name="character" >
        {characters.map(character => <option key={character} value={character.replace(/ /g, '-')}>{character}</option>)}
      </select>  
      <div>
        <button onClick={() => handleClick(`http://futuramaapi.herokuapp.com/api/quotes/${numQuotes}`)}>Get {numQuotes} Quotes</button>
        <input className='numQuotes' onChange={({ target }) => handleNumQuotesChange(parseInt(target.value))} type='range' min='2' max='100' value={numQuotes}></input>
      </div>
      

      { quotesArray.length ? 
        quotesArray.map(({ quote, character, image }) => {
          return <>
            <p>&quot;{quote} --{character}&quot;</p>
            <img src={image}/>
          </>;}) : null
      }
    </div>      
    


  );
};

export default Quote;
