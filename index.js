async function apiDada() {
    const apiPokemos = fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
    const reponseApi = await apiPokemos;
    return await reponseApi.json();
}

const inputValue = document.querySelector(".input-search");
const loadMorePosts = document.querySelector(".load-cards");

let page = 0;
let cardsPerPage = 10;
let nextCard = 10;
let nextPage = 10;

function pagination() {
    getPokemon()
    nextPage = page + cardsPerPage + nextCard
    page = page + cardsPerPage
    return nextPage
}

loadMorePosts.addEventListener("click", () => {
    pagination()
})

async function getPokemon() {
    let apiRepose = await apiDada();
    // aqui vai ser incrementado a questão da páginação onde tá o 24

    apiRepose.pokemon.slice(page, nextPage).forEach((e, i) => {
        let name = e.name
        let img = e.img
        mountComponentDiv(name, img);
    })

}
getPokemon()

/*Montar as divs */
function mountComponentDiv(name, url) {
    const containerPokemos = document.querySelector(".container-pokemos");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const img = document.createElement("img");
    div.classList.add("frame-pokemon");
    p.classList.add("pokemon-name");

    p.innerHTML = name;
    img.src = url;
    div.appendChild(img);
    div.appendChild(p);
    containerPokemos.appendChild(div);
}
