function SelectionSort(arr) {
  var n = arr.length;
  console.log(`Sebelum diurutkan : ${arr}`);
  for (var i = 0; i < n; i++) {
    var min = i;
    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if(min != i){
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        console.log(`Percobaan ke-${i + 1} : ${arr}`);
    }
  }
    console.log(`Setelah diurutkan : ${arr}`);
  return arr;
}

let arrnumber = [27,38,4,43,9,82,10];
SelectionSort(arrnumber);