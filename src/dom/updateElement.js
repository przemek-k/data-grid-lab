import nodeChanged from "./nodeChanged";
import createElement from "./createElement";
import updateProps from "./updateProps";

// Utility to get a unique key for each child, defaults to an index-based key if none provided.
const getChildKey = (key, i) => key || `__index_${i}`;

// Updates or replaces elements based on comparison between new and old virtual DOM nodes.
const updateElement = (parent, newNode, oldNode, index = 0) => {
  // Retrieve the corresponding existing child in the DOM.
  const existingChild = parent.childNodes[index];

  // Remove the existing child if there is no new node to replace it.
  if (!newNode && existingChild) parent.removeChild(existingChild);
  // If there was no old node, simply append the new node.
  else if (!oldNode) parent.appendChild(createElement(newNode));
  // If nodes have changed (based on type or key), replace the old one with the new one.
  else if (nodeChanged(newNode, oldNode))
    parent.replaceChild(createElement(newNode), existingChild);
  else if (existingChild && oldNode.type === newNode.type) {
    // Nodes are of the same type; update their properties.
    updateProps(existingChild, newNode.props, oldNode.props);

    // Key-based child matching with fallback to index.
    const keyMap = {};
    const oldChildren = oldNode.children || [];
    const newChildren = newNode.children || [];

    oldChildren.forEach((child, i) => {
      const key = getChildKey(child.key, i);
      keyMap[key] = { oldChild: child, newChildIndex: undefined };
    });

    newChildren.forEach((child, i) => {
      const key = getChildKey(child.key, i);
      if (keyMap[key]) keyMap[key].newChildIndex = i;
      if (!keyMap[key]) keyMap[key] = { oldChild: undefined, newChildIndex: i };
    });

    // Process updates and additions: loop through all keys, manage children based on key matching.
    const keys = Object.keys(keyMap);
    keys.forEach((key) => {
      const { oldChild, newChildIndex } = keyMap[key];
      const newChild =
        newChildIndex !== undefined ? newChildren[newChildIndex] : undefined;
      updateElement(existingChild, newChild, oldChild, newChildIndex);
    });

    // Remove extraneous children: If there are more existing children than new, remove the excess.
    for (let i = keys.length; i < oldChildren.length; i++) {
      parent.removeChild(existingChild.childNodes[i]);
    }
  }
};

export default updateElement;
