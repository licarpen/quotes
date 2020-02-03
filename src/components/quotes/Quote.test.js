import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Quote quote='test quote' character='test character' image='test image' onClick={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
