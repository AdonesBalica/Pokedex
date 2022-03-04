async function apiDada() {
    const apiPokemos = fetch("https://pokeapi.co/api/v2/pokemon")
    const reponseApi = await apiPokemos
    return await reponseApi.json()

}


async function getPokemon() {
    let apiRepose = await apiDada()
    for (let i = 0; i < apiRepose.results.length; i++) {
        let name = apiRepose.results[i].name
        mountComponentDiv(name)
    }

}

getPokemon()

/*Montar as divs */
function mountComponentDiv(name) {
    const containerPokemos = document.querySelector('.container-pokemos')

    const div = document.createElement('div')
    const p = document.createElement('p')
    p.innerHTML = name
    div.appendChild(p)
    containerPokemos.appendChild(div)
}


