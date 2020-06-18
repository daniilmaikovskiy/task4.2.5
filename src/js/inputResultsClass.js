import { add, addEventListeners } from './inputResultsHelper.js';

export class InputResults {
  constructor() {
    this.data          = [];
    this.repoData      = [];
    this.htmlArrayData = [];
  }

  init() {
    add(this);
    addEventListeners(this);
  }
  setData(items) {
    this.data = [];
    this.data = items;
    add(this);
  }
  clear() {
    this.data = [];
    add(this);
  }
};
