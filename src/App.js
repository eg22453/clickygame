import React, { Component } from "react";
import characters from "./characters";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Title from "./components/Title/title";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        {characters.map(char => (
          <CharacterCard image={char.image} alt={char.name} />
        ))}
      </div>
    );
  }
}

export default App;
