const classNames = (...args) => {
  const classes = [];

  args.forEach((arg) => {
    if (typeof arg === "string") {
      // Direct strings are simply added
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      // Arrays are recursively processed
      classes.push(classNames(...arg));
    } else if (typeof arg === "object") {
      // Objects are added based on their truthy value
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" "); // Join all valid classes as a single string
};

export default classNames;
