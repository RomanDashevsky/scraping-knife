import * as $ from 'jquery';
import * as _ from 'lodash';
import unique from 'unique-selector';
import getSnippetFromElement from 'snippet-from-dom-element';
import { LoDashStatic } from 'lodash'

declare global {
  interface Window {
    SK: {
      $: () => void;
      _: LoDashStatic;
      utils: {
        getUniqueSelector: (element: Element) => string;
        getSnippetFromElement: (element: Element, innerContentLength: number) => string;
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
    }
  };
};

initHtmlElementsUtils();