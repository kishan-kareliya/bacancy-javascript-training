// Q6. The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print();

/*
    It prints undefined because user.printName method passed to const print so implicit binding is lost and this refer to global obj that's why it print undefined
*/

