var user = {
    firstname: "devanshu",
    lastname: "jain",
    role: "admin",
    logincount: 2,
    facebook: true,
}
console.log(user);
console.log(user["firstname"]);

user.firstname = "dev";
console.log(user["firstname"]);