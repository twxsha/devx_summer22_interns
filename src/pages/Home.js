import "../style/Home.css";
import logoImage from "../images/logo.svg";
import gifImage from "../../src/images/gif.gif";
import TransitionBtn from "../components/TransitionBtn.js";
import "../style/Section.css";
import "../style/Home.css";

function Home() {
  return (
    <div className="section">
      <div className="Home">
        <div className="leftLogo">
          <img src={logoImage}></img>
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
