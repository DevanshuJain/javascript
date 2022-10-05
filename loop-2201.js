for(let i = 0; i < 10; i++){
    console.log(i);
}

const states = ["Rajasthan", "dehli", 1947, "Assam", "Maharastra", "tamil Nadu"];
for(let i =0; i < states.length; i++){
    if (typeof states[i] !== "string") continue;
    console.log(states[i])
}

console.log("while");
mystate = ["Rajasthan", "dehli", 1947, "Assam", "Maharastra", "tamil Nadu"];
let i =0;
while (i < mystate.length){
    console.log(mystate[i]);
    i++;
}

console.log("do-while");
mystate = ["Rajasthan", "dehli", 1947, "Assam", "Maharastra", "tamil Nadu"];
let z =0;
do {
    console.log(mystate[z]);
    z++;
} while (z < mystate.length);