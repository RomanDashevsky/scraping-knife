import * as $ from 'jquery';
import * as _ from 'lodash';
import unique from 'unique-selector';
import getSnippetFromElement from 'snippet-from-dom-element';

declare global {
  interface Window {
    SK: {
      $: any,
      _: any,
      utils: {
        getUniqueSelector: (element: Element) => string;
        getSnippetFromElement: (element: Element, innerContentLength: number) => string;
      }
    };
  }
}

const initHtmlElementsUtils = () => {
  window.SK = {
    ...window.SK,
    $,
    _,
    utils: {
      getUniqueSelector: unique,
      getSnippetFromElement: getSnippetFromElement,
    }
  };
};

initHtmlElementsUtils();