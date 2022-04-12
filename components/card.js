function displayCard(id,image,content,label){
  //se crea la tarjeta
  const defaultCard = document.createElement("div");
  
  const card = `
    <div id="character-${id}" class="col card-complete">
      <div class="card shadow-sm m-4">
        <img class="card-image-size" src="${image}" />
        
        <div class="card-body">
          <span class="card-text fw-bold fs-4 my-4">${content}</span>
          <div class="text-center">
          <button type="button" class="btn btn-outline-success btn-lg" data-bs-toggle="modal" data-bs-target="#chacter-${id}" mx-auto text-center">
            Detail of ${label}
          </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  `;
  defaultCard.innerHTML = card;

  const container = document.getElementById("content-page");
  container.appendChild(defaultCard);
}

export {
  displayCard
}
