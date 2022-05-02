import { getLocations, getView,displayContent } from '../repositories/api.js';
import  { displayCard }  from '../../components/card.js'
import  { displayModal }  from '../../components/modal.js'

const location_btn = document.getElementById("locations-button");
const image = '../../assets/image/planets.jpg';

function useLocations(page) {
  getView("locations")
    .then((response) => {
      localStorage.clear()
      displayContent.innerHTML = response;

      getLocations(page)
        .then((data) => {
          data.results.map(
            ({ id,name,type,dimension}) => {
              //insertamos las tarjetas
              const  episodeName = `${type}: ${name}`;
              displayCard(id,image,name,'dimension');

              //mapeamos la informacion de las modales
              const modalInformation= {
                label: 'dimension',
                id: id,
                title: episodeName,
                image: image,
                tags: [
                  {
                  title:'Name: ',
                  content: name,
                  }, 
                  {
                    title:'Type: ',
                    content: type,
                  },
                  {
                    title:'Dimension: ',
                    content: dimension,
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

location_btn.addEventListener("click", () => {
  displayContent.innerHTML = "";
  useLocations('1');
});