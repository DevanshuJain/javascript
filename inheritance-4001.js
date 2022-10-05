class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courceList = [];
    getInfo() {
        return {
            name: this.name, email: this.email
        }
    }
    EnrollCource(name){
        this.#courceList.push(name);
    }
    getCourceList(){
        return this.#courceList;
    }
    login(){
        return "you are logged in";
    }
// private methord
    static loginAgain(){
        return "you are logged in";
    }
}

class subclass extends User{
    constructor(name, email){
        super(name, email)
    }

    getAdmininfo(){
        return "i am sub admin";
    }
}

const tom = new subclass("tom", "tom@gmail.com");
console.log(tom.getAdmininfo());
console.log(tom.login());
console.log(tom.getInfo());

console.log(tom.loginAgain());

