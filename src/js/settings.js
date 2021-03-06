const REPO_FRAGMENT = document.querySelector('#repo-template').content;

export const REPO         = REPO_FRAGMENT.querySelector('.repo');
export const REPO_WRAPPER = document.querySelector('#repo-wrapper');

export const INPUT_RESULTS_HTML_ARRAY = Array.from(document.querySelectorAll('.input-result'));

export const INPUT_NODE = document.querySelector('#input');

export const QUERY_URL = 'https://api.github.com/search/repositories?q=';
export const SORT_SETTINGS = '&sort=name+stars&order=desc';

export const QUERY_DELAY = 300;
