document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getExternal);

//Get Local text file
function getText(){
    fetch('fetchAPI/test.txt')
    .then(res=>res.text())
    .then(data=>{ // there should be arrow function- it will be soon
       console.log(data); 
       document.getElementById('output').innerHTML=data;
    })
    .catch(err=>console.log(err));
}

//Get Local json file
function getJson(){
    fetch('fetchAPI/post.json')
    .then(res=>res.json())
    .then(data=>{ // there should be arrow function- it will be soon
       console.log(data);
       let output = '';
       data.forEach(function(post){
          output+=`<li>${post.title}</li>`;
       });
       document.getElementById('output').innerHTML=output;
    })
    .catch(err=>console.log(err));
}

//Get External API
function getExternal(){
    fetch('https://api.github.com/users')
    .then(res=>res.json())
    .then(data=>{ // there should be arrow function- it will be soon
       console.log(data);
       let output = '';
       data.forEach(function(user){
          output+=`<li>${user.login}</li>`;
       });
       document.getElementById('output').innerHTML=output;
    })
    .catch(err=>console.log(err));
}