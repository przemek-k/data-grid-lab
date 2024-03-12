// Import necessary helper functions.
import nodeChanged from "./nodeChanged";
import createElement from "./createElement";
import updateProps from "./updateProps";

// Utility to get a unique key for each child, defaults to an index-based key if none is provided.
const getChildKey = (key, i) => key || `__index_${i}`;

/**
 * Updates or replaces elements based on the comparison between new and old virtual DOM nodes.
 *
 * @param parent The DOM element that contains the child to be updated.
 * @param newNode The new virtual DOM node.
 * @param oldNode The old virtual DOM node, representing the current state in the DOM.
 * @param index The position of the child within its parent, defaulting to 0.
 */
const updateElement = (parent, newNode, oldNode, index = 0) => {
  // Retrieve the corresponding existing child in the DOM.
  const existingChild = parent.childNodes[index];

  // Remove the existing child if there is no new node to replace it.
  if (!newNode && existingChild) {
    parent.removeChild(existingChild); // Handle removal of nodes.
  }
  // If there was no old node, simply append the new node.
  else if (!oldNode) {
    parent.appendChild(createElement(newNode)); // Handle addition of new nodes.
  }
  // If nodes have changed (based on type or key), replace the old one with the new one.
  else if (nodeChanged(newNode, oldNode)) {
    parent.replaceChild(createElement(newNode), existingChild); // Handle node replacement.
  } else if (existingChild && oldNode.type === newNode.type) {
    // Nodes are of the same type; proceed to update their properties.
    updateProps(existingChild, newNode.props, oldNode.props); // Update existing DOM node properties.

    // Key-based child matching with fallback to index for efficient updating.
    const keyMap = {};
    const oldChildren = oldNode.children || [];
    const newChildren = newNode.children || [];

    // Map old children to keys for efficient comparison.
    oldChildren.forEach((child, i) => {
      const key = getChildKey(child.key, i);
      keyMap[key] = { oldChild: child, newChildIndex: undefined };
    });

    // Map new children to the same keys, if possible, to identify matches.
    newChildren.forEach((child, i) => {
      const key = getChildKey(child.key, i);
      if (keyMap[key]) keyMap[key].newChildIndex = i;
      if (!keyMap[key]) keyMap[key] = { oldChild: undefined, newChildIndex: i };
    });

    // Process updates and additions: loop through all keys, managing children based on key matching.
    const keys = Object.keys(keyMap);
    keys.forEach((key) => {
      const { oldChild, newChildIndex } = keyMap[key];
      const newChild =
        newChildIndex !== undefined ? newChildren[newChildIndex] : undefined;
      updateElement(existingChild, newChild, oldChild, newChildIndex); // Recursive update for children.
    });

    // Remove extraneous children: If there are more existing children than new, remove the excess.
    for (let i = keys.length; i < oldChildren.length; i++) {
      parent.removeChild(existingChild.childNodes[i]); // Handle removal of excess nodes.
    }
  }
};

export default updateElement; // Export the updateElement function for external use.
