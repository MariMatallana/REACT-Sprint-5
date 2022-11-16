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
