const PokedexData = [
  {
    name: "bulbasaur",
    height: 7,
    weight: 69,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    height: 6,
    weight: 85,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "pikachu",
    height: 4,
    weight: 60,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mewtwo",
    height: 20,
    weight: 1220,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
  },
  {
    name: "magikarp",
    height: 9,
    weight: 100,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
  },
  {
    name: "jigglypuff",
    height: 5,
    weight: 55,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    name: "squirtle",
    height: 5,
    weight: 90,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "jolteon",
    height: 8,
    weight: 245,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
  },
  {
    name: "electabuzz",
    height: 11,
    weight: 300,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
  },
  {
    name: "moltres",
    height: 20,
    weight: 600,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
  },
  {
    name: "growlithe",
    height: 7,
    weight: 190,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
  },
  {
    name: "oddish",
    height: 5,
    weight: 54,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
  },
  {
    name: "rattata",
    height: 3,
    weight: 35,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  },
  {
    name: "hypno",
    height: 16,
    weight: 756,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
  },
];

let pokeDex = document.getElementById("pokeDex");
let filterBtn = document.getElementById("filter");

let checkboxes = document.querySelectorAll("[name = 'checkbox']");


let checkBoxesArr = [];
filterBtn.addEventListener("click", ()=>{
  checkBoxesArr = [];
  [...checkboxes].forEach((box)=>{
    if(box.checked === true){
      checkBoxesArr.push(box.value);
    }
  })

  filtered = PokedexData.filter(pokemon => {
    return(
      (pokemon.type === checkBoxesArr[0]) || (pokemon.type === checkBoxesArr[1]) || (pokemon.type === checkBoxesArr[2]) || (pokemon.type === checkBoxesArr[3]) || (pokemon.type === checkBoxesArr[4]) || (pokemon.type === checkBoxesArr[5])
    );
  })
  console.log(filtered);
})

PokedexData.forEach((pokemon) => {
  let pokemonFrame = document.createElement("div");
  pokeDex.appendChild(pokemonFrame);
  let image = document.createElement("img");
  image.src = pokemon.url;

  pokemonFrame.append(image);

  let pokeName = document.createElement("h2");
  pokeName.innerText = pokemon.name;

  pokemonFrame.append(pokeName);

  let pokeUlList = document.createElement("ul");
  pokemonFrame.append(pokeUlList);

  let pokeHeight = document.createElement("li");
  pokeHeight.innerText = "Height: " + pokemon.height;
  let pokeWeight = document.createElement("li");
  pokeWeight.innerText = "Weight: " + pokemon.weight;
  let pokeType = document.createElement("li");
  pokeType.innerText = "Type: " + pokemon.type;

  pokeUlList.append(pokeHeight);
  pokeUlList.append(pokeWeight);
  pokeUlList.append(pokeType);
});
