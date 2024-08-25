let input = document.getElementById("inp");
let btn = document.getElementById("btn");

btn.addEventListener("click", showWeather);

function showWeather() {
    let data = input.value;
    axios({
        method: 'GET',
        url: 'https://restcountries.com/v3.1/name/'+data,
    }).then(response => bringCity(response))
    .catch(hata => alert("ULKE BULUNAMADI KARDEŞ"))
    .then(() => console.log(""));



    document.querySelector('.turkey').innerHTML = `
    <div class="h1 turkey">${data}</div>
    `;


    axios({
        
        method : 'GET',
        url:'https://api.openweathermap.org/data/2.5/weather?q='+data+'&appid=bf5d42e026b2d379e7e09af6388bc2c9&lang=tr&units=metric'
    }).then(response => bringWeather(response))
    .catch(err => console.log(err));

    input.value = '';

    if(data == '') {
        alert("Boş alan bırakma suratına işerims")
    }
    
}

function bringCity(response) {
    document.querySelector('.city').innerHTML = `
    <div class="h3 city">${response.data[0].capital[0]}</div>
    `;
}

function bringWeather(response) {
    document.querySelector('.main').innerHTML = `
    <div class="h3 main">Description: ${response.data.weather[0].description}</div>
    <div class="h3 celc">Temperature: ${response.data.main.temp} C</div>
    <div class="h3 wind">Speed of Wind: ${response.data.wind.speed} mph</div>
    `;
}