import { INPUT_RESULTS_HTML_ARRAY } from '../../settings.js';
import { addMethod } from '../add/this.js';
import { addRepo } from './helper.js';

export const addEventListenersMethod = obj => {
  INPUT_RESULTS_HTML_ARRAY.map((el, i) => {
      el.addEventListener('click', () => {
        obj.repoData.push(obj.htmlArrayData[i].id);
        addRepo(obj, i);
        addMethod(obj);
      });
    }
  );
}
