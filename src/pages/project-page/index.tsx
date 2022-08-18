import React from "react";
import ReactDOM from "react-dom";
import Styler from "stylefire";
import { animate } from "popmotion/dist/popmotion";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./arrows";
import { Card } from "./card";
import { Footer } from "./footer";
import { Header } from "./header";
import "./globalStyles.tsx";
import { OptionsWrapper, OptionItem } from "./optionsElements";

// NOTE: embrace power of CSS flexbox!
// import "./hideScrollbar.css";
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(30)
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
      <div className="example" style={{ paddingTop: "100px" }}>
        <div>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
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

          <OptionsWrapper>
            <OptionItem label="Duration">
              <input
                value={duration}
                onChange={(ev) => setDuration(+ev.target.value)}
              />
            </OptionItem>
            <OptionItem label="Ease">
              <select
                name="ease"
                id="ease"
                value={ease}
                onChange={(ev) => setEase(ev.target.value)}
              >
                {Object.entries(easingFunctions).map(([name, fn]) => (
                  <option value={name} key={name}>
                    {name}
                  </option>
                ))}
              </select>
            </OptionItem>
            <OptionItem label="Custom animation">
              <input
                checked={customAnimation}
                onChange={(ev) => setCustomAnimation(ev.target.checked)}
                type="checkbox"
                style={{ width: "20px", height: "20px" }}
              />
            </OptionItem>
          </OptionsWrapper>

          <div
            style={{ marginTop: "10px", display: "flex", columnGap: "10px" }}
          ></div>
        </div>
        <Footer />
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
