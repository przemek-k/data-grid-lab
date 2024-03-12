/**
 * Determines if two virtual nodes (new and old) are different in a way that requires
 * an update to the DOM. This function is a key part of the diffing algorithm, helping
 * to minimise unnecessary updates by identifying when a DOM element needs to be replaced
 * or its properties updated.
 *
 * @param newNode The new virtual node.
 * @param oldNode The old virtual node.
 * @returns A boolean indicating whether the two nodes differ in a significant manner.
 */
const nodeChanged = (newNode, oldNode) =>
  // Check if nodes differ by type. This includes comparing strings directly (text nodes)
  // or comparing the type of objects (e.g., 'div', 'span'). If the types don't match,
  // it's a clear indicator that the nodes have changed.
  typeof newNode !== typeof oldNode ||
  // If both nodes are strings and they are not equal, then the nodes have changed.
  // This is a common case for text content updates within elements.
  (typeof newNode === "string" && newNode !== oldNode) ||
  // If the types of nodes are different (indicating different elements), then the nodes
  // have changed. This could involve differences in element types (e.g., a 'div' becoming
  // a 'span') or component types in a component-based architecture.
  newNode.type !== oldNode.type ||
  // Checks for a 'key' property within props. The key property is used to identify nodes
  // in lists uniquely. If the keys of two nodes differ, it indicates that they represent
  // different elements, even if other properties might be the same.
  newNode.props?.key !== oldNode.props?.key;

export default nodeChanged; // Export the nodeChanged function for external use.
