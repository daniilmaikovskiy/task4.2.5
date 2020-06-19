import { REPO, REPO_WRAPPER, INPUT_RESULTS_HTML_ARRAY } from '../settings.js';
import { isNew, addInHtml, showHideHtml } from './inputResultsAddMethodHelper.js';

export const add = obj => {
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

const addRepoValues = (obj, el, index) => {
  let fields = Array.from(el.querySelectorAll('.repo__field-value'));
  let data   = obj.htmlArrayData[index];
  let keys   = Object.keys(data);

  fields.map((field, i) => {
    field.textContent = data[keys[i]];
  });
}

const addRepoDeleter = (obj, el, name) => {
  let deleter = el.querySelector('.deleter');

  deleter.addEventListener('click', () => {
    obj.repoData.splice(obj.repoData.indexOf(name), 1);
    add(obj);
    el.remove();
  });
}

const addRepo = (obj, index) => {
  let clone   = REPO.cloneNode(true);

  addRepoValues(obj, clone, index);
  addRepoDeleter(obj, clone, obj.htmlArrayData[index].name);

  REPO_WRAPPER.append(clone);
}

export const addEventListeners = obj => {
  INPUT_RESULTS_HTML_ARRAY.map((el, i) => {
      el.addEventListener('click', () => {
        obj.repoData.push(obj.htmlArrayData[i].name);
        addRepo(obj, i);
        add(obj);
      });
    }
  );
}
