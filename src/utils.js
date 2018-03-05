const checkLeftOrRight = (side, others = []) =>
  ['left', 'right', ...others].indexOf(side) >= 0

export { checkLeftOrRight }
