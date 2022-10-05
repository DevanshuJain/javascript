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
}


module.exports =User;


const rock =new User("Rock", "rock@gmail.com");
console.log(rock.getInfo());

rock.EnrollCource("Angular Bootcamp");
console.log(rock.getCourceList());

console.log(rock.courceList);