import initHtmlElementsUtils from '../src';

describe('SK init test', () => {
  beforeAll(() => {
    initHtmlElementsUtils();
  });

  it('window should  has SK', () => {
    expect(window.SK).not.toBeUndefined();
  });

  it('SK should has jquery', () => {
    expect(window.SK.$).not.toBeUndefined();
  });

  it('SK should has lodash', () => {
    expect(window.SK._).not.toBeUndefined();
  });

  it('SK should has utils', () => {
    expect(window.SK.utils).not.toBeUndefined();
  });

  it('SK.utils should has getUniqueSelector', () => {
    expect(window.SK.utils.getUniqueSelector).not.toBeUndefined();
  });

  it('SK.utils should has getSnippetFromElement', () => {
    expect(window.SK.utils.getSnippetFromElement).not.toBeUndefined();
  });

  it('SK.utils should has getSelectorFromXPath', () => {
    expect(window.SK.utils.getSelectorFromXPath).not.toBeUndefined();
  });
});
