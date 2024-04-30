// Afegeix aquí el codi de JS per a la pàgina pokemon.html
// ex1
async function getPokemonInfo(id) {
    // Fetch de les dades
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        // Verifiquem response
        if (!response.ok) {
            throw new Error(`Error fetching Pokemon data`);
        }

        // Persejem a json
        const data = await response.json();
        
        // Retornem dades del pokemon
        return {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            abilities: data.abilities.map(ability => ability.ability.name),
            sprites: data.sprites
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// ex2
async function displayPokemonInfo(id) {
    try {
        // Agafem dades de l'API
        const pokemonInfo = await getPokemonInfo(id);
        
        // Actualitzem elements de l'html
        document.getElementById('name').textContent = pokemonInfo.name;
        document.getElementById('height').textContent = `Height: ${pokemonInfo.height} m`;
        document.getElementById('weight').textContent = `Weight: ${pokemonInfo.weight} kg`;
        
        // Creem un contenidor per les abilitats
        const abilitiesContainer = document.getElementById('abilities');
        abilitiesContainer.innerHTML = '';
        
        // Llistem les abilitats amb descripció en anglès utilitzant l'effect_entries
        for (const ability of pokemonInfo.abilities) {
            const abilityElement = document.createElement('li');
            abilityElement.classList.add('mb-2');
            
            const abilityResponse = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`);
            const abilityData = await abilityResponse.json();
            const abilityName = abilityData.names.find(name => name.language.name === 'en').name;
            const abilityDescription = abilityData.effect_entries.find(entry => entry.language.name === 'en').effect;
            
            abilityElement.innerHTML = `
                <h4 class="font-bold">${abilityName}</h4>
                <p>${abilityDescription}</p>
            `;
            abilitiesContainer.appendChild(abilityElement);
        }
        
        // Actualitzem sprite
        document.getElementById('sprite').src = pokemonInfo.sprites.front_default;
        document.getElementById('sprite').alt = pokemonInfo.name;
    } catch (error) {
        console.error(error);
        alert(`Error: ${error.message}`);
    }
}

displayPokemonInfo(1);