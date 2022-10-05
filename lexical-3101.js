function init() {
    var firstName = "Devanshu jain";
    console.log("i am init");
    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName;
}

var value = init();
value();

// closure
function doaddition(x){
    return function(y){
        return x + y;
    }
}

var add5 = doaddition(3);
console.log(add5(4));;


console.log(doaddition(3)(9));