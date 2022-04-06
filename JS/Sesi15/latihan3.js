function urutHuruf(kata) {
  var huruf = kata.split('');
  var urut = huruf.sort();
  var hasil = urut.join('');
  return hasil;
}

console.log(urutHuruf("halo"));
console.log(urutHuruf("qwerty"));
console.log(urutHuruf("qwertyuiopasdfghjklzxcvbnm"));