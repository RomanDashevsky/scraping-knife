import * as $ from 'jquery';
import * as _ from 'lodash';
import unique from 'unique-selector';
import getSnippetFromElement from 'snippet-from-dom-element';
import { LoDashStatic } from 'lodash';
import * as xPathToCss from 'xpath-to-css';

declare global {
  interface Window {
    SK: {
      $: () => void;
      _: LoDashStatic;
      utils: {
        getUniqueSelector: (element: Element) => string;
        getSnippetFromElement: (element: Element, innerContentLength: number) => string;
        getSelectorFromXPath: (xPath: string) => string;
      };
    };
  }
}

const initHtmlElementsUtils = (): void => {
  window.SK = {
    ...(window.SK ? window.SK : {}),
    $,
    _,
    utils: {
      getUniqueSelector: unique,
      getSnippetFromElement: getSnippetFromElement,
      getSelectorFromXPath: xPathToCss,
    }
  };
};

initHtmlElementsUtils();

export default initHtmlElementsUtils;
