const logger = (prev, next) => {
  console.group("State");
  console.log("Prev state: ", prev);
  console.log("Next state: ", next);
  console.groupEnd();
};

export default logger;
