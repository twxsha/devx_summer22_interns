import background_image from "../images/background.png";

function Home() {

    return (
        <div className="Home" style={{ 
          backgroundImage: `url(${background_image})`,
          height: 1117,
          marginTop: -20,
        }}>
            <p>
              Home Page!
            </p>
        </div>
      );
}
export default Home;


