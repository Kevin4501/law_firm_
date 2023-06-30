import React from "react";
import Client1 from "../assets/ClientPhotos/1C.png";
import './ClientCard.css'
function ClientsCard(props) {
  return (
    <div>
      <div className="clientWrapper">
        <img  className="clientImage"src={props.data.image}></img>
        <div className="clientName">
          <p>{props.data.name}</p>
        </div>
        <div className="clientTitle">
          <p>{props.data.title}</p>
        </div>
        <div className="clientPara">
          <p>
          {props.data.para}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientsCard;
