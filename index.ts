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


