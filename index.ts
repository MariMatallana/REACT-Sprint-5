const but: any = document.querySelector('button');
const parrafo: any = document.querySelector('h4')
but.addEventListener('click', getData)

  async function getData() {
    try { 
    const data = await fetch('https://icanhazdadjoke.com/slack')
    const json = await data.json(); 
    console.log(json);
    console.log(json.fallback, json.username)
    parrafo.textContent =  8
   }

    catch(e) {
      console.error(e);
   }
  }


