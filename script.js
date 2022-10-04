import { default as pokemonArray } from "./data/pokemon.js";

const container = document.querySelector(".card-container");
const searchButton = document.querySelector(".searching");
const enterStuff = document.querySelector("#form");

pokemonArray.forEach((pokemon) => {
  const separateTypes = pokemon.types.join(" & ");
  const capitalName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  container.innerHTML += `<div class="card">
    <img class="card__image"src="${pokemon.sprite}" alt="${pokemon.name}">
    <div class="card__content">
    <h1 class="card__heading">${capitalName}
    </h1>
    <p class="card__text">${capitalName} (#${pokemon.id}) is a ${separateTypes} type pokemon.</p>
    </div>
    </div>`;
});

const findPokemon = (e) => {
  e.preventDefault();
  const searchInput = document.querySelector("#query").value;
  const filteredArr = pokemonArray.filter((pokemon) => {
    if (
      pokemon.types.includes(`${searchInput}`) ||
      pokemon.name == searchInput ||
      pokemon.id === Number(searchInput)
    ) {
      return true;
    } else {
      return false;
    }
  });
  container.innerHTML = "";

  filteredArr.forEach((pokemon) => {
    const separateTypes = pokemon.types.join(" & ");
    const capitalName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    container.innerHTML += `<div class="card">
      <img class="card__image"src="${pokemon.sprite}" alt="${pokemon.name}">
      <div class="card__content">
      <h1 class="card__heading">${capitalName}
      </h1>
      <p class="card__text">${capitalName} (#${pokemon.id}) is a ${separateTypes} type pokemon.</p>
      </div>
      </div>`;
  });

  if (searchInput === "") {
    pokemonArray.forEach((pokemon) => {
      const separateTypes = pokemon.types.join(" & ");
      const capitalName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
      container.innerHTML += `<div class="card">
        <img class="card__image"src="${pokemon.sprite}" alt="${pokemon.name}">
        <div class="card__content">
        <h1 class="card__heading">${capitalName}
        </h1>
        <p class="card__text">${capitalName} (#${pokemon.id}) is a ${separateTypes} type pokemon.</p>
        </div>
        </div>`;
    });
  }
};
enterStuff.addEventListener("submit", findPokemon);

// next step to refractor

//you can search for ID, name and type
//if you have nothing and search it will give everything back
