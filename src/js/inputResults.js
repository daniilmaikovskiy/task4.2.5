import { InputResults } from './inputResultsClass.js';
import { addInputListener } from './inputHelper.js';

const inputResults = new InputResults();
inputResults.init();

addInputListener(inputResults);
