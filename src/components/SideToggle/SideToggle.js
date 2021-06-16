import React from "react";
import "./SideToggle.css";
import ThreeCircle from "../ThreeCircle/ThreeCircle";

const SideToggle = () => {
  return (
    <div className="sidetoggle">
      <div className="sidetoggle__icons">
        <div className="side_three_circle">
          <ThreeCircle />
        </div>
        <div className="icons__decorator">
          <div className="circle__icon triangle">
            <div className="triangle" />
          </div>
          <div className="circle__icon rectangle">
            <div className="rectangle" />
          </div>
          <div className="circle__icon add_item">
            <p className="add">
              <span class="material-icons">add</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideToggle;
