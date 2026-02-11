// Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
// Part A: Run three tasks sequentially using async/await.
// Part B: Run three tasks simultaneously using Promise.all().
// Compare the total time taken for Part A vs Part B.
// Function to simulate a task

async function simulateTask(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name);
        }, delay);
    });
}

async function runSequentialTasks() {
    const start = Date.now();

    const name1 = await simulateTask("Task 1", 1000);
    const name2 = await simulateTask("Task 2", 2000);
    const name3 = await simulateTask("Task 3", 3000);

    const end = Date.now();
    console.log(name1, name2, name3);
    console.log(`Time required by (sequential): ${end - start} ms`);
}

async function runParallelTasks() {
    const start = Date.now();

    const [r1, r2, r3] = await Promise.all([
        simulateTask("Task 1", 1000),
        simulateTask("Task 2", 2000),
        simulateTask("Task 3", 3000)
    ]);

    const end = Date.now();
    console.log(r1, r2, r3);
    console.log(`Time required by Promise.all (parallel): ${end - start} ms`);
}

runSequentialTasks().then(() => runParallelTasks());