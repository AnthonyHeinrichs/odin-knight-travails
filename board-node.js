const Node = ([x, y]) => {
  return {
    value: `[${x}, ${y}]`, 
    prev: null 
  }
};

export default Node