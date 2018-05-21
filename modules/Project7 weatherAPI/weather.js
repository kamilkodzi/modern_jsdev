class Weather{
    constructor(city,state){
        this.city=city;
        this.state=state;
    }
    
    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.city}%2C%20${this.state}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
        
        const responseData=await response.json();
        
        return responseData.query.results.channel;
    }
    
    // Change weather location
    changeLocation(city,state){
        this.city=city;
        this.state=state;
    }
    
}