var max_value = Math.max(2,3,4,5,6,7,7)
console.log(max_value);

var myobj = {}

Object.assign(myobj, {a:1, b:2, c:3},{z:9, y:8,x:7});
console.log(myobj);

function sunOne(a,b){
    return a+b;
}

var myA = [3,9]
console.log(sunOne(...myA));  //spread operator

function sunTwo(a, b, ...values){
    console.log(values);
    let mul = a*b;
    let sum = 0;
    for(const value of values) {
        sum = sum + value;
    }
    return [sum,mul];
}

console.log(sunTwo(2,3,9,7,5));