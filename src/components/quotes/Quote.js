import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ quote, character, image, onClick }) => (
  <div className={styles.Quote}>
    <button onClick={onClick}>Get New Quote</button>
    <p>{quote} --{character}</p>
    <img src={image}/>
  </div>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Quote;
