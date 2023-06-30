import React from "react";
import DanialDef from "../assets/TeamPhotos/1T.png";
import Sanfole from "../assets/TeamPhotos/2T.png";
import Cesforila from "../assets/TeamPhotos/3T.png";
import Colleen from "../assets/TeamPhotos/4T.png";
import Haldone from "../assets/TeamPhotos/5T.png";
import NikJeo from "../assets/TeamPhotos/6T.png";
import'./Team.css'
import TeamCard from "./TeamCard";
function Team(props) {
  const teamDetails = [
    {
      img: DanialDef,
      name: "Danial Def",
      cases: "301 Cases",
    },
    {
      img: Sanfole,
      name: "Sanfole",
      cases: "850 Cases",
    },
    {
      img: Cesforila,
      name: "Cesforila",
      cases: "470 Cases",
    },
    {
      img: Colleen,
      name: "Colleen",
      cases: "180 Cases",
    },
    {
      img: Haldone,
      name: "Haldone",
      cases: "212 Cases",
    },
    {
      img: NikJeo,
      name: "Nik Jeo",
      cases: "350 Cases",
    },
  ];
  return (
  <div>
    <div>
        <p className="teamTitle">Our Team</p>
    </div>
    <div className="teamWrapper">
        {teamDetails.map((teamDetails)=><TeamCard data={teamDetails}/>)}
    </div>
  </div>
  );
}

export default Team;
