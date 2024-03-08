const updateProps = (element, newProps, oldProps) => {
  Object.keys({ ...oldProps, ...newProps }).forEach((propName) => {
    if (newProps[propName] !== oldProps[propName]) {
      element[propName] = newProps[propName];
    } else if (!(propName in newProps)) {
      delete element[propName];
    }
  });
};

export default updateProps;
