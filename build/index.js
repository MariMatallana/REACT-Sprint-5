"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const but = document.querySelector('input');
const parrafo = document.querySelector('p');
but.addEventListener('click', getData);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetch('https://icanhazdadjoke.com/slack');
            const json = yield data.json();
            //console.log(json);
            // console.log(json.attachments)
            parrafo.textContent = json.attachments[0].fallback;
            //console.log(parrafo.textContent)
        }
        catch (e) {
            console.error('newError', e);
        }
    });
}
const reportAcudits = [];
function puntuation1() {
    const day = new Date();
    let text = day.toISOString();
    reportAcudits.push({ puntuation: "1", joke: parrafo.textContent, date: text });
    console.log(reportAcudits);
}
function puntuation2() {
    const day = new Date();
    let text = day.toISOString();
    reportAcudits.push({ puntuation: "2", joke: parrafo.textContent, date: text });
    console.log(reportAcudits);
}
function puntuation3() {
    const day = new Date();
    let text = day.toISOString();
    reportAcudits.push({ puntuation: "3", joke: parrafo.textContent, date: text });
    console.log(reportAcudits);
}
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273.15;
window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log(position)
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const apiID = "15befd82cc7552f75fdf77cd50fac96b";
            const urlbase = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiID}&lang=sp`;
            fetch(urlbase)
                .then((response) => {
                return response.json();
            })
                .then((data) => {
                //console.log(data)
                temperature.textContent = Math.floor(data.main.temp - kelvin) + "ºC";
                summary.textContent = data.weather[0].description;
                loc.textContent = data.name + ", " + data.sys.country;
            });
        });
    }
});
