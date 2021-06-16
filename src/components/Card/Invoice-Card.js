import React from "react";
import "./Invoice-Card.css";

const Invoice_Card = (props) => {
  return (
    <div className="invoice_card">
      <div className="invoice_content">
        <div className="line-1" />
        <div className="content_data">
          <p>{props.number}</p>
          <h4>{props.title}</h4>
          <p>{props.date}</p>
        </div>
      </div>
      <div className="line-2" />
      <div className="bottom-content">
        <p>{props.head}</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
};

export default Invoice_Card;
