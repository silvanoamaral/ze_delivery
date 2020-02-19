import addDefaultSrc from './addDefaultSrc'

test('return src image error', () => {
  const resultMocks = addDefaultSrc({ 'target':{'value': '' }})
  expect(resultMocks).toEqual('http://placehold.it/400x400')
})