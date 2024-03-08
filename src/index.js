import "./style.css";
import { updateElement } from "./dom";
import { Header, Main, Navbar } from "./layouts";

/* Prevents flashes of unstyled SVGs */
document.addEventListener(
  "DOMContentLoaded",
  () => (document.body.style.visibility = "visible")
);

updateElement(document.getElementById("root"), {
  type: "div",
  props: {},
  children: [Navbar(), Header(), Main()],
});
