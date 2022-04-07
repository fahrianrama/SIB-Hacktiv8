function linearsearch(arr, x) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

console.log(linearsearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));