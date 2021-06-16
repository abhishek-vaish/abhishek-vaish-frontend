import React from "react";
import "./SideToggle.css";

const SideToggle = () => {
  return (
    <div className="sidetoggle">
      <div className="sidetoggle__icons">
        <div className="icons__circles">
          <div className="circle circle-1" />
          <div className="circle circle-2" />
          <div className="circle circle-3" />
        </div>
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
