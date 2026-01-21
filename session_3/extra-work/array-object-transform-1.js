
//   Q1. Object → Array of keys, values, entries
//
//   Input:
//    { name: "kishan", age: 21, city: "Ahmedabad" }
//
//   Goal:
//    - Extract all keys
//    - Extract all values
//    - Extract key-value pairs

const profile = { name: "kishan", age: 21, city: "Ahmedabad" };

console.log(Object.keys(profile));
console.log(Object.values(profile));
console.log(Object.entries(profile));


// Q2.Array of entries → Object

// Input:
// [["id", 1], ["title", "Book"], ["price", 250]]

// Goal:
//   Convert entry pairs into an object

const books = [["id", 1], ["title", "Book"], ["price", 250]];
const obj = Object.fromEntries(books);

console.log(obj);


//  Q3. Object → Array of { key, value }

//   Input:
//    { a: 10, b: 20, c: 30 }

//   Goal:
//    Convert object into an array of objects

const marks = { a: 10, b: 20, c: 30 };

const marksList = Object.entries(marks).reduce((acc, p) => {
    const key = p[0];
    const value = p[1];

    acc.push({
        key: key,
        value: value
    });
    return acc;
}, []);

console.log(marksList);


//   Q4. Object → Formatted String Array
// 
//   Input:
//    { math: 90, science: 70, english: 40 }
//  
//   Goal:
//    ["MATH-90", "SCIENCE-70", "ENGLISH-40"]

const studentMarks = { math: 90, science: 70, english: 40 };

const studentMarkList = Object.entries(studentMarks).reduce((acc, student) => {
    const subject = student[0];
    const marks = student[1];

    acc.push(`${subject.toUpperCase()}-${marks}`);
    return acc;
}, []);

console.log(studentMarkList);


//   Q5. Count frequency of values in array
//
//   Input:
//    ["js", "js", "css", "html", "js", "css"]
//
//   Goal:
//    { js: 3, css: 2, html: 1 }

const extension = ["js", "js", "css", "html", "js", "css"];

const totalExtension = extension.reduce((acc, value) => {
    if (acc[value]) {
        acc[value] += 1;
    } else {
        acc[value] = 1;
    }
    return acc;
}, {});

console.log(totalExtension);


//   Q6. Array → Object indexed by position
//
//   Input:
//    [{id:1,name:"A"},{id:2,name:"B"}]
// 
//   Goal:
//    { 0:{...}, 1:{...} }

const students = [{ id: 1, name: "A" }, { id: 2, name: "B" }];

const studentsById = students.reduce((acc, value, index) => {
    acc[index] = value;
    return acc;
}, {});

console.log(studentsById);



//   Q7. Extract nested values into array
//
//   Input:
//    { a:{x:10}, b:{x:20}, c:{x:30} }
// 
//   Goal:
//    [10, 20, 30]

const nestedObj = { a: { x: 10 }, b: { x: 20 }, c: { x: 30 } };

const flattenArr = Object.entries(nestedObj).map(a => {
    return a[1].x;
});

console.log(flattenArr);



//   Q8. Group object keys by value
//
//   Input:
//    { apple:"fruit", carrot:"vegetable", banana:"fruit" }
// 
//   Goal:
//    { fruit:["apple","banana"], vegetable:["carrot"] }

const fruitsObj = { apple: "fruit", carrot: "vegetable", banana: "fruit" };

const combineFruit = Object.entries(fruitsObj).reduce((acc, entry) => {
    const key = entry[0];
    const value = entry[1];

    if (acc[value]) {
        acc[value].push(key);
    } else {
        acc[value] = [key];
    }
    return acc;
}, {});

console.log(combineFruit);



//   Q9. Array → Array of computed objects
//
//   Input:
//    [5, 10, 15]
// 
//   Goal:
//    [{5:25},{10:100},{15:225}]

const nums = [5, 10, 15];

const multiplication = nums.map((num) => {
    return { [num]: num * num };
});

console.log(multiplication);



//  Q10. Backend Object → Frontend-friendly Array

const backendData = {
    data: {
        users: {
            "101": { name: "A" },
            "102": { name: "B" }
        }
    }
};

const frontendEntries = Object.entries(backendData.data.users).map((user) => {
    return {
        id: user[0],
        name: user[1].name
    };
});

console.log(frontendEntries);



//  Q11. Normalize API response (REAL-WORLD)

const response = {
    status: "ok",
    data: [
        { id: 1, name: "A", skills: ["JS", "React"] },
        { id: 2, name: "B", skills: ["Node"] }
    ]
};

const formatedResponse = response.data.reduce((acc, d) => {
    acc.userById[d.id] = { id: d.id, name: d.name };
    acc.skillsByUser[d.id] = d.skills;
    return acc;
}, {
    userById: {},
    skillsByUser: {}
});

console.log(formatedResponse);



//  Q12. Object → Array with id included

const users = {
    u1: { name: "Divy", age: 21, city: "Ahmedabad" },
    u2: { name: "Aman", age: 23, city: "Surat" }
};

const formatedUser = Object.entries(users).map((user) => {
    return {
        id: user[0],
        name: user[1].name,
        age: user[1].age,
        city: user[1].city
    };
});

console.log(formatedUser);



//  Q13. Group + Aggregate (Dashboard logic)

const orders = [
    { userId: 1, amount: 200 },
    { userId: 2, amount: 300 },
    { userId: 1, amount: 100 }
];

const cartOrders = orders.reduce((acc, order) => {
    if (acc[order.userId]) {
        acc[order.userId].totalOrder += 1;
        acc[order.userId].totalAmount += order.amount;
    } else {
        acc[order.userId] = {
            totalOrder: 1,
            totalAmount: order.amount
        };
    }
    return acc;
}, {});

console.log(cartOrders);



//  Q14. Deep Object → Flat Keys

const data = {
    user: {
        id: 1,
        profile: {
            name: "Divy",
            address: {
                city: "Ahmedabad"
            }
        }
    }
};

const dataTransform = Object.entries(data).map((entry) => {
    return {
        "user.id": entry[1].id,
        "user.profile.name": entry[1].profile.name,
        "user.profile.address.city": entry[1].profile.address.city
    };
});

console.log(dataTransform);



//  Q15. Multi-level grouping (Advanced Reduce)

const usersWithRole = [
    { name: "A", city: "Ahmedabad", role: "admin" },
    { name: "X", city: "Ahmedabad", role: "admin" },
    { name: "B", city: "Ahmedabad", role: "user" },
    { name: "Y", city: "Ahmedabad", role: "user" },
    { name: "z", city: "Surat", role: "user" },
    { name: "A", city: "Surat", role: "admin" }
];

const filterUserWithRole = usersWithRole.reduce((acc, user) => {
    if (acc[user.city]) {
        if (user.role === "admin") {
            acc[user.city].admin.push(user.name);
        } else {
            acc[user.city].user.push(user.name);
        }
    } else {
        if (user.role === "admin") {
            acc[user.city] = { admin: [user.name], user: [] };
        } else {
            acc[user.city] = { admin: [], user: [user.name] };
        }
    }
    return acc;
}, {});

console.log(filterUserWithRole);
