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
            for (var j = 0; j < city.length; j++) {
                temp[j] = Math.round(data.list[j].main.temp);
                humidity[j] = data.list[j].main.humidity;
                speed[j] = data.list[j].wind.speed;
                pressure[j] = data.list[j].main.pressure;
                description[j] = data.list[j].weather[0].main;
            }
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

                var animShow = document.getElementById("widget");
                setInterval(function() {
                    animShow.classList.add("anim_show1");
                }, 2000);
                setInterval(function() {
                    animShow.classList.add("anim_show2");
                }, 2000);
                i++;
                // console.log('i', i);
                if (i > temp.length - 1) {
                    i = 0;
                }
                timer = setTimeout(setAll, 4000);
            };
            setAll();

        }
    });
});


/*
var e = document.getElementById("watchme"); - нужные классы
e.addEventListener("animationstart", listener, false);
e.addEventListener("animationend", listener, false);
e.addEventListener("animationiteration", listener, false);

e.className = "slidein";*/