function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  };

  return arr1.every((element, index) => {
    return arr1.length === arr2.length && element === arr2[index];
  });
}

function advancedFilter(arr) {
  return resultArr = arr.filter(element => element > 0 && element % 3 === 0).map(element => element * 10)
}