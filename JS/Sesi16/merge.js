function Merge(leftArr,rightArr){
    var result = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            result.push(leftArr.shift());
        }else{
            result.push(rightArr.shift());
        }    
    }
    return result.concat(leftArr).concat(rightArr);
}
function MergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0,middle);
    var right = arr.slice(middle);
    return Merge(MergeSort(left),MergeSort(right));
}
let arrnumber = [27, 38, 4, 43, 9, 82, 10];
console.log(`Sebelum diurutkan : ${arrnumber}`);
;
console.log(`Setelah diurutkan : ${MergeSort(arrnumber)}`);