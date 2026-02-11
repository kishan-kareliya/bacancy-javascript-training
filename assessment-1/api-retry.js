/*
  JS: Implement API Retry Logic
 
  Write a function that:
  - Takes a URL and a retry count
  - Calls the API
  - Retries the request up to the given number of times if the API call fails
 
  The function should:
  - Stop retrying once the request succeeds
  - Throw an error after exhausting all retry attempts
*/


async function apiRetry(url, retryCount) {
    if (retryCount > 0) {
        try {
            const result = await fetch(url);
            if (!result.ok) {
                throw new Error("Status Code " + result.status);
            }
            const data = await result.json();
            return data;
        } catch (err) {
            console.log("failed to fetch data try again...");
            return apiRetry(url, retryCount - 1);
        }
    }
    else {
        console.log("Max retry limit reached");
    }
}

async function apiRetryWithLoop(url, retryCount) {
    for (let i = 0; i < retryCount; i++) {
        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error("Failed");
            }
            return await res.json();
        }
        catch (err) {
            console.log("Failed to fetch retry....");
            if (i === retryCount - 1) {
                throw new Error("Max Retry limit reached");
            }
        }
    }
}

apiRetry("https://jsonplaceholder.typicoe.com/todos/1", 3)
    .then(data => console.log(data))
    .catch(err => console.log(err));