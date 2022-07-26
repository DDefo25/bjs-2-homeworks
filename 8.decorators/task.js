function cachingDecoratorNew(func) {
  let cache = [];
  return function(...args) {
    const hash = args.join(',');
    const findHash = cache.find(item => item.hash === hash);
    if (findHash) {
      return `Из кэша: ${findHash.result}`;
    }

    const result = func(...args);

    if (cache.length >= 5) {
      cache.splice(0, 1);
    }

    cache.push({
      hash,
      result,
    });

    return `Вычисляем: ${result}`;
  }
}


function debounceDecoratorNew(func, delay) {
  let timerId;
  let isDebounce = false;

  return function(...args) {
    clearTimeout(timerId);
    
    if (isDebounce === false) {
      func(...args);
      isDebounce = true;
    }

    timerId = setTimeout(() => {
      isDebounce = false;
    }, delay)
  }
}

function debounceDecorator2(func, delay) {
  let timerId;
  let isDebounce = false;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count += 1;    
    clearTimeout(timerId);
    
    if (isDebounce === false) {
      func.call(this, ...args);
      isDebounce = true;
    }

    timerId = setTimeout(() => {
      isDebounce = false;
    }, delay)
  }

  return wrapper;
}