const but: any = document.querySelector('button');
const parrafo: any = document.querySelector('p')
but.addEventListener('click', getData)

  async function getData() {
    try { 
    const data = await fetch('https://icanhazdadjoke.com/slack')
    const json = await data.json(); 
    console.log(json);
    console.log(json.attachments)
    parrafo.textContent =  json.attachments[0].fallback
   }

    catch(e) {
      console.error('newError', e);
   }
  }


