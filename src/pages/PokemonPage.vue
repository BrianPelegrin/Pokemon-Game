<template>
  <div v-if="pokemonId !== 0">
    <!-- <audio :controls="false" autoplay>
      <source src="@/assets/img_6652.mp3" type="audio/mp3" />
      Tu navegador no soporta audio HTML5.
    </audio> -->
    <h1>Quien es este pokemon?</h1>
    <PokemonPicture :show-pokemon="wins" :pokemon-id="pokemonId" />
    <!-- Pokemon Image -->
    <PokemonOption
      :pokemons-options="pokemonsArray"
      @select-pokemon="selectPokemon"
    />
  </div>
  <div v-else>
    <h1>Cargando...</h1>
    <img
      alt=""
      class="hCL kVc L4E MIw img-fluid"
      fetchpriority="auto"
      loading="auto"
      src="@/assets/pokeload.gif"
    />
  </div>
</template>

<script>
import PokemonOption from "@/components/PokemonOption.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";
import { requestAlert, winsAlert } from "@/helpers/alertsHelpers";
export default {
  components: {
    PokemonOption,
    PokemonPicture,
  },
  data() {
    return {
      pokemonsArray: [],
      pokemonId: 0,
      correctPokemon: null,
      wins: false,
    };
  },
  methods: {
    async setPokemonArray() {
      const randomPosition = Math.floor(Math.random() * 4);

      await setTimeout(async () => {
        this.pokemonsArray = await getPokemonOptions();

        this.pokemonId = this.pokemonsArray[randomPosition].id;

        this.correctPokemon = this.pokemonsArray[randomPosition].id;
      }, 1000);
    },

    selectPokemon(id) {
      const pokemonName = this.pokemonsArray.find(
        (pokemon) => pokemon.id === this.correctPokemon
      ).name;

      if (id === this.correctPokemon) {
        this.wins = true;
        setTimeout(() => {
          winsAlert();
        }, 1000);
      } else {
        requestAlert(pokemonName, this.correctPokemon);
      }
    },
  },
  mounted() {
    this.setPokemonArray();
  },

  // setup() {
  //   const pokemonId = ref(1);
  //   const pokemonsArray = [];
  //   const getRandomValue = () => Math.floor(Math.random() * 601);
  //   const setRandomValue = () => {
  //     pokemonId.value = getRandomValue();
  //   };
  //   onMounted(async () => {
  //     await getPokemonOptions().then((resp) => {
  //       console.log(resp[0]);
  //       pokemonsArray.push([...resp]);
  //     });
  //   });

  //   return {
  //     pokemonId,
  //     setRandomValue,
  //     pokemonsArray,
  //   };
  // },
};
</script>

<style></style>
