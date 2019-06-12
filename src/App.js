import React from "react";
import characters from "./characters";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Title from "./components/Title/title";
import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";

class App extends React.Component {
  state = {
    characters,
    score: 0,
    highscore: 0
  };

  endgame = () => {
    //check if new high score was reached
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score });
    }
    // If player loses then we reset each of the clickcounts of the images in json array back to 0
    this.state.characters.forEach(character => {
      character.clickcount = 0;
    });
    //currentscore/score is set back to 0 also
    this.setState({ score: 0 });
  };

  manageclicks = charid => {
    this.state.characters.find((element, index) => {
      if (charid === element.id) {
        console.log(element);
        //check to see if an image has not been clicked yet
        if (element.clickcount === 0) {
          console.log("add1")
          characters[index].clickcount++;
          this.setState({ score: this.state.score + 1 });
          //shuffle the array after a point is scored
          this.state.characters.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.endgame();
        }
      }
    });
  };

  render() {
    return (
      <div>
        <Title score={this.state.score} highscore={this.state.highscore} />
        {characters.map(char => (
          <CharacterCard
            image={char.image}
            alt={char.name}
            id={char.id}
            manageclicks={this.manageclicks}
          />
        ))}
      </div>
    );
  }
}

export default App;
