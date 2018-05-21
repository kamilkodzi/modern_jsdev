class GitHub{
    constructor(){
        this.client_id='8fc083eb9c8260aa1e47';
        this.client_secret='af4d861af44272b1a6f7082899964399557c33f3';
        this.repos_count=5;
        this.repos_sort='created:asc';
    }
    
    async getUser(user){
        const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile=await profileResponse.json();
        const repos=await repoResponse.json();
        
        return{
            profile,
            repos
        };
    }
}