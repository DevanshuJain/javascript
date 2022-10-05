var User = function(firstName, CourceName){
    this.firstName = firstName;
    this.CourceName = CourceName;
    this.getCourceCount = function() {
        console.log(`cource name is ${this.CourceName}`);
    };
};

User.prototype.getfirstName = function() {
    console.log(`this the first name ${this.firstName}`)
};

var devanshu = new User("devanshu", "react")
devanshu.CourceName = "c++";
if (devanshu.hasOwnProperty("firstName")){
    devanshu.getfirstName();
}
// console.log(devanshu );

var hitesh = new User("hitesh", "react")
hitesh.CourceName = "react";
if (hitesh.hasOwnProperty("firstName")){
    hitesh.getfirstName();
}
// console.log(hitesh );