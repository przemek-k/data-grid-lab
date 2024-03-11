import { SVG_ELEMENTS, xlink } from "./constants";

const setProperties = (element, props) => {
  const tagNameLower = element.tagName.toLowerCase(); // Cache tagName in lowercase
  Object.entries(props).forEach(([propName, propValue]) => {
    if (SVG_ELEMENTS.includes(tagNameLower)) {
      // Directly set attributes for SVG elements, handling 'href' for 'use' tag specifically
      if (propName === "href" && tagNameLower === "use") {
        element.setAttributeNS(xlink, "href", propValue);
      } else {
        element.setAttributeNS(null, propName, propValue);
      }
    } else if (propName.startsWith("on") && typeof propValue === "function") {
      // Register event listeners for props starting with 'on'
      element.addEventListener(propName.slice(2).toLowerCase(), propValue);
    } else if (typeof propValue === "boolean") {
      // Handle boolean attributes, adding or removing based on truthiness
      propValue
        ? element.setAttribute(propName, "")
        : element.removeAttribute(propName);
    } else {
      // Default case: Set regular attributes
      element.setAttribute(propName, propValue);
    }
  });
};

export default setProperties;
