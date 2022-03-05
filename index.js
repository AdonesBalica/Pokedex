async function apiDada() {
    const apiPokemos = fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
    const reponseApi = await apiPokemos;
    return await reponseApi.json();
}

const inputValue = document.querySelector(".input-search");

async function getPokemon() {
    let apiRepose = await apiDada();
    apiRepose.pokemon.forEach((e) => {
        let name = e.name
        let img = e.img
        mountComponentDiv(name, img);
    })
}

getPokemon()
inputValue.addEventListener('input', async () => {
    let filtrarPokemon = document.querySelectorAll('.frame-pokemon')

    filtrarPokemon.forEach((element) => {
        let name = element.children[1].textContent.toLowerCase()
        if (name.includes(inputValue.value.toLowerCase())) {
            element.style.display = 'flex'
        } else {
            element.style.display = 'none'
        }
    })
})

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
