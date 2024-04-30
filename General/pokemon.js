// Afegeix aquí el codi de JS per a la pàgina pokemon.html
// ex1
async function getPokemonInfo(id) {
    // Fetch de les dades
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    
    // Verifiquem response
    if (!response.ok) {
      throw new Error(`Error`);
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
  }
  
  // ex2
  async function displayPokemonInfo(id) {
    // Agafem dades de l'API
    const pokemonInfo = await getPokemonInfo(id);
    
    // Actualitzem elements de l'html
    document.getElementById('name').textContent = pokemonInfo.name;
    document.getElementById('height').textContent = `Height: ${pokemonInfo.height} m`;
    document.getElementById('weight').textContent = `Weight: ${pokemonInfo.weight} kg`;
    
    // Creem un contenidor per les abilitats
    const abilitiesContainer = document.getElementById('abilities');
    abilitiesContainer.innerHTML = '';
    
    // Llistem les abilitats
    pokemonInfo.abilities.forEach(ability => {
      const abilityElement = document.createElement('li');
      abilityElement.classList.add('mb-2');
      abilityElement.innerHTML = `
        <h4 class="font-bold">${ability}</h4>
        <p>Descripció de l'habilitat</p>
      `;
      abilitiesContainer.appendChild(abilityElement);
    });
    
    // Actualitzem sprite
    document.getElementById('sprite').src = pokemonInfo.sprites.front_default;
    document.getElementById('sprite').alt = pokemonInfo.name;
  }
  

  displayPokemonInfo(1);