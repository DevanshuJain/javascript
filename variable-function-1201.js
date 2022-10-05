var getuserrole = function (name, role) => {
    switch(role) {
        case "admin":
            return `${name} is admin with all acess`
            break;
    
        case "subadmin":
            return `${name} is subadmin with all acess`
            break;
        case "user":
            return `${name} is user with all acess`
            break;
        case "test":
            return `${name} is test with all acess`
            break;
        default:
            return `default value`
            break;
    }
}

console.log(getuserrole("devanshu", "test"));