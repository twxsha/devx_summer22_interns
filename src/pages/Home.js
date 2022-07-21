import "../Home.css";
import styles from "../App.css"
import background_image from "../images/background.png";
import logo_image from "../images/logo.svg";
import gifImage from "../../src/gif.gif";

function Home() {
    return (
        <div className="Home" style={{ 
          backgroundImage: `url(${background_image})`,
          height: 1117,
          marginTop: -20,
        }}>
          <div className="leftLogo">
            <img src={logo_image} style={{
              width: "462px",
              height: "136px",
              left: "143px",
              top: "541px",
              position: "absolute",
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}> 
            </img>
          </div>
          <div className="rightGif">
            <img src={gifImage} alt="gif loading" />
          </div>
        </div>
        
      );
}
export default Home;


