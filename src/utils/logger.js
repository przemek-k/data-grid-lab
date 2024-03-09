const logger = (prev, next) => {
  console.group("State");
  console.log("Prev: ", prev);
  console.log("Next: ", next);
  console.groupEnd();
};

export default logger;
