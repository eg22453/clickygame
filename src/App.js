import React from "react";
import characters from "./characters";
import CharacterCard from "./components/CharacterCard/CharacterCard"
import Title from "./components/Title/title"

function App() {
  console.log(Title)
  // return <img src ={characters[0].image} alt ="" />
  //return <CharacterCard image = {characters[0].image} alt = {characters[0].name} />;

  return (
    <div>
    <Title />
    {characters.map(char => <CharacterCard image = {
        char.image
      }
      alt = {
        char.name
      }
      /> )}

      </div>
    )

  }

  export default App;