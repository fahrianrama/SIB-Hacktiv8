function encryptpassword(password) {
    const encrypted = password.split('').map(char => char.charCodeAt(0)).join('');
    return encrypted;
}
function decryptpassword(password) {
    const decrypted = password.split('').map(char => String.fromCharCode(char)).join('');
    return decrypted;
}
let pw_enkrip = encryptpassword('password');
console.log(pw_enkrip);
let pw_dekrip = decryptpassword(pw_enkrip);
console.log(pw_dekrip);