const user = ["hitesh", 3, "admin"]
// var role = user[2];
// var name = user[0];

var [name, courseCount, role] = user;

console.log(role);
const myUser= {
    name: "devanshu jain",
    courseCount:5,
    role:"admin",
};

console.log(myUser.name)

var {name, courseCount, role} = myUser;
console.log(courseCount);

// destructure
var {name, mycourseCount, role} = myUser;
console.log(mycourseCount);