import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, character, image, onClick }) => (
  <>
    <p>{quote} --{character}</p>
    <img src={image}/>
    <button onClick={onClick}>Get New Quote</button>
  </>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Quote;
