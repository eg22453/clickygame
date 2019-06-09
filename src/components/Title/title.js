import React from "react";
import "./style.css";

function Title() {
return(
  <div className="container">
  <div className="jumbotron">
    <h1>Clicky-Game!!</h1>      
    <p>Click a picture to score a point! Don't click a picture you've already clicked before otherwise your score will reset :((</p>
  </div>
  <div className ="scorecard">
    <p>Current Score: </p><span id = "currentscore"></span>
    <p>Top Score: </p><span id ="TopScore"></span>
  </div>
</div>
)
}

export default Title;
