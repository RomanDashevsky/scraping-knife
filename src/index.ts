import unique from 'unique-selector';
import * as $ from 'jquery';
import * as _ from 'lodash';

declare global {
  interface Window {
    SK: {
      $: any,
      _: any,
      utils: {
        getUniqueSelector: (el: Element) => string;
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
    }
  };
};

initHtmlElementsUtils();