import { QUERY_URL, SORT_SETTINGS, QUERY_DELAY } from '../../settings.js';
import { debounce } from '../../helper.js';

export const getJsonItems = debounce((inputResultsObj, query) => {
  fetch(new URL(QUERY_URL + query + SORT_SETTINGS))
    .then(response => response.json())
    .then(json => inputResultsObj.setData(json.items))
    .catch(() => inputResultsObj.clear());
}, QUERY_DELAY);
