const User = require("./class-3901");

const devanshu = new User("devanshu", "devanshu@gmail.com")

console.log(devanshu.getInfo());

devanshu.EnrollCource("react Cource");
devanshu.EnrollCource("c++ Cource");

console.log(devanshu.getCourceList())