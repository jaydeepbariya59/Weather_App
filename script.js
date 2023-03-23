const inputFieldRef = document.getElementById('city');
const inputBtnRef = document.getElementById('search-btn');

const sunriseTime = document.getElementById('sunrise-time');
const sunsetTime = document.getElementById("sunset-time");

const windSpeed = document.getElementsByClassName('wind-speed');
const windDegrees = document.getElementById('wind-degrees');

const tempMax = document.getElementById('max-temp');
const tempMin = document.getElementById('min-temp');
const tempFill = document.getElementById('fill-temp');

const humidity = document.getElementsByClassName('humidity');
const cloudPct = document.getElementById('cloud-pct');

const options = {
    method : "GET",
    headers : {
        'X-Api-Key' : '<API_KEY_FROM_API>'
    }
}

//getting the city name
inputBtnRef.addEventListener("click", ()=>{
    fetchWeather(inputFieldRef.value);
});


const fetchWeather = (city) =>{

    fetch('https://api.api-ninjas.com/v1/weather?city='+city, options)
        .then((response)=> response.json())
        .then((response)=>{

            const riseTime = new Date(response.sunrise);
            const setTime = new Date(response.sunset);

            sunriseTime.innerHTML = riseTime.getHours() +" : "+ riseTime.getMinutes() ;
            sunsetTime.innerHTML = setTime.getHours() +" : "+setTime.getMinutes() ;

            windSpeed[0].innerHTML = response.wind_speed ?? 0;
            windSpeed[1].innerHTML = response.wind_speed ?? 0;
            windDegrees.innerHTML = response.wind_degrees ?? 0;

            temp[0].innerHTML = response.temp ?? 0;
            temp[1].innerHTML = response.temp ?? 0;
            tempMax.innerHTML = response.max_temp ?? 0;
            tempMin.innerHTML = response.min_temp ?? 0;
            tempFill.innerHTML = response.feels_like ?? 0;

            humidity[0].innerHTML = response.humidity ?? 0;
            humidity[1].innerHTML = response.humidity ?? 0;

            cloudPct.innerHTML = response.cloud_pct ?? 0;
        })
        .catch((error)=>{
            alert("Invalid City Name");
        })


}