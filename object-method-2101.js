var user = {
    firstname: "devanshu",
    lastname: "jain",
    role: "admin",
    logincount: 2,
    facebook: true,
    courceList: [],
    buycource: function(courcename) {
        this.courceList.push(courcename);
    },
    getcourcecount: function(courcename) {
        return `${this.firstname} is enrolled in total of ${this.courceList.length} cources`;
    },
}
console.log(user);
console.log(user.getcourcecount());

user.buycource("React js count");
user.buycource("angular js count");
console.log(user.getcourcecount());