const http= new easyHTTP;

// GET Posts
const post= http.get('https://jsonplaceholder.typicode.com/posts');

console.log("console",post);