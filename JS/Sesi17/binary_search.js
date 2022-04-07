function binarysearch(arr, target) {
  var low = 0;
  var high = arr.length - 1;
  var mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(binarysearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));