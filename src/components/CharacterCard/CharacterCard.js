import React from "react";
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
  state ={
    myclicks: 1
  };

  increaseClick =()=>{
    this.setState({myclicks: this.state.myclicks +1});
    console.log(this.state.myclicks)
  };
  render(){
    return(
        <div className="img-container">
        <img id ="char" src={this.props.image} alt={this.props.name} onClick ={this.increaseClick}/>
      </div>
    );
  }
}


export default CharacterCard;
