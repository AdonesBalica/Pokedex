async function apiDada() {
    const apiPokemos = fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    const reponseApi = await apiPokemos
    return await reponseApi.json()
}


async function getPokemon() {
    let apiRepose = await apiDada()
    // aqui vai ser incrementado a questão da páginação onde tá o 24
    for (let i = 0; i < 24; i++) {
        let { name, img } = await apiRepose.pokemon[i]
        mountComponentDiv(name, img)
    }
}
getPokemon()


/* paginação */
const inputValue = document.querySelector('.input-search')

inputValue.addEventListener('input', (e) => {
    let inputText = e.target.value.toLowerCase()
    let cardsPok = document.querySelectorAll('.frame-pokemon')
    let namePokemon = document.querySelector('.pokemon-name')

    cardsPok.forEach((element) => {
        let title = element.querySelector('p')
        if (title.textContent.toLocaleLowerCase().includes(inputText)) {
            title.parentNode.style.display = 'flex'
        } else {
            title.parentNode.style.display = 'none'
        }
    });
})

/*Montar as divs */
function mountComponentDiv(name, url) {
    const containerPokemos = document.querySelector('.container-pokemos')
    const div = document.createElement('div')
    const p = document.createElement('p')
    const img = document.createElement('img')
    div.classList.add('frame-pokemon')
    p.classList.add('pokemon-name')

    p.innerHTML = name
    img.src = url
    div.appendChild(img)
    div.appendChild(p)
    containerPokemos.appendChild(div)
}


