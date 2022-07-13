function compareArrays(arr1, arr2) {
  let result;

  result = arr1.every((element, index) => {
    return arr1.length === arr2.length && element === arr2[index];
  });

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr; // array
}


console.log(compareArrays([8, 9], [6]))
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]))
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]))
console.log(compareArrays([1, 2, 3], [2, 3, 1]))
console.log(compareArrays([8, 1, 2], [8, 1, 2]))