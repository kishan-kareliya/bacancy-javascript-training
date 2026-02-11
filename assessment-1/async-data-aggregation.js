/*
  JS: Async Data Aggregation Using Promises
  You are required to fetch related data from multiple APIs and create a summary.
 
  Steps:
  - Fetch a user
  - Fetch posts for that user
  - Fetch comments for one of the posts
 
  Combine the results into a single summary object.
  Example:
  summary: {
    user: "Leanne Graham",
    postCount: 10,
    commentCount: 5
  }
*/

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ user: "kishan" }), 2000);
    })
}

function getPost() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ postCount: 10 }), 1500);
    })
}

function getComment() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ commentCount: 5 }), 2500);
    })
}

Promise.all([getUser(), getPost(), getComment()])
    .then(([userData, postData, commentData]) => {
        const summary = {
            user: userData.user,
            postCount: postData.postCount,
            commentCount: commentData.commentCount
        }
        console.log(summary);
    })