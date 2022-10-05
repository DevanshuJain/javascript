var user = {
    firstName: "Hitesh",
    courceCount: 4,
    getCourceCount: function() {
        console.log("This is function", this)
        function sayhello(){
            console.log("hello")
            console.log("sayhello", this)
        }
        sayhello()
    },
};

user.getCourceCount();
