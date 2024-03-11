const nodeChanged = (newNode, oldNode) =>
  typeof newNode !== typeof oldNode ||
  (typeof newNode === "string" && newNode !== oldNode) ||
  newNode.type !== oldNode.type ||
  newNode.props?.key !== oldNode.props?.key;

export default nodeChanged;
