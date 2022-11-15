const url = 'https://icanhazdadjoke.com/slack'

function start() {
  fetch(url)
    .then(res => res.json())
    .then((data) => console.log(data));
  
}


