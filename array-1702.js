function iseven(element){
    if (element % 2 == 0){
        return true;
    }
    return false;
}

// Arrow function
var checkeven = (element) => {
    return element % 2 === 0;
}

console.log(iseven(3));
console.log(checkeven(2));

console.log("callback");
var result = [2, 4, 6, 8].every(checkeven)
console.log(result);

console.log("callback arrow");
var result = [2, 4, 6, 8].every((e) => {
 return e % 2 === 0;
});
console.log(result);

