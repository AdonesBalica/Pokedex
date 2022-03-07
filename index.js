loadPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromises = [];
    for (let i = 1; i <= 150; i++) {
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(reponse => reponse.json()))
    }

    Promise.all(pokemonPromises)
        .then(pokemons => {
            createCardPokemon(pokemons)
        });
}

loadPokemon();


createCardPokemon = (pokemons) => {
    const ulContainer = document.querySelector('.ul-container')
    for (let i = 1; i < 150; i++) {
        const li = document.createElement('li')
        const img = document.createElement('img')

        const p = document.createElement('p')
        img.src = pokemons[i].sprites.front_default;
        p.innerHTML = pokemons[i].name

        li.appendChild(img)
        li.appendChild(p)
        ulContainer.appendChild(li)
    }
}