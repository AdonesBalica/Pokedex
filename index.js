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
        const { name, img, id } = e;
        mountComponentDiv(name, img, id);
    });
}

getPokemon();
inputValue.addEventListener("input", async () => {
    let filtrarPokemon = document.querySelectorAll(".frame-pokemon");
    filtrarPokemon.forEach((element) => {
        let name = element.children[1].textContent.toLowerCase();
        if (name.includes(inputValue.value.toLowerCase())) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    });
});

/*Montar as divs */
function mountComponentDiv(name, url, id) {
    const containerPokemos = document.querySelector(".container-pokemos");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const img = document.createElement("img");
    div.classList.add("frame-pokemon");
    div.id = id;
    p.classList.add("pokemon-name");
    img.classList.add("image-pokemon")

    p.innerHTML = name;
    img.src = url;
    div.appendChild(p);
    div.appendChild(img);
    containerPokemos.appendChild(div);
}

/*Montar o modalzinho mané*/
function mountModalComonent(event) {
    console.log(event);
}

//Evento dos clicks para abrir o modalzin
document.addEventListener("click", (event) => {
    const element = event.target;
    if (element.classList.contains("frame-pokemon")) {
        mountModalComonent(element);
    }
    if (element.classList.contains('pokemon-name') ||
        element.classList.contains("image-pokemon")) {
        mountModalComonent(element.parentNode)
    }
});

