// Import constants for handling special attributes related to SVG elements.
import { SVG_ELEMENTS, xlink } from "./constants";

/**
 * Sets properties (attributes and event listeners) on a newly created DOM element
 * based on the virtual node's properties.
 *
 * @param element The newly created DOM element to which properties will be applied.
 * @param props An object containing the properties to be set on the element.
 */
const setProperties = (element, props) => {
  // Cache the element's tag name in lowercase for consistent comparisons.
  const tagNameLower = element.tagName.toLowerCase();

  // Iterate over each property in the props object.
  Object.entries(props).forEach(([propName, propValue]) => {
    // Check if the element is an SVG element, which requires special handling
    // for attributes, particularly when dealing with namespaces.
    if (SVG_ELEMENTS.includes(tagNameLower)) {
      // Directly set attributes for SVG elements, with special handling for the 'href'
      // attribute of SVG 'use' tags, which requires a namespace.
      if (propName === "href" && tagNameLower === "use") {
        element.setAttributeNS(xlink, "href", propValue);
      } else {
        // For other SVG attributes, set them with a null namespace.
        element.setAttributeNS(null, propName, propValue);
      }
    } else if (propName.startsWith("on") && typeof propValue === "function") {
      // For properties beginning with "on", treat them as event listeners.
      // Slice off the "on" prefix and convert the rest to lowercase to get the event name,
      // then register the provided function as an event listener for that event.
      element.addEventListener(propName.slice(2).toLowerCase(), propValue);
    } else if (typeof propValue === "boolean") {
      // Boolean properties are either set as empty attributes (true) or removed (false).
      // This handles attributes like "disabled" which do not require a value.
      propValue
        ? element.setAttribute(propName, "")
        : element.removeAttribute(propName);
    } else {
      // For all other types of properties, set them as standard attributes on the element.
      element.setAttribute(propName, propValue);
    }
  });
};

export default setProperties; // Export the function for external use.
