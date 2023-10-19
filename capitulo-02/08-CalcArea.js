const circleArea = r => 3.14 * (r ** 2);
const squareArea = s => s * s;

export const circleAreaExport  = r => 3.14 * (r ** 2);
export const squareAreaExport = s => s * s;

export { circleArea, squareArea, circleArea as circle, squareArea as square};
