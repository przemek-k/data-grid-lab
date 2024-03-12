// Import constants for handling special attributes related to SVG elements.
import { SVG_ELEMENTS, xlink } from "./constants";

/**
 * Updates or removes properties on a DOM element based on the differences
 * between new and old properties.
 *
 * @param element The DOM element to be updated.
 * @param newProps An object containing the new properties.
 * @param oldProps An object containing the previous properties (defaults to an empty object if not provided).
 */
const updateProps = (element, newProps, oldProps = {}) =>
  // Merge old and new properties to iterate over all keys. This allows us to consider both
  // properties that may need to be added (present in newProps but not oldProps) and those
  // that may need to be removed (present in oldProps but not newProps).
  Object.entries({ ...oldProps, ...newProps }).forEach(
    ([propName, propValue]) => {
      // Determine if the current operation is to update (including addition) or remove the property.
      const isUpdateScenario = propName in newProps;
      const tagNameLower = element.tagName.toLowerCase(); // Normalise tag name for comparison.

      // Function to handle SVG element attributes, taking namespacing into account.
      // This is necessary for attributes like 'href' on SVG <use> elements which require
      // a specific namespace.
      const handleSVGAttributes = () => {
        if (propName === "href" && tagNameLower === "use") {
          isUpdateScenario
            ? element.setAttributeNS(xlink, "href", propValue) // Set the attribute in the xlink namespace.
            : element.removeAttributeNS(xlink, "href"); // Remove the attribute.
        } else {
          isUpdateScenario
            ? element.setAttributeNS(null, propName, propValue) // Set attribute without a namespace.
            : element.removeAttribute(propName); // Remove attribute.
        }
      };

      // Check if element is an SVG element and requires special attribute handling.
      if (SVG_ELEMENTS.includes(tagNameLower)) handleSVGAttributes();
      else if (propName.startsWith("on") && typeof propValue === "function") {
        // Add or update event listeners if the property is an event handler.
        const eventName = propName.substring(2).toLowerCase(); // Extract the event name from the property.
        oldProps[propName] &&
          element.removeEventListener(eventName, oldProps[propName]); // Remove the old event listener if present.
        element.addEventListener(eventName, propValue); // Add the new event listener.
      } else if (typeof propValue === "boolean") {
        // Handle boolean attributes by either setting them with an empty string (true) or
        // removing them (false).
        isUpdateScenario
          ? propValue
            ? element.setAttribute(propName, "")
            : element.removeAttribute(propName)
          : element.removeAttribute(propName);
      } else {
        // For all other attributes, set or remove them based on the update scenario.
        isUpdateScenario
          ? element.setAttribute(propName, propValue)
          : element.removeAttribute(propName);
      }
    }
  );

export default updateProps; // Export the function for external use.
