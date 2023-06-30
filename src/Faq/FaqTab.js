import React from "react";
import "./FaqTab.css";
import  Accordion  from "./Accordion";
function FaqTab(props) {
    const text =[
        {
            txt : "How much is my case worth?"
        },
        {
            txt: "What should I do right after car accidect"
        },
        {
            txt : "How much is my case worth?"
        }
    ]
  return (
    <div>
      <div className="FaqTabWrapper">
        <div className="FaqHead">
          <p>Do I need a personal injury report?</p>
        </div>
        <div className="FaqSubHead">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </p>
        </div>

        <div style={{width:"100%"}}>
            {text.map((text)=><Accordion data = {text}/>)}
        </div>
      </div>
    </div>
  );
}

export default FaqTab;
