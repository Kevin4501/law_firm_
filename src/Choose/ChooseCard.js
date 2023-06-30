import React from "react";
import Gift from "../assets/Group 19.png";
import'./ChooseCard.css'
function ChooseCard(props) {
  return (
    <div>
      <div className="choosecardOuter">
        <img src={Gift} className="choosecardImg"/>
        <p className="successRate">{props.data}%Success Rate</p>
        <p className="chooseCardPara">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer.
        </p>
        <button className="choosecardButton">Read More</button>
      </div>
    </div>
  );
}

export default ChooseCard;
