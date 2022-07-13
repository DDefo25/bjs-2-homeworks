function compareArrays(arr1, arr2) {
  let result;

  result = arr1.every((element, index) => {
    return arr1.length === arr2.length && element === arr2[index];
  });

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(element => element > 0 && element % 3 === 0).map(element => element * 10)

  return resultArr; // array
}