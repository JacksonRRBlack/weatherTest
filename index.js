var city = ['Волгоград', 'Владивосток'];
var temp = [];
var humidity = [];
var speed = [];
var pressure = [];
var description = [];
jQuery(document).ready(function ($) {

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/group?id=472757,2013348&APPID=001b0f58045147663b1ea518d34d88b4&units=metric&cnt=10",
        dataType: 'json',
        success: function (data) {

            temp = [Math.round(data.list[0].main.temp), Math.round(data.list[1].main.temp)];
            humidity = [data.list[0].main.humidity, data.list[1].main.humidity];
            speed = [data.list[0].wind.speed, data.list[1].wind.speed];
            pressure = [data.list[0].main.pressure, data.list[1].main.pressure];
            description = [data.list[0].weather[0].main, data.list[1].weather[0].main];
            var todayTemp = document.querySelector('.todayTemp');
            var setCity = document.querySelector('.city');
            var setHumidity = document.querySelector('.humidity');
            var setSpeed = document.querySelector('.speed');
            var setPressure = document.querySelector('.pressure');
            var img = document.createElement("img");
            var src = document.querySelector('.weather');
            var i = 0;

            function setAll() {
                todayTemp.textContent = temp[i];
                setCity.textContent = city[i];
                setHumidity.textContent = humidity[i] + '%';
                setSpeed.textContent = speed[i] + ' м/с';
                setPressure.textContent = pressure[i] + ' мм рт.ст.';

                if (description[i] === "Clear") {
                    img.src = "animated/Clear.svg";
                } else if (description[i] === "Clouds") {
                    img.src = "animated/Clouds.svg";
                } else if (description[i] === "Thunderstorm") {
                    img.src = "animated/Thunderstorm.svg";
                } else if (description[i] === "Drizzle") {
                    img.src = "animated/Drizzle.svg";
                } else if (description[i] === "Rain") {
                    img.src = "animated/Rain.svg";
                } else if (description[i] === "Snow") {
                    img.src = "animated/Snow.svg";
                } else {
                    img.src = "animated/cloudy.svg";
                }
                src.appendChild(img);

                i++;
                // console.log('i', i);
                if (i > temp.length - 1) {
                    i = 0;
                }
                timer = setTimeout(setAll, 3970);
            };
            setAll();
        }
    });
});