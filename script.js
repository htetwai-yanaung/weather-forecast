function dateSet(){
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    let day = date.getDay();
    let year = date.getFullYear();
    let month = date.getMonth();
    let h = date.getHours();
    let hh = h > 12 ? h-12 : h;
    let m = date.getMinutes();
    m = m < 10 ? '0'+m : m;
    let ampm = h < 12 ? 'AM' : 'PM';

    document.querySelector('#day').innerHTML = days[day] + " " + hh + ':' + m + " " + ampm;
    let dayTimeSection = document.querySelector('#time');
    if(h < 11){
        dayTimeSection.innerHTML = "GOOD MORNING";
    }else if(11 < h < 16){
        dayTimeSection.innerHTML = "GOOD AFTERNOON";
    }else if(16 < h < 20){
        dayTimeSection.innerHTML = "GOOD EVENING";
    }else{
        dayTimeSection.innerHTML = "GOOD NIGHT";
    }
    document.querySelector('#toDay').innerHTML = months[month] + " " + date.getDate() + " " + year;

}
dateSet();

function search(){
    let name = "Yangon";
    name = document.querySelector('#cityName').value;
    // let city = document.querySelector('#city').innerHTML = name;
    name = name.split(' ').join('').toLocaleLowerCase();
    getWeather(name);
    dateSet();
}

function getWeather(city){
    let apiKey = 'be6a7515c0ca7ad8181c2d023773f205';
    let aa = fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+apiKey)
        .then((res) => res.json())
        .then((data) => display(data));
    function display(data) {
        let description = data.weather[0]['description'];
        let wind = data.wind['speed'];
        let temp = data.main['temp'];    
        let humi = data.main['humidity'];
        let icon = data.weather[0]['icon'];
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#desc').innerHTML = description;
        document.querySelector('#speed').innerHTML = wind+"km/h";
        document.querySelector('#humi').innerHTML = humi+"%";
        document.querySelector('#deg').innerHTML = temp;
        document.querySelector('img').src = 'https://openweathermap.org/img/wn/'+ icon +'@2x.png';
    }
}

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('fadeOut');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }, 1000);
});

function dark() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        document.querySelector('.fa-solid').classList.add('fa-sun');
        document.querySelector('.fa-solid').classList.remove('fa-moon');
    } else {
        document.querySelector('.fa-solid').classList.add('fa-moon');
        document.querySelector('.fa-solid').classList.remove('fa-sun');
    }
}