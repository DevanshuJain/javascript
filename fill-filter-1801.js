var testArray = [2, 3, 4, 5, 6, 7];
console.log(testArray.fill("h"));

console.log(testArray.fill("empty", 2, 4));

const myNumber = [21, 31, 41, 51, 61, 71];

//fiter

const result = myNumber.filter((num) => num != 51 )
console.log(result);

const value = myNumber.filter((num) => num < 51 )
console.log(value);