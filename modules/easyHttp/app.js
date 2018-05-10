const http= new easyHTTP;

// GET Posts
http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){ // were passing the callback
    if(err){
        console.log(err);
    }else{
        console.log(posts);// and were consolelog that were passed in to callback()
    }

    
});

