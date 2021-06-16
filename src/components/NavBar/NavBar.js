import React from "react";
import "./NavBar.css";
import profile from "../../assets/profile.png";
import "../../../node_modules/material-design-icons/iconfont/material-icons.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <div className="profile">
        <div className="avatar">
          <img src={profile} alt="profile"></img>
        </div>
        <div className="content">
          <p>Welcome back,</p>
          <h4>Julie Bell</h4>
        </div>
      </div>
      <div className="menu">
        <div className="dashboard-1">
          <div className="icon">
            <span class="material-icons">dashboard</span>
          </div>
          <div className="menu__title">Dashboard</div>
        </div>
        <div className="clients">
          <div className="icon">
            <span class="material-icons">person</span>
          </div>
          <div className="menu__title">Clients</div>
        </div>
        <div className="invoice">
          <div className="icon">
            <span class="material-icons">system_update</span>
          </div>
          <div className="menu__title">Invoices</div>
        </div>
        <div className="estimate">
          <div className="icon">
            <span class="material-icons">description</span>
          </div>
          <div className="menu__title">Estimates</div>
        </div>
        <div className="team">
          <div className="icon">
            <span class="material-icons">group</span>
          </div>
          <div className="menu__title">My team</div>
        </div>
      </div>
      <div className="settings">
        <div className="setting-icon">
          <div className="icon">
            <i class="fas fa-cog"></i>
          </div>
          <div className="content">
            <p>Settings</p>
          </div>
        </div>
        <div className="icon">
          <i class="fas fa-chevron-left"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
