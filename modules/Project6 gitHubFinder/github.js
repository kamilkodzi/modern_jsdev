class GitHub{
    constructor(){
        this.client_id='8fc083eb9c8260aa1e47';
        this.client_secret='af4d861af44272b1a6f7082899964399557c33f3';
    }
    
    async getUser(user){
        const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile=await profileResponse.json();
        
        return{
            profile
        };
    }
}