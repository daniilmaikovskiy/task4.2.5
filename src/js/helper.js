export const debounce = (fn, debounceTime) => {
  let timerId = null;

  return function (...args) {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
          fn.apply(this, args);
      }, debounceTime);
  }
};
