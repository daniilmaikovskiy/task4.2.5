import { QUERY_URL, SORT_SETTINGS, INPUT_NODE } from './settings.js';
import { debounce } from './helper.js';

const createInputURL = query => new URL(QUERY_URL + query + SORT_SETTINGS);

const getJsonItems = debounce((inputResultsObj, query) => {
  fetch(createInputURL(query))
      .then(response => response.json())
      .then(json => inputResultsObj.setData(json.items))
      .catch(() => inputResultsObj.clear());
}, 200);

export const addInputListener = inputResults => {

  INPUT_NODE.addEventListener('input', () => {
    let inputValue = INPUT_NODE.value.trim();

    if (inputValue.length)
      getJsonItems(inputResults, inputValue.split(' ').join('+'));
    else
      inputResults.clear();
  });
};
