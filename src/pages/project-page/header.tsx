import React from "react";


export function Header() {
  return (
    <header
      style={{
        backgroundColor: "transparent",
        width: "696px",
        height: "200px",
        padding: "10px",
        color: "white",
        display: "flex",
        fontSize: "50px",
        justifyContent: "center",
        marginLeft: "500px"
      }}
    >
      <h1>Project</h1>
    </header>
  );
}
/*

function title() {
  return (
    <div className="Project" style={{ 
      backgroundImage: `url(${background_image})`,
      height: 1117,
      marginTop: -20,
    }}>
      <div>
      <p style={{
            "border-radius": "nullpx",
            width: "696px",
            height: "127px",
            left: "1300px",
            top: "20px",
            position: "fixed",
            textAlign: "left",

            "font-family": "Orbitron",
            "letter-spacing": "0.02em",
            "font-style": "normal",
            "font-weight": "400",
            "font-size": "100px",
            "line-height": "86%",
            "font-letter": "2%",
//identical to box height, or 86px
            color: "#FFFFFF",
            "text-shadow": "0px, 4px, 4px, 0px #00000040 inset", 
          }}> Project</p>
      </div>
    </div>
  )
}*/