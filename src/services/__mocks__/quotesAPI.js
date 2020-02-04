export const getQuote = jest.fn(() => {
  return Promise.resolve({
    quote: 'mock quote',
    character: 'mocking bird',
    image: 'mock image'
  });
});

