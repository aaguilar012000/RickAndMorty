function displayModal(data){
  //se crea la modal
  const modalDefault = document.createElement("div");
  modalDefault.classList.add("modal","fade");
  modalDefault.setAttribute("id", `chacter-${data.id}`);
  modalDefault.setAttribute("data-bs-backdrop", 'static');
  modalDefault.setAttribute("data-bs-keyboard", 'false');
  modalDefault.setAttribute("tabindex", '-1');
  modalDefault.setAttribute("aria-hidden", 'true');
  modalDefault.setAttribute("aria-labelledby", `chacter-${data.id}`);

  const modal = `
  <div class="modal-dialog center-modal">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Details of ${data.label}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="text-center py-4 bg-success">
        <h4 class="modal-title text-white">${data.title}</h5>
      </div>

      <div class="modal-columns" >
        <div id="modal-column-${data.id}">
        </div>

        <div id="tags-column-${data.id}">
        </div>
      </div>
    </div>
  </div>
  `;

  const container = document.getElementById("content-page");
  container.appendChild(modalDefault);


  modalDefault.innerHTML = modal;

  //se le insertan los atributos a la modal
  const image = document.createElement("img");
  image.classList.add('modal-image');
  image.setAttribute('alt',`${data.title}`);
  image.src = data.image;

  document.getElementById(`modal-column-${data.id}`).appendChild(image);

  data.tags.map(({ title, content }) => {
    const tagbox = document.createElement("div");

    const tag = `
      <div class="shadow p-3 mb-5 bg-body rounded">
        <span class="fw-bold">${title}</span>
        <span>${content}</span>
      </div>`
    ;

    tagbox.innerHTML = tag;

    document.getElementById(`tags-column-${data.id}`).appendChild(tagbox);
  });


}

export {
  displayModal,
}