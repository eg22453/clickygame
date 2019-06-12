import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

//below is basic code for getting an image to spawn from the props
//it was included in the extended CharacterCard class below
// function CharacterCard(props) {
//   return (
//       <div className="img-container">
//         <img id ="char" src={props.image} alt={props.name} />
//       </div>
//   );
// }


class CharacterCard extends React.Component{
  // increaseClick=()=>{ 
  //   this.setState({myclicks: this.state.myclicks +1});
  //   ReactDOM.render(this.state.myclicks, document.getElementById("currentscore"));
  // };
  render(){
    return(
        <div className="img-container">
        <img src={this.props.image} alt={this.props.name} onClick={() => this.props.manageclicks(this.props.id)} />
      </div>
    );
  }
}


export default CharacterCard;
