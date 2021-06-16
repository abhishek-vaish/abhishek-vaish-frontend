import React from "react";
import "./TotalProfit.css";

const TotalProfit = () => {
  return (
    <div className="totalprofit">
      <div className="header-1">
        <div className="content-1">
          <h3 className="title">Total profit</h3>
          <p className="date">September 2020</p>
        </div>
        <div className="icon">
          <i class="fas fa-sliders-h"></i>
        </div>
      </div>
      <div className="content-2">
        <div className="container">
          <h4 className="main-price">$22.3k</h4>
          <div className="circle-price">
            <div className="circle circle-1" />
            <div className="price-1">
              <p>$54.3k income</p>
            </div>
          </div>
          <div className="circle-price">
            <div className="circle circle-2" />
            <div className="price-1">
              <p>$32.1k expenses</p>
            </div>
          </div>
        </div>
        <div className="line" />
        <div className="current-date">
          <p>Mo 30</p>
        </div>
      </div>
    </div>
  );
};

export default TotalProfit;
