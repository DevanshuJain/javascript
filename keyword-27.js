var User = function(firstName, CourceName){
    this.firstName = firstName;
    this.CourceName = CourceName;
    this.getCourceCount = function() {
        console.log(`cource name is ${this.CourceName}`);
    };
};

var devanshu = new User("devanshu", "react")
console.log(devanshu );

var hitesh = new User("hitesh", "c++")

console.log(hitesh );

var bigtripper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 5);
};

var h = new bigtripper(10)
var i = new bigtripper(15)
var j = new bigtripper(16)

// console.log(h );
// console.log(i );
// console.log(j );