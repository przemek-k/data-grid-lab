import "./style.css";
import { updateElement } from "./dom";
import { logger } from "./utils";
import App from "./App";
import store from "./store";

/* Prevents flashes of unstyled SVGs */
document.addEventListener(
  "DOMContentLoaded",
  () => (document.body.style.visibility = "visible")
);

const render = () => {
  let prevState = null;

  return (nextState) => {
    if (process.env.NODE_ENV === "development") logger(prevState, nextState);
    updateElement(
      document.getElementById("root"),
      App(nextState),
      prevState && App(prevState)
    );
    prevState = { ...nextState };
  };
};

store.dispatch({ type: "INIT" });
store.subscribe(render());
