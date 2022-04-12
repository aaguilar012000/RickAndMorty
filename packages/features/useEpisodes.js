import { getEpisodes, getView,displayContent } from '../repositories/api.js';
import  { displayCard }  from '../../components/card.js'
import  { displayModal }  from '../../components/modal.js'

const episode_btn = document.getElementById("episodes-button");
const image = 'http://localhost/rick_morty/assets/image/rickMorty.jpg';

function useEpisode(page) {
  getView("episodes")
    .then((response) => {
      localStorage.clear()
      displayContent.innerHTML = response;

      getEpisodes(page)
        .then((data) => {
          data.results.map(
            ({ id,name,air_date,episode,url,created}) => {
              //insertamos las tarjetas
              const  episodeName = `${name}: ${episode}`;
              displayCard(id,image,episodeName,'episode');

              //mapeamos la informacion de las modales
              const modalInformation= {
                label: 'episode',
                id: id,
                title: episodeName,
                image: image,
                tags: [
                  {
                  title:'air date: ',
                  content: air_date,
                  }, 
                  {
                    title:'episode: ',
                    content: episode,
                  },
                  {
                    title:'URL: ',
                    content: url,
                  },
                  {
                    title:'created: ',
                    content: created,
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

episode_btn.addEventListener("click", () => {
  displayContent.innerHTML = "";
  useEpisode('1');
});
