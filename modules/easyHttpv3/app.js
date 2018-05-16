const http=new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

// User Data
const data={
    name:"Gregory R Sroka",
    username:'srok@',
    emial:'sdjos@sda.com'
};

// Create Post
http.post('https://jsonplaceholder.typicode.com/users',data)
.then(data=>console.log(data))
.catch(err=>console.log(err));

// Update PUT
http.put('https://jsonplaceholder.typicode.com/users/2',data)
.then(data=>console.log(data))
.catch(err=>console.log(err));


// Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data=>console.log(data))
.catch(err=>console.log(err));
