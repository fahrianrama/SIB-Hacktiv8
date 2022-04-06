function listPrima(angkaPertama, angkaKedua) {
    var prima = [];
    for (var i = angkaPertama; i <= angkaKedua; i++) {
        var isPrima = true;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrima = false;
                break;
            }
        }
        if (isPrima) {
            prima.push(i);
        }
    }
    return prima;
}

console.log(listPrima(1, 5));
console.log(listPrima(5, 10));
console.log(listPrima(10, 20));