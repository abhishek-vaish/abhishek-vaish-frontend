import React from "react";
import "./SideToggle.css";
import ThreeCircle from "../ThreeCircle/ThreeCircle";

const SideToggle = () => {
  return (
    <div className="sidetoggle">
      <div className="sidetoggle__icons">
        <ThreeCircle />
        <div className="icons__decorator">
          <div className="circle__icon triangle">
            <div className="triangle" />
          </div>
          <div className="circle__icon rectangle">
            <div className="rectangle" />
          </div>
          <div className="circle__icon add_item">
            <p className="add">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideToggle;
