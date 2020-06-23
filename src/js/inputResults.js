import { addInputListener } from './inputHelper.js';
import { INPUT_RESULTS_HTML_ARRAY, REPO, REPO_WRAPPER } from './settings.js';

let inputResults = {
  data: [],
  repoData: [],
  htmlArrayData: [],

  init() {
    this.add();
    this.addEventListeners();

    return this;
  },

  setData(items) {
    this.data = items;
    this.add();
  },

  clear() {
    this.data = [];
    this.add();
  },

  isNew(el, arr) {
    return !arr.some(e => e === el);
  },

  addInHtml() {
    this.htmlArrayData.map((el, i) => INPUT_RESULTS_HTML_ARRAY[i].textContent = el.name);
  },

  showHideHtml() {
    const HIDDEN_CLASS = 'input-result--hidden';

    INPUT_RESULTS_HTML_ARRAY.map((el, i) => {
      if (this.htmlArrayData.length <= i)
        el.classList.add(HIDDEN_CLASS);
      else
        el.classList.remove(HIDDEN_CLASS);
    });
  },

  add() {
    this.htmlArrayData = [];

    this.data.map(el => {
      if (this.isNew(el.id, this.repoData)
      && this.htmlArrayData.length < INPUT_RESULTS_HTML_ARRAY.length) {

        let item = {
          id: el.id,
          name: el.name,
          owner: el.owner.login,
          stars: el.stargazers_count,
        }
        this.htmlArrayData.push(item);
      }
    });

    this.addInHtml();
    this.showHideHtml();
  },

  addRepoValues(el, index) {
    let fields = Array.from(el.querySelectorAll('.repo__field-value'));
    let data   = this.htmlArrayData[index];

    let keys   = Object.keys(data).reduce((acc, key) => {
      if (key !== 'id') acc.push(key);
      return acc;
    }, []);

    fields.map((field, i) => field.textContent = data[keys[i]]);
  },

  addRepoDeleter(el, name) {
    let deleter = el.querySelector('.deleter');

    deleter.addEventListener('click', () => {
      this.repoData.splice(this.repoData.indexOf(name), 1);
      add();
      el.remove();
    });
  },

  addRepo(index) {
    let clone   = REPO.cloneNode(true);

    this.addRepoValues(clone, index);
    this.addRepoDeleter(clone, this.htmlArrayData[index].name);

    REPO_WRAPPER.append(clone);
  },

  addEventListeners() {
    INPUT_RESULTS_HTML_ARRAY.map((el, i) => {
      el.addEventListener('click', () => {
          this.repoData.push(this.htmlArrayData[i].id);
          this.addRepo(i);
          this.add();
        });
      }
    );
  },
};

addInputListener(inputResults.init());
