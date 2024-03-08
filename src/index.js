import "./style.css";
import { updateElement } from "./dom";
import { Navbar, Header } from "./components";

/* Prevents flashes of unstyled SVGs */
document.addEventListener(
  "DOMContentLoaded",
  () => (document.body.style.visibility = "visible")
);

updateElement(document.getElementById("root"), {
  type: "div",
  props: {},
  children: [Navbar(), Header()],
});
