import { INPUT_RESULTS_HTML_ARRAY } from '../../settings.js';

export const isNew = (el, arr) => !arr.some(e => e.toLowerCase() === el);

export const addInHtml = obj =>
  obj.htmlArrayData.map((el, i) => INPUT_RESULTS_HTML_ARRAY[i].textContent = el.name);

export const showHideHtml = obj => {
  const HIDDEN_CLASS = 'input-result--hidden';

  INPUT_RESULTS_HTML_ARRAY.map((el, i) => {
    if (obj.htmlArrayData.length <= i)
      el.classList.add(HIDDEN_CLASS);
    else
      el.classList.remove(HIDDEN_CLASS);
  });
}
