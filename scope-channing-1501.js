var name = "devanshu"

console.log ("this is me", name)

function sayme() {
    var name = "mr H"
    console.log("this is again me", name);
    saymename()

    function saymename() {
        var name = "mr hc"
        console.log("this is again again me", name);
    }
}

sayme()