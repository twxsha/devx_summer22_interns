import "../About.css";
import background_image from "../images/background.png";


function About() {

    return (
      <div className="About" style={{ 
        backgroundImage: `url(${background_image})`,
        height: 1117,
        marginTop: -60,
      }}>

        <div className="title">
          <h1>ABOUT</h1>
        </div>
    
        <div className="body">
          <h2> 
          Ever feel like what you learn in the classroom is
          deeply theoretical, with little opportunities to build
          out practical applications?
          <br></br>
          DevX is a student organization dedicated to solving
          that very problem! We comprise of several project
          teams building out real-world projects to help tackle
          pressing problems frustrating the UCLA community.
          Make your ideas come to life, grow your technical
          skills by pairing up with experienced students, and
          build a network that lasts beyond graduation. 
          </h2>
        </div>

      </div>




    );    
  }
  export default About;
  
  