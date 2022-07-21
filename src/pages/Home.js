import gifImage from "../../src/gif.gif";
import logoImage from "../../src/logo.png";
import "../Home.css";

function Home() {
    return (
        <div className="Home">
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


