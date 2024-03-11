import { SVG_ELEMENTS, xlink } from "./constants";

const updateProps = (element, newProps, oldProps = {}) =>
  Object.entries({ ...oldProps, ...newProps }).forEach(
    ([propName, propValue]) => {
      // Condition to check if it's an update scenario or a removal scenario
      const isUpdateScenario = propName in newProps;
      const tagNameLower = element.tagName.toLowerCase();
      const handleSVGAttributes = () => {
        if (propName === "href" && tagNameLower === "use") {
          isUpdateScenario
            ? element.setAttributeNS(xlink, "href", propValue)
            : element.removeAttributeNS("http://www.w3.org/1999/xlink", "href");
        } else {
          isUpdateScenario
            ? element.setAttributeNS(null, propName, propValue)
            : element.removeAttribute(propName);
        }
      };

      // Handling SVG elements attributes with or without namespace
      if (SVG_ELEMENTS.includes(tagNameLower)) handleSVGAttributes();
      else if (propName.startsWith("on") && typeof propValue === "function") {
        // Add or update event listeners
        const eventName = propName.substring(2).toLowerCase();
        oldProps[propName] &&
          element.removeEventListener(eventName, oldProps[propName]);
        element.addEventListener(eventName, propValue);
      } else if (typeof propValue === "boolean") {
        isUpdateScenario
          ? propValue
            ? element.setAttribute(propName, "")
            : element.removeAttribute(propName)
          : element.removeAttribute(propName);
      } else {
        isUpdateScenario
          ? element.setAttribute(propName, propValue)
          : element.removeAttribute(propName);
      }
    }
  );

export default updateProps;
