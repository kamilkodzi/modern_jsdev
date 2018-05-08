document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    // Create an XHR Object
    const xhr= new XMLHttpRequest();
    
    // OPEN
    
    xhr.open('GET','ajaxXHRMethods/data.txt',true);
    
    // New syntax
    xhr.onload=function(){
        if(this.status===200){
            // console.log('READY STATE', xhr.readyState);
            // console.log(this.responseText);
            document.getElementById("output").innerHTML=`<h1>${this.responseText}</h1>`;
            
        }
    };
    
    
    // Optional - used for spinners/loaders
    xhr.onprogress= function(){
        console.log('READY STATE', xhr.readyState);
    };
    
    xhr.onerror=function(){
        console.log('Request error...');
    };
    
    
    //OLD SYNTAX
    // xhr.onreadystatechange= function(){
    //     console.log('READY STATE', xhr.readyState);
    //   if(this.status===200 && this.readyState===4){ 
    //       console.log(this.responseText);
    //   }
        
    // };
    
    
    xhr.send();
    
        // readyState Values
        // 0: request not initialized
        // 1: server connection established
        // 2: request recieved
        // 3: processing request
        // 4 : request finished and response is ready
        
    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
    
}