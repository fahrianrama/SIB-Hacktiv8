function gcd(a, b) {
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}

console.log(gcd(12, 16));
console.log(gcd(50, 40));
console.log(gcd(22, 99));
console.log(gcd(24, 36));
console.log(gcd(17, 23));
