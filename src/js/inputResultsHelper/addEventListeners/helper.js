import { REPO, REPO_WRAPPER } from '../../settings.js';
import { addMethod } from '../add/this.js';

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
    addMethod(obj);
    el.remove();
  });
}

export const addRepo = (obj, index) => {
  let clone   = REPO.cloneNode(true);

  addRepoValues(obj, clone, index);
  addRepoDeleter(obj, clone, obj.htmlArrayData[index].name);

  REPO_WRAPPER.append(clone);
}
