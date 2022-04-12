function searchPage(value) {
  value = value.toUpperCase();

  const listCards = document.getElementById("content-page");
  const card_complete = listCards.querySelectorAll(".card-complete");

  for (const element of card_complete) {
    const card_info = element.innerText.toUpperCase();
    localStorage.setItem(`${card_info}`, element.innerHTML);
    element.remove();
  }

  for (const element in localStorage) {
    if (element.includes(value)) {
      const item = localStorage.getItem(element);
      const el = document.createElement("div");
      el.setAttribute("id", "card-complete");
      el.classList.add("card-complete");
      el.innerHTML = item;
      listCards.appendChild(el);
      localStorage.removeItem(element);
    }
  }

}

const searchInput = document.getElementById("mySearch");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  searchPage(value);
});

