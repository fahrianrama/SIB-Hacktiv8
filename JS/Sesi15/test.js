function input(a, b) {
    var arr_Prime = [];
    var arr_notPrime = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    arr_notPrime.push(i);
                    break;
                }
            }
            if (arr_notPrime.indexOf(i) == -1) {
                arr_Prime.push(i);
            }
        }
    } else if(a > b)
    for (let i = b; i <= a; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                arr_notPrime.push(i);
                break;
            }
        }
        if (arr_notPrime.indexOf(i) == -1) {
            arr_Prime.push(i);
        }
    }
    console.log(arr_Prime);
}
 
input(1, 5);
input(5, 10);
input(20, 10);