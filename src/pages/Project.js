import "../Project.css";
import NavBar from "../NavBar";
import project1 from "../images/Projects/image 9.svg";
import project2 from "../images/Projects/image 10.svg";
import project3 from "../images/Projects/image 18.svg";
import project4 from "../images/Projects/image 19.svg";
import rocket from "../images/Projects/Group 16.svg";
import background_image from "../images/background.png";
<link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet'></link>


function Home() {

    return (
        <div className="Project" style={{ 
          backgroundImage: `url(${background_image})`,
          height: 1117,
          marginTop: -20,
        }}>
           <NavBar></NavBar>
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
/* identical to box height, or 86px */
            color: "#FFFFFF",
            "text-shadow": "0px, 4px, 4px, 0px #00000040 inset", 
          }}> Project</p>

          <div>
          <div className="Projects">
            <img src={project1} style={{
              width: 600,
              height: 400,
              left: 70,
              top: 300,
              position: "absolute",
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}> 
            </img>
          </div>
          <div className="Projects">
            <img src={project2} style={{
              width: 600,
              height: 400,
              left: 470,
              top: 300,
              position: "absolute",
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}> 
            </img>
          </div>
          <div className="Projects">
            <img src={project3} style={{
              width: 600,
              height: 400,
              left: 870,
              top: 300,
              position: "absolute",
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}> 
            </img>
          </div>
          <div className="Projects">
            <img src={project4} style={{
              width: 600,
              height: 400,
              left: 1270,
              top: 300,
              position: "absolute",
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}> 
            </img>
          </div>
          </div>
          
          <div className="Rocket">
            <img src={rocket} style={{
              width: 200,
              height: 400,
              left: 900,
              top: 640,
              position: "fixed",
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}> 
            </img>
          </div>

          <p style={{
            paddingBottom: "50px",
            width: "646px",
            height: "697px",
            left: "1100px",
            top: "800px",
            position: "fixed",
            "font-family": "Open Sans",
            "font-style": "normal",
            "font-weight": "400",
            "font-size": "30px",
            "line-height": "86%",
/* identical to box height, or 86px */
            "letter-spacing": "0.07em",
            "text-align":"left",
            color: "#FFFFFF",
            "text-shadow": "0px, 4px, 4px, rgba(0, 0, 0, 0.25)", 
          }}> Scroll to the left to view more...<br></br>
          </p>

          </div>
        </div>
         
      );
}
export default Home;


