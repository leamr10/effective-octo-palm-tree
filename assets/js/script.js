
var apiKey = '7facfa5579c58d1fb4bd2c24b9dea9e0';
var searchBtn = document.querySelector('search');
var searchInput = document.querySelector('input');

searchBtn.addEventListener('click', handleSearch);
function handleSearch ( ) {
    if (!searchInput)
    return;

    var city = searchInput.value;
fetchWeather(city)
}

function fetchWeather(city) {
    var apiUrlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=imperial'
    fetch (apiUrlWeather).then(response => response.json ()).then(data => {
        console.log(data);
        displayWeather(data)
        fetchForecast(data)
    
    })
}

function fetchForecast(data) {
    var apiUrlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=${apiKey}'
    fetch(apiUrlForecast).then(response => response.json( )).then(data => (
        console.log(data)
    ))
}

function displayWeather (data) {
document.getElementById('city').textContent= data.name;
document.getElementById('date').textContent= data.dt;
document.getElementById('icon').src='https://openweathermap.org/img/w/${data.weather[0].icon}.png'
document.getElementById('temp').textContent = data.main.temp + ' F'
document.getElementById('humid').textContent = data.main.humidity + ' %'
document.getElementById('wind').textContent = data.wind.speed + ' mph'
}

var changeDate = dayjs(data.dt).format('MMM, D, YYYY');
$('#date').text(changeDate);