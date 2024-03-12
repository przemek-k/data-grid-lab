// Import the setProperties function and constants for handling SVG elements.
import setProperties from "./setProperties";
import { xmlns, SVG_ELEMENTS } from "./constants";

/**
 * Creates a DOM element or text node based on the provided virtual node (VNode).
 *
 * @param node A virtual node (VNode) representing the desired DOM structure.
 * @returns The created DOM element or text node.
 */
const createElement = (node) => {
  // If the node is a string, it represents a text node in the virtual DOM.
  if (typeof node === "string") {
    // Create and return a text node for the provided string content.
    return document.createTextNode(node);
  }

  // Determine if the element to be created is an SVG element. SVG elements need to be created
  // with a specific namespace. Check if the element's type is included in the predefined list
  // of SVG_ELEMENTS. If so, use document.createElementNS with the appropriate XML namespace;
  // otherwise, use the standard document.createElement.
  const element = SVG_ELEMENTS.includes(node.type)
    ? document.createElementNS(xmlns, node.type) // Create an SVG element with the correct namespace.
    : document.createElement(node.type); // Create a standard DOM element.

  // Set properties (attributes) on the created element based on the virtual node's props.
  setProperties(element, node.props);

  // Recursively create DOM elements for all children of the current virtual node,
  // then append each created child element to the current element.
  node.children.map(createElement).forEach(element.appendChild.bind(element));

  // Return the fully constructed element, ready to be inserted into the DOM.
  return element;
};

export default createElement; // Export the createElement function for external use.
