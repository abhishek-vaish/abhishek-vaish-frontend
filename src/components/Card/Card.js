import React from "react";
import "./Card.css";
import "../../../node_modules/material-design-icons/iconfont/material-icons.css";

const Card = (props) => {
  return (
    <div className="card">
      <div
        style={{ "background-color": `${props.color}` }}
        className="content-card"
      >
        <div className="top-layer">
          <div className="price-date">
            <h4>
              ${props.price}.<span>00</span>
            </h4>
            <p>{props.date}</p>
          </div>
          <div className="icon-top">
            <span class="material-icons">attach_file</span>
          </div>
        </div>
        <div className="bottom-layer">
          <div className="icon-bottom">
            <i class={props.icon}></i>
          </div>
          <div className="title-bottom">
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
