function reverseString(str) {
  var strArray = str.split("");
  var reverseArray = strArray.reverse();
  var reverseStr = reverseArray.join("");
  return reverseStr;
}

console.log(reverseString("Hello World and Coders"));
console.log(reverseString("John Doe"));
console.log(reverseString("I am a bookworm"));
console.log(reverseString("Coding is my hobby"));
console.log(reverseString("Super"));