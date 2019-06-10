import React from "react";
import characters from "./characters";
import CharacterCard from "./components/CharacterCard/CharacterCard"
import Title from "./components/Title/title"

function App() {


  return (
    <div>
    <Title />
    {characters.map(char => <CharacterCard image = {char.image} alt = {char.name}/> )}

      </div>
    )

  }

  export default App;