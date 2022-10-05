mystate = ["Rajasthan", "dehli", 1947, "Assam", "Maharastra", "tamil Nadu"];

mystate.forEach(element => {
    console.log(element);
});
console.log("for in");
var mystate = ["netflix", "amazon prime", "Instagram", "facebook", "Whats app"];

for (const n of mystate) {
console.log(n);
}

var Symbols = {
    yt: "youtube", 
    nt: "netflix", 
    ap: "amazon prime",
    I: "Instagram", 
    fb: "facebook", 
    wa: "Whats app"
};

console.log("for for");
for (const n in Symbols){
    console.log(`key is ${n} and value is : ${Symbols[n]}`);   
}