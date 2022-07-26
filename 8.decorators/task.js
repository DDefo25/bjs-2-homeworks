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
  let isFirst = false;
  return function(...args) {
    setTimeout(() => {
      isFirst = false;
    }, delay)

    if (isFirst) {
      setTimeout(() => {
        isFirst = false;
      }, delay)
      return;
    }

    func(...args);
    isFirst = true;
  }
}

function debounceDecorator2(func, delay) {
  let isFirst = false;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count += 1;    
    setTimeout(() => {
      isFirst = false;
    }, delay)

    if (isFirst) {
      setTimeout(() => {
        isFirst = false;
      }, delay)
      return;
    }

    func(...args);
    isFirst = true;
  }

  return wrapper;
}
