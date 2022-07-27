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
  let isDebounce = false; //флаг ассинхронного вызова

  return function(...args) {
    if (isDebounce === false) {
      func(...args); //синхронный вызов
      isDebounce = true;
    } else { //последующие вызовы с флагом isDebounce=true должны быть отложенными
      clearTimeout(timerId); //обнуление таймера при каждом ассинхронном вызове
      timerId = setTimeout(() => { 
        func(...args);  //ассинхронный вызов
        isDebounce = false; //флаг isDebounce возвращают в исходное значение для следующего синхронного вызова
      }, delay)
    }
  }
}

function debounceDecorator2(func, delay) {
  let timerId;
  let isDebounce = false;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count += 1;

    if (isDebounce === false) {
      func(...args);
      isDebounce = true;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => { 
        func(...args);
        isDebounce = false;
      }, delay)
    }
  }

  return wrapper;
}