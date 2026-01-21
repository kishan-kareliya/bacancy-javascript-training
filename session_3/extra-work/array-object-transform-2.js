// 1. Normalize transactions into user balance object (reduce)
// const transactions = [
//   { userId: 1, type: "credit", amount: 500 },
//   { userId: 2, type: "debit", amount: 200 },
//   { userId: 1, type: "debit", amount: 100 },
//   { userId: 3, type: "credit", amount: 700 },
//   { userId: 2, type: "credit", amount: 300 }
// ];

// Output:
// {
//   1: 400,
//   2: 100,
//   3: 700
// }

const transactions = [
    { userId: 1, type: "credit", amount: 500 },
    { userId: 2, type: "debit", amount: 200 },
    { userId: 1, type: "debit", amount: 100 },
    { userId: 3, type: "credit", amount: 700 },
    { userId: 2, type: "credit", amount: 300 }
]

const transactionsBalance = transactions.reduce((acc, transaction) => {
    let amount = 0;
    if (transaction.type === "debit") {
        amount -= transaction.amount;
    }
    else {
        amount += transaction.amount;
    }

    if (acc[transaction.userId]) {
        acc[transaction.userId] += amount;
    }
    else {
        acc[transaction.userId] = amount;
    }

    return acc;
}, {});

console.log(transactionsBalance)


// 2. Group objects by dynamic key (reduce)
// groupBy(users, "role");
// Input:
// [
//   { name: "A", role: "admin" },
//   { name: "B", role: "user" },
//   { name: "C", role: "admin" }
// ]
//  Output:
// {
//   admin: [{...}, {...}],
//   user: [{...}]
// }


const userRole = [
    { name: "A", role: "admin" },
    { name: "B", role: "user" },
    { name: "C", role: "admin" }
]

function groupBy(arr, key) {
    const response = arr.reduce((acc, i) => {
        const keyName = i[key]
        if (acc[keyName]) {
            acc[keyName].push(i);
        }
        else {
            acc[keyName] = [i];
        }
        return acc;
    }, [])
    console.log(response)
}

groupBy(userRole, "role");


// Advanced Question 3 — Multi-Level Grouping + Aggregation
// You are given a list of transaction records:

// const transactions = [
//   { userId: 1, category: "food",    type: "debit",  amount: 200 },
//   { userId: 1, category: "food",    type: "debit",  amount: 150 },
//   { userId: 1, category: "salary",  type: "credit", amount: 1000 },
//   { userId: 2, category: "food",    type: "debit",  amount: 300 },
//   { userId: 2, category: "shopping",type: "debit",  amount: 400 },
//   { userId: 2, category: "salary",  type: "credit", amount: 1200 },
//   { userId: 1, category: "shopping",type: "debit",  amount: 500 },
// ];

// Transform this into the following advanced structured object using reduce:
// {
//   1: {
//     food:     { total: 350, count: 2 },
//     salary:   { total: 1000, count: 1 },
//     shopping: { total: 500, count: 1 }
//   },
//   2: {
//     food:     { total: 300, count: 1 },
//     shopping: { total: 400, count: 1 },
//     salary:   { total: 1200, count: 1 }
//   }
// }


const accountTransactions = [
    { userId: 1, category: "food", type: "debit", amount: 200 },
    { userId: 1, category: "food", type: "debit", amount: 150 },
    { userId: 1, category: "salary", type: "credit", amount: 1000 },
    { userId: 2, category: "food", type: "debit", amount: 300 },
    { userId: 2, category: "shopping", type: "debit", amount: 400 },
    { userId: 2, category: "salary", type: "credit", amount: 1200 },
    { userId: 1, category: "shopping", type: "debit", amount: 500 },
];

const accountTransactionsByUserId = accountTransactions.reduce((acc, transaction) => {
    const { userId, category, type, amount } = transaction;

    if (acc[userId]) {
        if (acc[userId][category]) {
            acc[userId][category].total += amount;
            acc[userId][category].count += 1;
        }
        else {
            acc[userId][category] = { total: amount, count: 1 }
        }
    }
    else {
        acc[userId] = {
            [category]: { total: amount, count: 1 }
        }
    }
    return acc;
}, {})

console.log(accountTransactionsByUserId)

