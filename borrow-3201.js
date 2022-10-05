const devanshu = {
    firstName: "devanshu",
    lastName: "jain",
    courceCount: 4,
    role: "admin",
    getinfo: function(){
        console.log(`
        first name is ${this.firstName}
        last name is ${this.lastName}
        cource count is ${this.courceCount}
        role is ${this.role}
        `);
    },
};
devanshu.getinfo();

const dj = {
    firstName: "rock",
    lastName: "dj",
    courceCount: 3,
    role: "sub-admin",
}
devanshu.getinfo.bind(dj)();

devanshu.getinfo.call(dj);