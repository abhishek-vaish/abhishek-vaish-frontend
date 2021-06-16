import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="invoice-1">
        <p className="title-1 invoice-title">Invoices</p>
        <h3 className="price">$12,095</h3>
        <p className="value">Overdue</p>
      </div>
      <div className="outstanding">
        <h3 className="price">$33,363</h3>
        <p className="value">Total Outstanding</p>
      </div>
      <div className="indraft">
        <h3 className="price">$4,500</h3>
        <p className="value">Indraft</p>
      </div>
      <div className="revenue">
        <div className="bar-graph">
          <p className="title-1">Outstanding revenue</p>
          <div className="rectangle-1">
            <div className="fill"></div>
          </div>
          <p className="value">$12,095 overdue</p>
        </div>
        <h3>$21,3k</h3>
        <div className="icon-search">
          <i class="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
