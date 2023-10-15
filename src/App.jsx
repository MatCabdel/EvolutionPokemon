import './App.css'
import Card from "./Card";
import { useState } from 'react';


const pokemonList = [
  {
      name: "Carapuce",
      level: "Level 5",
      imgSrc: "./src/media/carapuce.png",
      attaque: "💧 Charge",
      attaque2: "💧 Coquille attaque ",
      force: 5,
      force1: 15,
    },
    {
      name: "Carabaffe",
      level: "Level 16",
      imgSrc:"./src/media/carabaffe.png",
      attaque: "💧 Vague Geante",
      attaque2: "💧 Ecume",
      force: 20,
      force1: 30,
    },
    {
      name: "Tortank",
      level: "Level 36",
      imgSrc:"./src/media/tortank.png",
      attaque: "💧 Rafale Massive",
      attaque2: "💧 Hydro Charge",
      force: 30,
      force1: 50,
    },
  ];

const App = () => {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNextPokemon = () => {
    if (pokemonIndex < pokemonList.length -1)
      setPokemonIndex(pokemonIndex + 1);
  }
  
  const lastPokemon = pokemonIndex === pokemonList.length - 1;

  return(
<div>
  <h1>Mes Évolutions</h1>
  <Card pokemon={pokemonList[pokemonIndex]} evolution={handleNextPokemon} lastPokemon={lastPokemon}/>
</div>
  );
}




export default App
