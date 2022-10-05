const uno = ()=> {
    return "i am one";
}
// const two = async ()=> {
//     setTimeout(() =>{
//         return "woohoo";
//     },3000);
// }

const two = async ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("woohoo");
        },3000);
    });
};

const three = ()=> {
    return "i am three";
}
const callme = async ()=> {
    let name = uno()
    console.log(`i am three ${name}`);

    let twoo = await two()
    console.log(`i am three ${twoo}`);

    let threee = three()
    console.log(`i am three ${threee}`);
}

callme()