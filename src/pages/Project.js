import "../Project.css";
import React from "react";
import ReactDOM from "react-dom";
import Styler from "stylefire";
import { LeftArrow, RightArrow } from "../pages/project-page/arrows";
import { OptionsWrapper, OptionItem } from "../pages/project-page/optionsElements";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "../pages/project-page/globalStyles";
import { Card } from "../pages/project-page/card.tsx";
import { Footer } from "../pages/project-page/footer.tsx";
import { Header } from "../pages/project-page/header.tsx";
import { animate } from "popmotion";
import project1 from "../images/Projects/1.jpg";
import project2 from "../images/Projects/2.jpg";
import project3 from "../images/Projects/3.jpg";
import project4 from "../images/Projects/4.jpg";
import project5 from "../images/Projects/5.jpg";
import rocket from "../images/Projects/rocket.svg";
import background_image from "../images/background.png";
<link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet'></link>


type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function App() {
  const [items] = React.useState(getItems);
  const [duration, setDuration] = React.useState(500);
  const [ease, setEase] = React.useState("noEasing");
  const [customAnimation, setCustomAnimation] = React.useState(false);
  
  function onWheel(
    apiObj: scrollVisibilityApiType,
    ev: React.WheelEvent
  ): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }
    if (ev.deltaY < 0) {
      // NOTE: for transitions
      apiObj.scrollNext(undefined, undefined, undefined, { duration });
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev(undefined, undefined, undefined, { duration });
    }
  }

  return (
    <>
      <Header />
      <div className="example" style={{ paddingTop: "30px" ,
      backgroundImage: `url(${background_image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
}}
      >
        <div>
          <ScrollMenu
            onWheel={onWheel}
            transitionDuration={duration} // NOTE: for transitions
            transitionEase={easingFunctions[ease]}
            transitionBehavior={customAnimation ? scrollBehavior : undefined}
          >
            {items.map(({ id }) => (
              <Card
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
              />
            ))}
          </ScrollMenu>
          
 

          <div
            style={{ marginTop: "10px", display: "flex", columnGap: "10px" }}
          ></div>
        </div>
      </div>
    </>
  );
}
export default App;

const scrollBehavior = (instructions) => {
  const [{ el, left }] = instructions;
  const styler = Styler(el);

  animate({
    from: el.scrollLeft,
    to: left,
    type: "spring",
    onUpdate: (left) => styler.set("scrollLeft", left)
  });
};

const easingFunctions = {
  noEasing: undefined,
  // no easing, no acceleration
  linear: (t) => t,
  // accelerating from zero velocity
  easeInQuad: (t) => t * t,
  // decelerating to zero velocity
  easeOutQuad: (t) => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // accelerating from zero velocity
  easeInCubic: (t) => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: (t) => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  easeInQuart: (t) => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: (t) => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: (t) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // accelerating from zero velocity
  easeInQuint: (t) => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: (t) => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: (t) =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
  // Source https://gist.github.com/gre/1650294#file-easing-js
};

ReactDOM.render(<App />, document.getElementById("root"));

function background() {
  return (
    <div className="Project" style={{ 
      backgroundImage: `url(${background_image})`,
    }}>

    </div>
  )
}

/*
function Home() {

    return (
        <div className="Project" style={{ 
          backgroundImage: `url(${background_image})`,
          height: 1117,
          marginTop: -20,
        }}>
          <div>
          <p style={{
            "border-radius": "nullpx",
            width: "696px",
            height: "127px",
            left: "1300px",
            top: "20px",
            position: "fixed",
            textAlign: "left",

            "font-family": "Orbitron",
            "letter-spacing": "0.02em",
            "font-style": "normal",
            "font-weight": "400",
            "font-size": "100px",
            "line-height": "86%",
            "font-letter": "2%",
//identical to box height, or 86px
            color: "#FFFFFF",
            "text-shadow": "0px, 4px, 4px, 0px #00000040 inset", 
          }}> Project</p>

          <div>
          <div className="Projects">
            <img src={project1} style={{
              width: 600,
              height: 400,
              left: 70,
              top: 300,
              position: "absolute",
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}> 
            </img>
          </div>
          <div className="Projects">
            <img src={project2} style={{
              width: 600,
              height: 400,
              left: 470,
              top: 300,
              position: "absolute",
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}> 
            </img>
          </div>
          <div className="Projects">
            <img src={project3} style={{
              width: 600,
              height: 400,
              left: 870,
              top: 300,
              position: "absolute",
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}> 
            </img>
          </div>
          <div className="Projects">
            <img src={project4} style={{
              width: 600,
              height: 400,
              left: 1270,
              top: 300,
              position: "absolute",
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}> 
            </img>
          </div>
          </div>
          
          <div className="Rocket">
            <img src={rocket} style={{
              width: 200,
              height: 400,
              left: 900,
              top: 640,
              position: "fixed",
              filter: "drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))",
            }}> 
            </img>
          </div>

          <p style={{
            paddingBottom: "50px",
            width: "646px",
            height: "697px",
            left: "1100px",
            top: "800px",
            position: "fixed",
            "font-family": "Open Sans",
            "font-style": "normal",
            "font-weight": "400",
            "font-size": "30px",
            "line-height": "86%",
// identical to box height, or 86px
            "letter-spacing": "0.07em",
            "text-align":"left",
            color: "#FFFFFF",
            "text-shadow": "0px, 4px, 4px, rgba(0, 0, 0, 0.25)", 
          }}> Scroll to the left to view more...<br></br>
          </p>

          </div>
        </div>
      );
}
*/
