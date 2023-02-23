const requestAlert = (pokemonName, pokemonId) => {
  console.log(pokemonId);
  Swal.fire({
    title: "Fallaste",
    text: `El pokemon correcto es: ${pokemonName}`,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "pokemon",
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    }
  });
};

const winsAlert = () => {
  Swal.fire("Ganaste", "Has Seleccionado el pokemon correcto", "success").then(
    (result) => {
      if (result.isConfirmed) {
        location.reload();
      }
    }
  );
};

export { requestAlert, winsAlert };
