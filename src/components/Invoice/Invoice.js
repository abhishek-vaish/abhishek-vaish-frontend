import React from "react";
import "./Invoice.css";
import Invoice_Card from "../Card/Invoice-Card";
import ThreeCircle from "../ThreeCircle/ThreeCircle";
import NorthEastArrow from "../../assets/north-east-arrow.svg";

const Invoice = () => {
  return (
    <div className="invoice-component">
      <section>
        <div className="header-2">
          <div className="content-3">
            <h3 className="title">Invoices</h3>
            <p className="date">recently created</p>
          </div>
          <div className="header_icon">
            <i className="fas fa-sliders-h"></i>
            <img src={NorthEastArrow} alt="arrow"></img>
          </div>
        </div>
        <div className="invoice_card_row">
          <div className="upload_image">
            <div className="image_rectangle">
              <div className="image_icon">
                <span class="material-icons">cloud_download</span>
              </div>
              <p>Upload invoice</p>
            </div>
          </div>
          <Invoice_Card
            number="#00106"
            title="Mindtickle"
            date="2 Sep, 2020"
            price="3,500"
            head="Viewed"
          />
          <Invoice_Card
            number="#00105"
            title="Cleancloud"
            date="1 Sep, 2020"
            price="2,000"
            head="Sent"
          />
        </div>
      </section>
      <section>
        <div className="black_card">
          <div className="black_card_content">
            <ThreeCircle />
            <h4>Work Anywhere with the Invoicer Mobile Apps</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invoice;
