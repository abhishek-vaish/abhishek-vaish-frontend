import React from "react";
import "./Home.css";
import SideToggle from "../components/SideToggle/SideToggle";
import NavBar from "../components/NavBar/NavBar";
import Dashboard from "../components/Dashboard/Dashboard";

const Home = () => {
  return (
    <div className="Home">
      <div className="sidetoggle">
        <SideToggle />
      </div>
      <div className="navBar">
        <NavBar />
      </div>
      <div className="dashboard">
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
