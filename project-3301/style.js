const cources = [
    {name: "complete C cource", price: "2.3"},
    {name: "complete C++ cource", price: "6.3"},
    {name: "complete java cource", price: "4.3"},
    {name: "complete js cource", price: "5.3"},
]

function generateLIST() {
    const ul = document.querySelector(".list-group")
    ul.innerHTML =""
    cources.forEach((cource) => {
        
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        const name = document.createTextNode(cource.name)
        li.appendChild(name)
        debugger
        const span = document.createElement("span");
        span.classList.add("float-right")
        
        const price =document.createTextNode("$" + cource.price)
        span.appendChild(price);
        li.appendChild(span)
        ul.appendChild(li)
    });
}
window.addEventListener("load", generateLIST())

const button = document.querySelector(".bd-dark")
button.addEventListener("click", () => {
    cources.sort( (a,b) => b.price - a.price)
    generateLIST();
});
