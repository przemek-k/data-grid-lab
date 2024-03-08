import { SVG_ELEMENTS } from "./constants";

const setProperties = (element, props) => {
  Object.entries(props).forEach(([propName, propValue]) => {
    // Check if dealing with an SVG element and set attributes with or without namespace
    if (SVG_ELEMENTS.includes(element.tagName.toLowerCase())) {
      // For SVG elements, use setAttributeNS for attributes that need it
      // Here we use null for the namespaceURI parameter for attributes that are in no namespace
      // For certain attributes like 'xlink:href', a proper namespace URI should be used
      if (propName === "href" && element.tagName.toLowerCase() === "use") {
        element.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "href",
          propValue
        );
      } else {
        element.setAttributeNS(null, propName, propValue);
      }
    } else if (propName.startsWith("on") && typeof propValue === "function") {
      // Assuming propName is in the form 'onClick', 'onSubmit', etc.
      // Here we register event listeners directly
      element.addEventListener(propName.substring(2).toLowerCase(), propValue);
    } else if (typeof propValue === "boolean") {
      // Specifically for boolean attributes. Example: 'disabled'
      // If the value is true, add the attribute, otherwise ensure it's not present
      propValue
        ? element.setAttribute(propName, "")
        : element.removeAttribute(propName);
    } else {
      // For non-SVG elements or attributes not requiring namespaces
      element.setAttribute(propName, propValue);
    }
  });
};

export default setProperties;
