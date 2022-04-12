import { getCharacters, getView,displayContent } from '../repositories/api.js';
import  { displayCard }  from '../../components/card.js'
import  { displayModal }  from '../../components/modal.js'

const characters_btn = document.getElementById("characters-button");

function useCharacter(page) {
  getView("characters")
    .then((response) => {
      displayContent.innerHTML = response;
      getCharacters(page)
      .then((data) => {
      localStorage.clear();
    
      data.results.map(
        ({ id, name, status, image, species, gender, type }) => {
          //insertamos las tarjetas
          displayCard(id,image,name,'character');
          //mapeamos la informacion de las modales
          const modalInformation= {
            label: 'character',
            id: id,
            title: name,
            image: image,
            tags: [
              {
              title:'status: ',
              content: status,
              }, 
              {
                title:'specie: ',
                content: species,
              },
              {
                title:'gender: ',
                content: gender,
              },
              {
                title:'type: ',
                content: type || 'Opps there no info',
              },
            ]
          }
          //insertamos las modales
          displayModal(modalInformation)
        }
      );
      })
      .catch((error) => {
      console.log(error);
    
      const errorMessage = document.createElement("p");
      errorMessage.innerHTML = `Error al obtener la informacion`;
    
      const container = document.getElementById("content-page");
      container.appendChild(errorMessage);
      });
    })
    .catch(() => {
      alert("No existe el documento solicitado");
    });
}

characters_btn.addEventListener("click", () => {
  displayContent.innerHTML = "";
  useCharacter('1');
});
//contenido por defecto para la pagina
useCharacter('1');


