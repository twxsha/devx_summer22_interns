import background_image from "../images/background2.png";
import role1 from "../images/image2.png";
import role2 from "../images/image3.png";
import role3 from "../images/image10.png";
import role5 from "../images/image6.png";
import role6 from "../images/image7.png";
import role8 from "../images/image9.png";

function Recruitment() {

    return (
      <div style={{ 
        backgroundImage: `url(${background_image})`,
        height: 2960.64,
        width: 1771.22,
        marginTop: -20,
      }}>
        <div>
          <p style={{
            width: "629px",
            height: "86px",
            left: "147px",
            top: "212px",
            position: "absolute",
            textAlign: "left",
            "font-family": "Open Sans",
            "font-style": "normal",
            "font-weight": "700",
            "font-size": "100px",
            "line-height": "86%",
            color: "#FACD2E",
            "text-shadow": "0px, 4px, 4px, rgba(0, 0, 0, 0.25)", 
          }}> Recruitment</p>

<p style={{
            paddingTop: "50px",
            width: "646px",
            height: "697px",
            left: "149px",
            top: "349px",
            position: "absolute",
            "font-family": "Open Sans",
            "font-style": "normal",
            "font-weight": "400",
            "font-size": "30px",
            "line-height": "86%",
            "letter-spacing": "0.07em",
            "text-align":"left",
            color: "#FFFFFF",
            "text-shadow": "0px, 4px, 4px, rgba(0, 0, 0, 0.25)", 
          }}> At DevX, we offer both begginer friendly and experienced roles.  <br></br>
          <br></br>While we offer several developer roles, DevX is not only for students interested in technical experience. We also offer roles for Product Managers, Designers and Marketers. 
          <br></br><br></br>Our recruitment for Fall of 2022 is coming up soon!</p>
        </div>

        <div className="roles"> 
          <h2 style={{
              width: 241,
              height: 77,
              left: 149,
              top: 800,
              position: "absolute",
              textAlign: "left",
              "font-family": "Open Sans",
              "font-style": "normal",
              "font-weight": "700",
              "font-size": "90px",
              "line-height": "77px",
              color: "#FFFFFF",
              "text-shadow": "0px, 4px, 4px, rgba(0, 0, 0, 0.25)"
              }}> Roles</h2>

            <img src={role1} alt="skill image" style={{
              width: 149,
              height: 123,
              left: 225,
              top: 1043,
              position: "absolute",
            }}/>

            <img src={role2} alt="skill image" style={{
              width: 185,
              height: 131,
              left: 452,
              top: 1043,
              position: "absolute",
            }}/>

            <img src={role3} alt="skill image" style={{
              width: 149,
              height: 123,
              left: 225,
              top: 1224,
              position: "absolute",
            }}/>

            <img src={role2} alt="skill image" style={{
              width: 185,
              height: 131,
              left: 452,
              top: 1224,
              position: "absolute",
            }}/>

            <img src={role5} alt="skill image" style={{
              width: 165,
              height: 122,
              left: 717,
              top: 1224,
              position: "absolute",
            }}/>

            <img src={role6} alt="skill image" style={{
              width: 165,
              height: 115,
              left: 962,
              top: 1224,
              position: "absolute",
            }}/>

            <img src={role3} alt="skill image" style={{
              width: 147,
              height: 123,
              left: 1207,
              top: 1224,
              position: "absolute",
            }}/>

            <img src={role8} alt="skill image" style={{
              width: 153,
              height: 126,
              left: 1434,
              top: 1224,
              position: "absolute",
            }}/>
          </div>
      </div>
    );    
  }
  export default Recruitment;
  
  