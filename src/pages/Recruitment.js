import background_image from "../images/background2.png";

function Recruitment() {

    return (
      <div className="Home" style={{ 
        backgroundImage: `url(${background_image})`,
        height: 1771.22,
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
/* identical to box height, or 86px */
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
/* identical to box height, or 86px */
            "letter-spacing": "0.07em",
            "text-align":"left",
            color: "#FFFFFF",
            "text-shadow": "0px, 4px, 4px, rgba(0, 0, 0, 0.25)", 
          }}> At DevX, we offer both begginer friendly and experienced roles.  <br></br>
          <br></br>While we offer several developer roles, DevX is not only for students interested in technical experience. We also offer roles for Product Managers, Designers and Marketers. 
          <br></br><br></br>Our recruitment for Fall of 2022 is coming up soon!</p>
        </div>
      </div>
    );    
  }
  export default Recruitment;
  
  