function ThreeStepsAB(text) {
    let arrtext = text.split('');

    var i = 0;
    while (i < arrtext.length) {
        if ((arrtext[i] == "a" && arrtext[i+4] == "b") || (arrtext[i] == "b" && arrtext[i+4] == "a")) {
        return true;
        break;
        }
        i++;
    }
    return false;
}

console.log(ThreeStepsAB('lane borrowed'));
console.log(ThreeStepsAB('i am sick'));
console.log(ThreeStepsAB('you are boring'));
console.log(ThreeStepsAB('barbarian'));
console.log(ThreeStepsAB('bacon and meat'));