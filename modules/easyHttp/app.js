const http= new easyHTTP;

// // GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts){ // were passing the callback
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);// and were consolelog that were passed in to callback()
//     }
// });

// // Get single post

// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,post){ // were passing the callback
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);// and were consolelog that were passed in to callback()
//     }
// });

// Create data
const data = {
    title:'Custom Post',
    body:'This is a custom post'
};

//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);// and were consolelog that were passed in to callbac
//     } 
// });


// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);// and were consolelog that were passed in to callbac
//     } 
// });



// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){ // were passing the callback
    if(err){
        console.log(err);
    }else{
        console.log(response);// and were consolelog that were passed in to callback()
    }
});





