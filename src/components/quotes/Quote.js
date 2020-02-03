import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, character, image }) => (
  <>
    <p>{quote} --{character}</p>
    <img src={image}/>
  </>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;
