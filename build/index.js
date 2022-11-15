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
const but = document.querySelector('button');
const parrafo = document.querySelector('p');
but.addEventListener('click', getData);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetch('https://icanhazdadjoke.com/slack');
            const json = yield data.json();
            console.log(json);
            console.log(json.attachments);
            parrafo.textContent = json.attachments[0].fallback;
        }
        catch (e) {
            console.error('newError', e);
        }
    });
}
