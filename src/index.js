import "./style.css";
import { updateElement } from "./dom";
import { logger } from "./services";
import App from "./App";
import { feed } from "./services";

/* Prevents flashes of unstyled SVGs */
document.addEventListener(
  "DOMContentLoaded",
  () => (document.body.style.visibility = "visible")
);

const render = () => {
  let prev = null;

  return (state) => {
    if (process.env.NODE_ENV === "development") logger(state);
    updateElement(
      document.getElementById("root"),
      App(state),
      prev && App(prev)
    );
    prev = { ...state };
  };
};

feed.dispatch({ type: "INIT" });
feed.subscribe(render());
