import { InputResults } from './inputResultsClass.js';

const debounce = (fn, debounceTime) => {
  let timerId = null;

  return function (...args) {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
          fn.apply(this, args);
      }, debounceTime);
  }
};

const getJsonItems = debounce(url => {
  fetch(url)
    .then(response => response.json())
    .then(json => inputResults.setData(json.items))
    .catch(() => inputResults.clear());
}, 200);

const QUERY_URL = 'https://api.github.com/search/repositories?q=name:';

const inputResults = new InputResults();
inputResults.init();

const input = document.querySelector('#input');

input.addEventListener('input', () => {
  let inputValue = input.value.trim();

  if (inputValue.length) {
    let query = inputValue.split(' ').join('+');
    let url = new URL(QUERY_URL + query);

    getJsonItems(url);
  }
  else {
    inputResults.clear();
  }
})
