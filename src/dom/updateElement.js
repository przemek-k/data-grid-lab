import nodeChanged from "./nodeChanged";
import createElement from "./createElement";
import updateProps from "./updateProps";

const updateElement = (parent, newNode, oldNode, index = 0) => {
  if (!oldNode) {
    // Adding a new node
    parent.appendChild(createElement(newNode));
  } else if (!newNode) {
    // Removing an old node
    parent.removeChild(parent.childNodes[index]);
  } else if (nodeChanged(newNode, oldNode)) {
    // Replacing an old node with a new one
    parent.replaceChild(createElement(newNode), parent.childNodes[index]);
  } else if (newNode.type) {
    // Update node properties if element types are the same
    updateProps(parent.childNodes[index], newNode.props, oldNode.props);
    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;
    // Update children recursively
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      );
    }
  }
};

export default updateElement;
