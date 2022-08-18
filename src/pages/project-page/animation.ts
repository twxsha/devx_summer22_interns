import Styler from "stylefire";
import { animate } from "popmotion";

const customScrollBehavior = (instructions) => {
  const [{ el, left }] = instructions;
  const styler = Styler(el);

  animate({
    from: el.scrollLeft,
    to: left,
    type: "spring",
    onUpdate: (left) => styler.set("scrollLeft", left)
  });
};

export default customScrollBehavior;
