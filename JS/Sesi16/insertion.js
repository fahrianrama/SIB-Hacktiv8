function InsertionSort(arr) {
    console.log(`Sebelum diurutkan : ${arr}`);
    var n = arr.length;
    for (var i = 1; i < n; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
        console.log(`Percobaan ke-${i} : ${arr}`);
    }
    console.log(`Setelah diurutkan : ${arr}`);
    return arr;
}
let arrnumber = [27, 38, 4, 43, 9, 82, 10];
InsertionSort(arrnumber);