import React from "react";
import "./Dashboard.css";
import Header from "../Header/Header";
import TotalProfit from "../TotalProfit/TotalProfit";
import Expenses from "../Expenses/Expenses";
import Invoice from "../Invoice/Invoice";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="middle">
        <TotalProfit />
        <Expenses />
      </div>
      <Invoice />
    </div>
  );
};

export default Dashboard;
