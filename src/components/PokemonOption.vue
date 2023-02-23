<template>
  <h3>Opciones de Pokemon</h3>
  <div class="options-container">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="pokemon in pokemonsOptions"
        :key="pokemon.id"
        @click="$emit('selectPokemon', pokemon.id)"
      >
        {{ firstUpper(pokemon.name) }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    pokemonsOptions: {
      type: Array,
      required: true,
      validation: (pokemosArray) => {
        if (pokemosArray.lenth > 4) {
          return false;
        } else {
          return true;
        }
      },
    },
  },
  methods: {
    firstUpper(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
</script>

<style scoped>
/* Pokemon Options */
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: #cccccc;
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>
