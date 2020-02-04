import React from 'react';
import { shallow } from 'enzyme';
import QuoteDisplayer from './QuoteDisplayer';
import { getQuote } from '../services/quotesAPI';

jest.mock('../services/quotesAPI.js');

describe('QuoteDisplayer container', () => {
  it('can change the quote displayed', () => {
    const wrapper = shallow(<QuoteDisplayer />);
    const quoteDisplayer = wrapper.instance();

    return quoteDisplayer.handleClick()
      .then(() => {
        expect(getQuote).toHaveBeenCalled();
        expect(wrapper.state('quoteObject')).toEqual({
          quote: 'mock quote',
          character: 'mocking bird',
          image: 'mock image'
        });
      });
  });
});
