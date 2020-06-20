import { INPUT_RESULTS_HTML_ARRAY, REPO, REPO_WRAPPER } from './settings.js';

const isNew = (el, arr) => !arr.some(e => e === el);

const addInHtml = obj =>
  obj.htmlArrayData.map((el, i) => INPUT_RESULTS_HTML_ARRAY[i].textContent = el.name);

const showHideHtml = obj => {
  const HIDDEN_CLASS = 'input-result--hidden';

  INPUT_RESULTS_HTML_ARRAY.map((el, i) => {
    if (obj.htmlArrayData.length <= i)
      el.classList.add(HIDDEN_CLASS);
    else
      el.classList.remove(HIDDEN_CLASS);
  });
}

export const add = obj => {
  obj.htmlArrayData = [];

  obj.data.map(el => {
    if (isNew(el.id, obj.repoData)
    && obj.htmlArrayData.length < INPUT_RESULTS_HTML_ARRAY.length) {
      let item = {
        id: el.id,
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

  let keys   = Object.keys(data).reduce((acc, key) => {
    if (key !== 'id') acc.push(key);
    return acc;
  }, []);

  fields.map((field, i) => field.textContent = data[keys[i]]);
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
        obj.repoData.push(obj.htmlArrayData[i].id);
        addRepo(obj, i);
        add(obj);
      });
    }
  );
}
