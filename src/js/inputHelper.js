import { INPUT_NODE, QUERY_URL, SORT_SETTINGS, QUERY_DELAY } from './settings.js'
import { debounce } from './helper.js';

const getJsonItems = debounce((inputResultsObj, query) => {
  fetch(new URL(QUERY_URL + query + SORT_SETTINGS))
    .then(response => response.json())
    .then(json => inputResultsObj.setData(json.items))
    .catch(() => inputResultsObj.clear());
}, QUERY_DELAY);

export const addInputListener = inputResults => {
  INPUT_NODE.addEventListener('input', () => {
    let inputValue = INPUT_NODE.value.trim();

    if (inputValue.length)
      getJsonItems(inputResults, encodeURIComponent(inputValue));
    else
      inputResults.clear();
  });
};
