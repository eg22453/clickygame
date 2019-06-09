import React from "react";
import characters from "./characters";
import CharacterCard from "./components/CharacterCard/CharacterCard"

function App() {
  console.log(characters[0].image)
  return <img src ={characters[0].image} alt ="" />
  //return <CharacterCard name = {characters[0].name} image ="../public/Images/Cartman.png" />;
}

export default App;
