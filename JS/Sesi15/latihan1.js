function compareNumbers(firstnumber,secondnumber){
    if (firstnumber < secondnumber){
        return true;
    }else if (firstnumber > secondnumber){
        return false;
    }
    else{
        return -1;
    }
}

console.log(compareNumbers(5,10));
console.log(compareNumbers(5,3));
console.log(compareNumbers(4,4));
console.log(compareNumbers(3,3));
console.log(compareNumbers(17,2));
