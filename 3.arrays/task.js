function compareArrays(arr1, arr2) {
  let result;

  result = arr1.every(function(item, idx, arr1) {
    return item === arr2[idx] && arr1.length === arr2.length;
  })

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((item) => item > 0);
  resultArr = resultArr.filter((item) => item % 3 === 0);
  resultArr = resultArr.map((item) => item * 10);  

  return resultArr; // array
}
