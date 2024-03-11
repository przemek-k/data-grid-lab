const logger = (prev, next) => {
  console.groupCollapsed("State Update");
  console.log("Prev: ", prev);
  console.log("Next: ", next);
  console.groupEnd();
};

export default logger;
