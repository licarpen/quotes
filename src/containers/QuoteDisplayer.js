import React, { Component } from 'react';
import Quote from '../components/quotes/Quote';
import { getQuote } from '../services/quotesAPI';

export default class QuoteDisplayer extends Component {
  state = {
    quoteObject: {
      quote: '',
      character: '',
      image: ''
    }
  }

  handleClick = () => {
    return getQuote()
      .then(quote => this.setState({ quoteObject: quote }));
  }

  render() {
    return (
      <>
        <Quote {...this.state.quoteObject} onClick={this.handleClick} /> 
      </>
    );
  }
}
