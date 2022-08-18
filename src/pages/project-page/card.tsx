import React from "react";
import project0 from "../../images/Projects/1.jpg";
import project1 from "../../images/Projects/2.jpg";
import project2 from "../../images/Projects/3.jpg";
import project3 from "../../images/Projects/4.jpg";
import project4 from "../../images/Projects/5.jpg";
import { VisibilityContext } from "react-horizontal-scrolling-menu";



export function Card({ title, itemId }: { title: string; itemId: string }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      role="button"
      style={{
        border: "10px solid",
        display: "inline-block",
        margin: "0 60px",
        width: "300px",
        userSelect: "none"
      }}
      tabIndex={0}
      className="card"
    >
      <div>
        <div>{title}</div>
        <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
          visible: {JSON.stringify(visible)}
        </div>
      </div>
      <div
        style={{
          //backgroundImage: `url(${'project'+itemId})`,
          //backgroundImage: `url(${'project'+itemId[4]})`,
          backgroundImage: `url(${project1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: "400px"
        }}
      />
    </div>
  );
}
