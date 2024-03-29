export const searchPokemon = async (pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        return await response.json();

    } catch (error){
        console.log("ta dando erro aqui querido", error);
    }
}

export const getPokemon = async (limit = 151, offset = 0) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        return await response.json();

    } catch (error){
        console.log("ta dando erro aqui querido", error);
    }
}

export const getPokemonData = async (url) => {
    try{
        const response = await fetch(url);
        return await response.json();

    } catch (error){
        console.log("ta dando erro aqui querido", error);
    }
}