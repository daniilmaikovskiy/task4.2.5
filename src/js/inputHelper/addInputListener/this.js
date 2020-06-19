import { INPUT_NODE } from '../../settings.js'
import { getJsonItems } from './helper.js';

export const addInputListenerMethod = inputResults => {

  INPUT_NODE.addEventListener('input', () => {
    let inputValue = INPUT_NODE.value.trim();

    if (inputValue.length)
      getJsonItems(inputResults, encodeURIComponent(inputValue));
    else
      inputResults.clear();
  });
};
