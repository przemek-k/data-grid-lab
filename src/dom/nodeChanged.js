const nodeChanged = (node1, node2) =>
  typeof node1 !== typeof node2 ||
  (typeof node1 === "string" && node1 !== node2) ||
  node1.type !== node2.type;

export default nodeChanged;
