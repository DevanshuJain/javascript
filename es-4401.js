// this code is not working because of old verssion

var str = "this is the place to write our code";
var newstr = str.replace("place", "vs code")

console.log(newstr);

const rejectme = new Promise((_,reject) => reject("path issue"));
const resolveme = new Promise(resolve => resolve());

Promise.any([rejectme, resolveme, rejectme])
    .then(() => console.log("handle resolve"))
    .catch(e => console.log("reject"))