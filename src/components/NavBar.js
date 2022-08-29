import React from "react";
import "../style/NavBar.css";
import searchImage from "../images/search.png";

function NavBar() {
  return (
    <div className="NavBar">
      <button
        type="button"
        onClick={(e) => {
          window.location.href = "#";
        }}
      >
        Home
      </button>

      <button
        type="button"
        onClick={(e) => {
          window.location.href = "#About";
        }}
      >
        About
      </button>

      <button
        type="button"
        onClick={(e) => {
          window.location.href = "#Recruitment";
        }}
      >
        Recruitment
      </button>

      <button
        type="button"
        onClick={(e) => {
          window.location.href = "#Project";
        }}
      >
        Projects
      </button>

      <button
        type="button"
        onClick={(e) => {
          window.location.href = "#Contact";
        }}
      >
        Contacts
      </button>

      <form
        class="form"
        style={{
          width: "15%",
          marginLeft: "60px",
          opacity: 0.7,
        }}
      >
        <div
          class="input-group"
          style={{
            backgroundColor: "#363636",
            borderRadius: "30px",
            height: "100%",
          }}
        >
          <div class="input-group-prepend">
            <span
              class="input-group-text"
              id="basic-addon1"
              style={{
                background: "transparent",
                border: "none",
              }}
            >
              <img
                src={searchImage}
                alt="search"
                style={{
                  position: "relative",
                  top: 5,
                }}
              ></img>
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{
              background: "transparent",
              border: "transparent",
              borderRadius: "30px",
              color: "white",
              fontSize: "20px",
              opacity: 0.7,
            }}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default NavBar;
