import NavBar from "../NavBar";
import background_image from "../images/background2.png";
import "../Recruitment.css";

function Recruitment() {
    return (
      <div className="Home" style={{ 
        backgroundImage: `url(${background_image})`,
        height: 1771.22,
        marginTop: -20,
      }}>
        <NavBar></NavBar>
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


        <div className="recruitment">
          <h1>Application Process</h1>
          <div id="application-process">
            <div className="info">
              <div className="step"><p>1. Submit Application</p></div>
              <div className="descrip"><p>Tell us about your interests an how you think you can contribute to Devx. We will be looking at your resume and portfolio (if applicable).</p></div>
              <div className="step"><p>2. Demo Day</p></div>
              <div className="descrip"><p>If you pass the initial screening, you will be invited to our Demo Day in which all teams looking to recruit will present their projects. You can then express interest in your top teams.</p></div>
              <div className="step"><p>3. Team Interviews</p></div>
              <div className="descrip"><p>If these teams are interested in you as well, they will reach out to you for an interview.</p></div>
              <div className="step"><p>4. Final Decision</p></div>
              <div className="descrip"><p>If all goes well, PMs will send out an email formally inviting you to the team. Welcome!</p></div>
            </div>
            <div className="links">
              <a class="fcc-btn" href="https://www.google.com/">Developer Application</a>
              <a class="fcc-btn" href="https://www.google.com/">PM Application</a>
              <a class="fcc-btn" href="https://www.google.com/">Design Application</a>
              <a class="fcc-btn" href="https://www.google.com/">Marketing Application</a>
            </div>
          </div>
      </div>
      </div>
      
  );
}
export default Recruitment;

