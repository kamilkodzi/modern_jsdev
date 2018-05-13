const posts = [
        {title:"Post One", body:"This i post one"},
        {title:"Post One", body:"This i post one"}
    ];
    
function createPost(post,callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },2000);
}

function getPosts(){
    setTimeout(function(){
        let output='';
        posts.forEach(function(post){
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}


createPost({title:"Post three",body:"This is post three"},getPosts);
