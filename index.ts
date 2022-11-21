const but: any = document.querySelector('input');
const parrafo: any = document.querySelector('p')
but.addEventListener('click', getData)

  async function getData() {
    try { 
    const data = await fetch('https://icanhazdadjoke.com/slack')
    const json = await data.json(); 
    //console.log(json);
   // console.log(json.attachments)
    parrafo.textContent =  json.attachments[0].fallback
    //console.log(parrafo.textContent)
   }
    catch(e) {
      console.error('newError', e);
   }
  }

  const reportAcudits:any = []

function puntuation1() {


  const day:any = new Date();
  let text:any = day.toISOString();

  reportAcudits.push({puntuation: "1", joke: parrafo.textContent, date: text})
  console.log(reportAcudits)
  
}

function puntuation2() {

  const day:any = new Date();
  let text:any = day.toISOString();

  reportAcudits.push({puntuation: "2", joke: parrafo.textContent, date: text})
  console.log(reportAcudits)
  
}

function puntuation3() {

  
  const day:any = new Date();
  let text:any = day.toISOString();

  reportAcudits.push({puntuation: "3", joke: parrafo.textContent, date: text})
  console.log(reportAcudits)
  
}

let lon: number
let lat: number
let temperature: any = document.querySelector(".temp");
let summary: any = document.querySelector(".summary");
let loc: any = document.querySelector(".location");
let icon: any = document.querySelector(".icon");
const kelvin: number = 273.15

window.addEventListener("load", () => {

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position)
      lon = position.coords.longitude
      lat = position.coords.latitude

      const apiID = "15befd82cc7552f75fdf77cd50fac96b";
      const urlbase = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiID}&lang=sp`;
    
      fetch(urlbase)
      .then((response) => {
              
        return response.json()
      })

      .then((data) => {
        //console.log(data)

        temperature.textContent = Math.floor(data.main.temp - kelvin) + "ºC";
        summary.textContent = data.weather[0].description;
        loc.textContent =data.name + ", " + data.sys.country;

      })
    
    })
  }

})

