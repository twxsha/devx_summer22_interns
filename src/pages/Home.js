import gifImage from "../../src/gif.gif";
import "../Home.css";
import background_image from "../images/background.png";

function Home() {
    return (
        <div className="Home" style={{ 
          backgroundImage: `url(${background_image})`,
          height: 1117,
          marginTop: -20,
        }}>
          <div className="leftLogo">
            <img src={logoImage} alt="logo loading"/>
          </div>
          <div className="rightGif">
            <img src={gifImage} alt="gif loading" />
          </div>
        </div>
      );
}
export default Home;


