import React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./ImageGrid.css";
import BuisnessLaw from "../assets/GridPhotos/5.png";
import PartnershipLaw from "../assets/GridPhotos/6.png";
import RealEstateLaw from "../assets/GridPhotos/3.png";
import BuisnessLaw4 from "../assets/GridPhotos/1.png";
import LandDispuse from "../assets/GridPhotos/2.png";
import AdultAbuse from "../assets/GridPhotos/4.png";
function ImageGrid(props) {
  return (
    <div>
      <div className="row">
        <div className="column">
          <div className="containerArea">
            <img src={BuisnessLaw} /> <p className="areaHeadlines">BuisnessLaw</p>
          </div>
        </div>
        <div className="second">
          <div className="containerArea">
            <img src={PartnershipLaw} /> <p className="areaHeadlines">PartnershipLaw</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="second">
          <div className="containerArea">
            <img src={RealEstateLaw} /> <p className="areaHeadlines">RealEstateLaw</p>
          </div>
        </div>
        <div className="column">
          <div className="containerArea">
            <img src={BuisnessLaw4} /> <p className="areaHeadlines">BuisnessLaw</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="containerArea">
            <img src={LandDispuse} /> <p className="areaHeadlines">LandDispuse</p>
          </div>
        </div>
        <div className="second">
          <div className="containerArea">
            <img src={AdultAbuse} /> <p className="areaHeadlines">AdultAbuse</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
