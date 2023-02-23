import pokemonApi from "@/api/pokemonApi";

const getPokemonArray = () => {
  const pokemonArray = Array.from(Array(600));
  return pokemonArray.map((_, index) => index + 1);
};

const getPokemonsName = async ([first, second, third, fourth] = []) => {
  const promises = [
    pokemonApi.get(`/${first}`),
    pokemonApi.get(`/${second}`),
    pokemonApi.get(`/${third}`),
    pokemonApi.get(`/${fourth}`),
  ];

  const resp = await Promise.all(promises).then((data) => data);

  const fullPokemons = resp.map(({ data: { name, id } }) => {
    return { name, id };
  });

  return fullPokemons;
};

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemonArray().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonsName(mixedPokemons.splice(0, 4));
  return pokemons;
};

export default getPokemonOptions;
