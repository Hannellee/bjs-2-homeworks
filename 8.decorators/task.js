function cachingDecoratorNew(func) {
  let cache = [];

function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash == hash);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].result);
      return "Из кэша: " + cache[idx].result;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({hash, result}) ; // добавляем элемент с правильной структурой
    if (cache.length > 5) { 
      cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
return wrapper;
}


function debounceDecoratorNew(func) {
  let timeout;  
    function wrapper(...args) {
      if (timeout === null) {
        func(...args);
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), ms);
    }

    return wrapper;
}

function debounceDecorator2(func) {
  let timeout = null;

    function wrapper(...args) {
      if (timeout === null) {
        func(...args);
      }
      
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), ms);
      wrapper.count++;
    }

    wrapper.count = 0;
    return wrapper;
}