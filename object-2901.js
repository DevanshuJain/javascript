var User = {
    name: "",
    getUserName: function() {
        console.log(`user name is : ${this.name}`)
    },
};

var devanshu = Object.create(User);
console.log(devanshu);
devanshu.name = "Devanshu jain";
devanshu.getUserName();

var hitesh = Object.create(User);
console.log(hitesh);
hitesh.name = "hitesh jain";
hitesh.getUserName();

var Rajesh = Object.create(User, {
    name: {value: "Rajesh"},
});
Rajesh.getUserName();