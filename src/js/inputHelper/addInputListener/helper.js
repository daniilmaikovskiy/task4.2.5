import { QUERY_URL, SORT_SETTINGS, QUERY_DELAY } from '../../settings.js';
import { debounce } from '../../helper.js';

const createInputURL = query => new URL(QUERY_URL + query + SORT_SETTINGS);

export const getJsonItems = debounce((inputResultsObj, query) => {
  fetch(createInputURL(query))
    .then(response => response.json())
    .then(json => inputResultsObj.setData(json.items))
    .catch(() => inputResultsObj.clear());
}, QUERY_DELAY);
