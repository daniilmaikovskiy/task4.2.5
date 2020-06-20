import { add, addEventListeners } from './inputResultsHelper.js';

export default class InputResults {
  constructor() {
    this.data          = [];
    this.repoData      = [];
    this.htmlArrayData = [];
  }

  init() {
    add(this);
    addEventListeners(this);

    return this;
  }
  setData(items) {
    this.data = items;
    add(this);
  }
  clear() {
    this.data = [];
    add(this);
  }
};
