// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  min = Infinity;
  max = -Infinity;

  for (num of arr) {
    if (num > max) max = num;
    if (num < min) min = num;
    sum += num;
  }

  avg = Number((sum / arr.length).toFixed(2));

  return {min, max, avg};
}

console.log(getArrayParams([-99, 99, 10]))

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
