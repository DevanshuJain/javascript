var countries =["India", "USA", "Russia", "Japan"];
var states = new Array("rajasthan", "Dehli", "Mumbai", "Madhya Pradesh");

console.log(countries)
console.log(states)

states[0] = "Goa";

console.log(states)

var user = ["devanshu", "devanshu@example.com", 3, 45, true];
console.log(user);

user.pop();
console.log(user);

user.unshift("testes");
console.log(user);

user.push("test");
console.log(user);

user.shift("testes");
console.log(user);


console.log(user.indexOf(3));
console.log(user.indexOf("test"));
console.log(user.indexOf("tester"));


console.log(Array.from("tester"));