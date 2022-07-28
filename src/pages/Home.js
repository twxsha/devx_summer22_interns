import "../Home.css";
import styles from "../App.css"
import background_image from "../images/background.png";
import logoImage from "../images/logo.svg";
import gifImage from "../../src/gif.gif";
import NavBar from "../NavBar";

function Home() {
    return (
        <div className="Home" style={{ 
          backgroundImage: `url(${background_image})`,
          height: 1117,
          marginTop: -20
        }}>
          <NavBar></NavBar>
          <div className="leftLogo">
            <img src={logoImage} style={{
              width: 462,
              height: 136,
              left: 143,
              top: 541,
              position: "absolute",
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}> 
            </img>
          </div>
          <div className="rightGif"> 
            <img src={gifImage} alt="gif loading" style={{
              width: 957,
              height: 950,
              left: 917,
              top: 79,
              position: "absolute",
            }} />
          </div>
        </div>
        
      );
}
export default Home;


