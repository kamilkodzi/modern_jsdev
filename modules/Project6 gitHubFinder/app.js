// Init GitHub
const github=new GitHub;
// Init UI
const ui = new UI;

// Search input
const searchUser= document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e)=>{
    // Get inut text
    const userText=e.target.value;
    
    if(userText!==''){
        // Make HTTP call
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message==='Not Found'){
               //Show alert
               ui.showAlert('User not found','alert alert-danger');
            }else{
              // Show profile
              console.log(data);
              ui.showProfile(data.profile);
              ui.showRepos(data.repos);
            }
        });
    }else{  
        // Clear profile
        ui.clearProfile();
        
    }
});