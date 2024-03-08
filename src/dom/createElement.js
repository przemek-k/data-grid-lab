import setProperties from "./setProperties";
import { xmlns, SVG_ELEMENTS } from "./constants";

const createElement = (node) => {
  if (typeof node === "string") return document.createTextNode(node);
  const element = SVG_ELEMENTS.includes(node.type)
    ? document.createElementNS(xmlns, node.type)
    : document.createElement(node.type);

  setProperties(element, node.props);
  node.children.map(createElement).forEach(element.appendChild.bind(element));
  return element;
};

export default createElement;
