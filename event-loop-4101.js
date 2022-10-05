const uno = ()=> {
    console.log("i am one");
}
const two = ()=> {
    setTimeout(() =>{
        console.log("woohoo");
    },3000);
    console.log("i am two");
}
const three = ()=> {
    console.log("i am three");
}
uno();
two();
three();