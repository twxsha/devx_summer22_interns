import background_image from "../images/background.png";
import logo_image from "../images/logo.svg";
import styles from "../App.css"
function Home() {

    return (
        <div className="Home" style={{ 
          backgroundImage: `url(${background_image})`,
          height: 1117,
          marginTop: -20,
        }}>

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
        
      );
}
export default Home;


