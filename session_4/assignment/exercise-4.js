// 4. Write a function called masterClone(obj) that performs a deep copy without using JSON.stringify or structuredClone.
// Requirements:
// It must handle nested objects.
// It must handle nested arrays.
// It must not copy functions by reference (they can remain shared, but the object structure must be unique).


const user = {
    id: 101,
    profile: {
        username: "kishan",
        socials: {
            github: "kishan-dev",
            links: ["github.com", "linkedin.com"]
        }
    },
    greet: function () {
        return "Hello";
    },
    tags: ["developer", "engineer"]
};


function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}

const copy = deepCopy(user);

copy.profile.username = 'rahul';
copy.profile.socials.github = 'rahul-dev';

console.log(user)
console.log(copy)

const obj = { a: 1, b: 2 };

for (let k in obj) console.log(k); // a, b
for (let val of obj) console.log(val)
