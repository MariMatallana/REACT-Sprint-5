"use strict";
function start() {
    const joke = fetch('https://icanhazdadjoke.com/')
        .then(res => res.json())
        .then(answer => {
        console.log(joke);
        console.log(answer);
    });
}
