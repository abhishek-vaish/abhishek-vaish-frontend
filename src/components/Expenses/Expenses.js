import React from "react";
import Card from "../Card/Card";
import "./Expenses.css";
import "../../../node_modules/material-design-icons/iconfont/material-icons.css";

const Expenses = () => {
  return (
    <div className="expenses">
      <div className="title-expenses">
        <h3>Expenses</h3>
        <div className="icon">
          {/* <span class="material-icons">north_east</span> */}
        </div>
      </div>
      <div className="card-expenses">
        <Card
          color="#f0f4ff"
          price="20"
          date="23 Sep, 2020"
          title="Software"
          icon="fab fa-atlassian"
        />
        <Card
          color="#eefcef"
          price="30"
          date="26 Sep, 2020"
          title="Management"
          icon=""
        />
        <Card
          color="#e5f5fa"
          price="60"
          date="28 Sep, 2020"
          title="Support"
          icon="fab fa-apple"
        />
      </div>
    </div>
  );
};

export default Expenses;
