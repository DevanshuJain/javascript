var mymap = new Map();
mymap.set(0,"dev")
mymap.set(1,"raj")
mymap.set(2,"hitesh")
mymap.set(3,"shivani")

console.log(mymap);

for(let key of mymap.keys()){
    console.log(`key is ${key}`);
}

for(let value of mymap.values()){
    console.log(`value is ${value}`);
}

for(let [key, value] of mymap){
    console.log(`key is ${key} and value is ${value}`);
}

mymap.forEach((value) => console.log(`${value}`))

mymap.forEach((v, k) => console.log(`${v} and key is ${k}`))

mymap.delete(2)
console.log(mymap);