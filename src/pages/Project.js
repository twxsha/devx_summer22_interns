import "../Project.css";
import "../style/Section.css";
import TransitionBtn from "../components/TransitionBtn.js";

import project1 from "../images/Projects/image 9.svg";
import project2 from "../images/Projects/image 10.svg";
import project3 from "../images/Projects/image 18.svg";
import project4 from "../images/Projects/image 19.svg";
import rocket from "../images/Projects/Group 16.svg";
<link
  href="https://fonts.googleapis.com/css?family=Orbitron"
  rel="stylesheet"
></link>;

function Home() {
  return (
    <div className="section">
      <div className="Project" id="Project">
        <div data-aos="fade-in" data-aos-duration="4000"></div>
        <h1 className="title" data-aos="fade-down" data-aos-delay="0">
          Projects
        </h1>
        <p className="projectImg" data-aos="fade-down" data-aos-delay="200">
          <img
            src={project1}
            style={{
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}
          ></img>
          <img
            src={project2}
            style={{
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}
          ></img>
          <img
            src={project3}
            style={{
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}
          ></img>
          <img
            src={project4}
            style={{
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}
          ></img>
        </p>
      </div>

      <div className="Rocket">
        <img
          src={rocket}
          style={{
            width: 200,
            height: 400,
            left: 900,
            top: 640,
            // position: "fixed",
            filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
          }}
        ></img>
      </div>

      <p
        style={{
          paddingBottom: "50px",
          width: "646px",
          height: "697px",
          left: "1100px",
          top: "800px",
          "font-family": "Open Sans",
          "font-style": "normal",
          "font-weight": "400",
          "font-size": "30px",
          "line-height": "86%",
          /* identical to box height, or 86px */
          "letter-spacing": "0.07em",
          "text-align": "left",
          color: "#FFFFFF",
          "text-shadow": "0px, 4px, 4px, rgba(0, 0, 0, 0.25)",
        }}
      >
        {" "}
        Scroll to the left to view more...<br></br>
      </p>
    </div>
  );
}
export default Home;
