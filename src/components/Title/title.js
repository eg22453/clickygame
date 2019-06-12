import React from "react";
import "./style.css";

let Title = props => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Clicky-Game!</h1>
        <p>
          Click a picture to score a point! Don't click a picture you've already
          clicked before otherwise your score will reset :((
        </p>
      </div>
      <div className="scorecard">
        <span>Current Score :{props.score}</span>
        <br></br>
        <span>Top Score :{props.highscore}</span>
      </div>
    </div>
  );
};

export default Title;
