const cities = ['Shanghai', 'Kolkata', 'Korba', 'Hyderabad'];
// const apikey = '09eddbcdc1msh1cf581d9ba12e90p1d700ajsn520c90628372';

const getWeather = (city) => {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '09eddbcdc1msh1cf581d9ba12e90p1d700ajsn520c90628372',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const cityName = document.getElementById('cityName');


    
    cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => {
    
    console.log(response);

    const cloud_pct = document.getElementById('cloud_pct');
    const feels_like = document.getElementById('feels_like');
    const humidity = document.getElementById('humidity');
    const min_temp = document.getElementById('min_temp');
    const max_temp = document.getElementById('max_temp');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    const temp = document.getElementById('temp');
    // const wind_degrees = document.getElementById('wind_degrees');
    const wind_speed = document.getElementById('wind_speed');

    cloud_pct.innerHTML = response.cloud_pct;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    sunrise.innerHTML = new Date (response.sunrise * 1000).toLocaleTimeString();
    sunset.innerHTML = new Date (response.sunset * 1000).toLocaleTimeString();
    temp.innerHTML = response.temp;
    // wind_degrees.innerHTML = response.wind_degrees;
    wind_speed.innerHTML =  response.wind_speed;
    updateTable(city, response);
})

.catch(err => console.log(err));
}
const submit = document.getElementById('submit');
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getWeather(city.value);
})

function updateTable(city ,data){
    const row = document.getElementById(city);
    if(row){
        row.querySelector('.Cloud_pct').textContent = data.cloud_pct;
        row.querySelector('.Feels_like').textContent = data.feels_like;
        row.querySelector('.Humidity').textContent = data.humidity;
        row.querySelector('.Max_temp').textContent = data.max_temp;
        row.querySelector('.Min_temp').textContent = data.min_temp;
        row.querySelector('.Sunrise').textContent = new Date (data.sunrise * 1000).toLocaleTimeString();
        row.querySelector('.Sunset').textContent = new Date(data.sunset * 1000).toLocaleTimeString();
        row.querySelector('.Temp').textContent = data.temp;
        row.querySelector('.Wind_degrees').textContent = data.wind_degrees;
        row.querySelector('.Wind_speed').textContent = data.wind_speed;
        
        
    }
}

cities.forEach(city => getWeather(city));
getWeather("Delhi");