import React from "react";
import characters from "./characters";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Title from "./components/Title/title";

class App extends React.Component {
  state = {
    characters,
    score: 0,
    highscore: 0
  };

  manageclicks = charid => {
    this.state.characters.find((element, index) => {
      if(charid === element.id){
        console.log(element)
        //check to see if an image has not been clicked yet
         if(element.clickcount === 0){
           characters[index].clickcount++;
           this.setState({score: this.state.score+1})
           //shuffle the array after a point is scored
           this.state.characters.sort (() => Math.random()-0.5)
        }
      }
    })
    //if character is clicked only once than update score

  };

  render() {
    return (
      <div>
        <Title score={this.state.score} highscore={this.state.highscore} />
        {characters.map(char => (
          <CharacterCard 
          image={char.image} 
          alt={char.name}
          id ={char.id} 
          manageclicks ={this.manageclicks}/>
        ))}
      </div>
    );
  }
}

export default App;
