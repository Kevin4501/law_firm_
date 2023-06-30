import React from "react";
import Email from "./Email";
import Victor from '../assets/Group 10591.png'
import'./FytThem.css'
function FytThem(props) {
  return (
    <div className="vicouter">

      <div className="fytOuter">
        <div className="firstText">
          <p>You don’t have to Fight them Alone.</p>
        </div>
        <div className="secondText">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
        </div>
        <Email></Email>
      </div>

      <div className="victor-image">
        <img src={Victor}/>
        </div>

    </div>
  );
}

export default FytThem;
