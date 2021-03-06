import { obtenerChiste } from './http-provider';

// Referencias de HTML
const body = document.body;
let btnOtro, olList;
let i = 1;

const crearChistesHtml = () => {

  const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary"> Otro chiste </button>

    <ol class="mt-2 list-group">

    </ol>
  `;

  const divChistes = document.createElement('div');
  divChistes.innerHTML = html;

  body.append(divChistes);

}

const eventos = () => {

  olList  = document.querySelector('ol');
  btnOtro = document.querySelector('button');

  btnOtro.addEventListener('click', async() => {
    // const chiste = await obtenerChiste();
    btnOtro.disabled = true;
    
    dibujarChiste( await obtenerChiste() );
    btnOtro.disabled = false;
  });

}

// Chiste { id, value }
const dibujarChiste = ( chiste ) => {
  const olItem = document.createElement('li');
  olItem.innerHTML = `${ i++ }.- <b>${ chiste.id }</b>: ${ chiste.value }`;
  olItem.classList.add('list-group-item');

  olList.append(olItem);
}


export const init = () => {
  crearChistesHtml();
  eventos();
}



