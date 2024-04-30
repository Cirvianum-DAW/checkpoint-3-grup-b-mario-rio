// Afegeix aquí el codi de JS per a la pàgina pokemon.html


async function getPokemonInfo(idOrName) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return {
        id: data.id,
        

      };
    } catch (error) {

    }
  }