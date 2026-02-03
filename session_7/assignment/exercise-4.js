// Q4. Global vs. Local Scope

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function () {
        return this.status;
    }
};

console.log(server.getStatus());

/*
    It prints "Online" because with in server object normal getStatus method is use and it is called via server.getStatus() that's why this attached to getStatus method.
*/
