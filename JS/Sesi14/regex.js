//Regex
const contoh = "Aku belajar regex";
const regex = /regex/;
console.log(regex.test(contoh));
console.log(contoh.match(regex));
console.log(contoh.search(regex));
console.log(contoh.replace(regex, "regex"));
console.log(contoh.split(regex));
