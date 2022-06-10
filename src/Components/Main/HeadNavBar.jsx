import React from "react";
import ReactDOM from "react-dom";
import "../../../public/styles.css";

function HeadNavBar(props) {
  return (
    <div className="head-nav-bar">
      <div className="header-logo">
        <img
          className="logo"
          src="https://media.discordapp.net/attachments/907656803486163045/984478970290511902/unknown.png"
          alt="logo"
        />
      </div>

      <div className="header-nav-bar">
        <div className="header-nav-bar-1">
          <div className="header-nav-bar-container">
            <a className="header-nav-bar-anchor enlarged ">Home</a>
          </div>
        </div>
        <div className="header-nav-bar-2">
          <div className="header-nav-bar-container">
            <a>Projecten</a>
          </div>
        </div>
        <div className="header-nav-bar-3">
          <div className="header-nav-bar-container">
            <a>Expertises</a>
          </div>
        </div>
        <div className="header-nav-bar-4">
          <div className="header-nav-bar-container">
            <a>Over ons</a>
          </div>
        </div>
        <div className="header-nav-bar-5">
          <div className="header-nav-bar-container">
            <a>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadNavBar;
