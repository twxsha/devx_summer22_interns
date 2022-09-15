import React from 'react';
import logoImage from "../images/logo.svg";
import gifImage from "../../src/images/gif.gif";
import TransitionBtn from "../components/TransitionBtn.js";
import "../style/Section.css";
import "../style/Home.css";

function Home() {
  return (
    <div className="section">
      <div className="Home">
        <div className="leftLogo animate__animated animate__fadeInLeft">
          <img src={logoImage} alt="logo"></img>
        </div>
        <div className="rightGif animate__animated animate__fadeInRight">
          <img src={gifImage} alt="gif loading" />
        </div>
      </div>
      <TransitionBtn navUrl="#About" />
    </div>
  );
}
export default Home;
