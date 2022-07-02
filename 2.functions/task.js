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

// Задание 2
function worker(arr) {
  let sum = 0;

  for (num of arr) sum += num;

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (arr of arrOfArr) {
    let sum = func(arr);
    if (sum > max) max = sum;
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let {min, max} = getArrayParams(arr);
  let divMaxMin = Math.abs(max - min);
  return divMaxMin;
}
