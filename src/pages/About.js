import background_image from "../images/background.png";

function About() {

    return (
      <div style={{ 
        backgroundImage: `url(${background_image})`,
        height: 1117,
        marginTop: -20,
      }}>
        <div>
          <p>about page</p>
        </div>
      </div>
    );    
  }
  export default About;
  
  