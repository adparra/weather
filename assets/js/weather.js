import {weather_data} from './data.js';

let [ciudad1,ciudad2,ciudad3]=weather_data;
let loadDayForecastData = (ciudad) => {
    let {city,date,cloudiness,wind,rainfall,maxtemperature,mintemperature,forecast_today}=ciudad;
    let [tarde,noche]= forecast_today;
    let{forecast:forecast_tarde,icon:icon_tarde,lapse:lapse_tarde,temperature:temperature_tarde,text:text_tarde}
    = tarde;
    let {forecast:forecast_noche,icon:icon_noche,lapse:lapse_noche,temperature:temperature_noche,text:text_noche}
    = noche;

    let cambio= (id,cambio)=>{
        (document.getElementById(id)).innerHTML=cambio;
    }
    cambio('city',city);
    cambio('date',date);
    cambio('cloudiness',cloudiness);
    cambio('wind',wind);
    cambio('rainfall',rainfall);
    cambio('maxtemperature',maxtemperature);
    cambio('mintemperature',mintemperature);
    
    cambio('late_icon',icon_tarde);
    cambio('late_forecast',forecast_tarde);
    cambio('late_temperature',temperature_tarde);
    cambio('late_text',text_tarde);

    cambio('night_icon',icon_noche);
    cambio('night_forecast',forecast_noche);
    cambio('night_temperature',temperature_noche);
    cambio('night_text',text_noche);
}

let loadWeekForecastData = (ciudad) => {
	let{forecast_week}= ciudad;
    let[uno,dos,tres,cuatro,cinco,seis,siete]= forecast_week;
    let mensaje_estructurado= (elemento)=>{
       let mensaje= `
            <div class="d-flex flex-column">
                <h6 class="mb-1 text-dark font-weight-bold text-sm">${elemento.text}</h6>
                <span class="text-xs">${elemento.date}</span>
            </div>
            <div class="d-flex align-items-center ">
                <span class="font-weight-bold text-dark mx-2">${elemento.temperature.max}</span> |  <span class="text-dark mx-2">${elemento.temperature.min}</span>
                <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${elemento.icon}</i></div>
            </div>`;
        return mensaje;
    }
    let listOfElements = document.getElementsByClassName('list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg');
    let[first,second,third,fourth,fifth,sixth,seventh]=listOfElements;
    first.innerHTML= mensaje_estructurado(uno);
    second.innerHTML= mensaje_estructurado(dos);
    third.innerHTML= mensaje_estructurado(tres);
    fourth.innerHTML= mensaje_estructurado(cuatro);
    fifth.innerHTML= mensaje_estructurado(cinco);
    sixth.innerHTML= mensaje_estructurado(seis);
    seventh.innerHTML= mensaje_estructurado(siete);
}

document.addEventListener("DOMContentLoaded", (event) => {
    loadDayForecastData(ciudad1);
    let element = document.getElementById("loadinfo");

    element.addEventListener('click', (event) => {
        loadWeekForecastData(ciudad1);
    });
});
