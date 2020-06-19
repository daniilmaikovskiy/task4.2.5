import { INPUT_RESULTS_HTML_ARRAY } from '../../settings.js';
import { isNew, addInHtml, showHideHtml } from './helper.js';

export const addMethod = obj => {
  obj.htmlArrayData = [];

  obj.data.map(el => {
    if (isNew(el.name.toLowerCase(), obj.repoData)
    && obj.htmlArrayData.length < INPUT_RESULTS_HTML_ARRAY.length) {
      let item = {
        name: el.name,
        owner: el.owner.login,
        stars: el.stargazers_count,
      }
      obj.htmlArrayData.push(item);
    }
  });

  addInHtml(obj);
  showHideHtml(obj);
}
