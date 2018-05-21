class UI{
    constructor(){
        this.location   = document.getElementById("w-location");
        this.desc       = document.getElementById("w-desc");
        this.string     = document.getElementById("w-string");
        this.details    = document.getElementById("w-details");
        this.humidity   = document.getElementById("w-humidity");
        this.preasure   = document.getElementById("w-preasure");
        this.sunset   = document.getElementById("w-sunset");
        this.wind   = document.getElementById("w-wind");
    }
    paint(weather){
        this.location.textContent=weather.description;
        this.desc.textContent=weather.item.condition.text;
        this.string.textContent=weather.item.condition.temp;
        
        this.humidity.textContent=`Relative Humiditfffy: ${weather.atmosphere.humidity}% `;
        this.sunset.textContent=`Sunrise: ${weather.astronomy.sunrise}`;
        this.preasure.textContent=`Preasure: ${weather.atmosphere.pressure} hPa`;
        this.wind.textContent=`Wind chill: ${weather.wind.chill} Wind speed: ${weather.wind.speed} Wind direction: ${weather.wind.direction}`;
    }
}