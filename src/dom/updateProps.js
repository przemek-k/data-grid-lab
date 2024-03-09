import { SVG_ELEMENTS } from "./constants";

const updateProps = (element, newProps, oldProps = {}) =>
  Object.entries({ ...oldProps, ...newProps }).forEach(
    ([propName, propValue]) => {
      // Condition to check if it's an update scenario or a removal scenario
      const isUpdateScenario = propName in newProps;

      // Handling SVG elements attributes with or without namespace
      if (SVG_ELEMENTS.includes(element.tagName.toLowerCase())) {
        if (propName === "href" && element.tagName.toLowerCase() === "use") {
          if (isUpdateScenario) {
            element.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "href",
              propValue
            );
          } else {
            element.removeAttributeNS("http://www.w3.org/1999/xlink", "href");
          }
        } else {
          if (isUpdateScenario) {
            element.setAttributeNS(null, propName, propValue);
          } else {
            element.removeAttribute(propName);
          }
        }
      } else if (
        propName.startsWith("on") &&
        isUpdateScenario &&
        typeof propValue === "function"
      ) {
        // Add or update event listeners
        const eventName = propName.substring(2).toLowerCase();
        // Remove old event listener
        if (oldProps[propName])
          element.removeEventListener(eventName, oldProps[propName]);
        // Add new event listener
        element.addEventListener(eventName, propValue);
      } else if (typeof propValue === "boolean") {
        if (isUpdateScenario) {
          propValue
            ? element.setAttribute(propName, "")
            : element.removeAttribute(propName);
        } else {
          element.removeAttribute(propName);
        }
      } else {
        if (isUpdateScenario) {
          element.setAttribute(propName, propValue);
        } else {
          element.removeAttribute(propName);
        }
      }
    }
  );

export default updateProps;
