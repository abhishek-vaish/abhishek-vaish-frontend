import React from "react";
import "./Card.css";
import "../../../node_modules/material-design-icons/iconfont/material-icons.css";
import Circle from "../../assets/circle.svg";

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
            {props.icon ? (
              <i class={props.icon}></i>
            ) : (
              <img style={{ width: "35px" }} src={Circle} alt="icon"></img>
            )}
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
