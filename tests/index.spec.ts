
describe('Check get snippet from dom element', () => {
  beforeAll(() => {
    document.body.innerHTML = testBody;
  });

  it('Should return snippet body with ... inner text', () => {
    const element = document.querySelector('body');
    const snippet = getSnippetFromDomElement(element);
    expect(snippet).toBe('<body>...</body>');
  });
});