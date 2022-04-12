const rick_And_Morty_Api = "https://rickandmortyapi.com/api/";

const getView = async (view_name) => {
  const view = await fetch(`views/${view_name}.html`);
  return view.text();
};

const getCharacters = async (page) => {
  const chapters = await fetch(`${rick_And_Morty_Api}/character/?page=${page}`);
  return chapters.json();
};

const getLocations = async (page) => {
  const chapters = await fetch(`${rick_And_Morty_Api}/location/?page=${page}`);
  return chapters.json();
};

const getEpisodes = async (page) => {
  const chapters = await fetch(`${rick_And_Morty_Api}/episode/?page=${page}`);
  return chapters.json();
};

const displayContent = document.getElementById("display-content");

export {
  displayContent,
  getView,
  getCharacters,
  getLocations,
  getEpisodes,
};
