const user={emial:'jdoe@gmail.com'};


try{
    // Produce a ReferenceError
    // myFunction();
    
    // Produce a Type Error
    // null.myFunction();
    
    
    // Prosuce Syntax Error
    // eval('Hello World');
    
    // Will produce URIError
    // decodeURIComponent('%');
    
    if(!user.name){
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }
    
}catch(e){
    console.log(`User Error: ${e.message}`);
    // console.log('ItS NulL!');
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
} finally{
    console.log('Finally runs reguardless of result...');
    
}


console.log('Program continues...');