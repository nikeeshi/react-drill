export type Vector = [number, number];
export const norm = ([x, y]: Vector) => {
  return Math.sqrt(x * x + y * y);
};
export const zero: Vector = [0, 0];
export const multi = ([x, y]: Vector, n: number): Vector => {
  return [x * n, y * n];
};
export const div = ([x, y]: Vector, n: number): Vector => {
  return [x / n, y / n];
};
export const add = (a: Vector, b: Vector): Vector => {
  return [a[0] + b[0], a[1] + b[1]];
};
// v/norm(v)
export const normalize = (v: Vector): Vector => {
  return div(v, norm(v));
};
//
export const cap = (v: Vector, upperBound: number): Vector => {
  if (norm(v) > upperBound) return multi(v, upperBound / norm(v));
  else return v;
};
export const stick = (v: Vector, threshold: number): Vector => {
  if (norm(v) < threshold) return zero;
  else return v;
};
export const getAxes = (gamepad: Gamepad): [Vector, Vector] => {
  const axes = gamepad.axes;
  return [
    stick(cap([axes[0], -axes[1]], 1), 0.17),
    stick(cap([axes[2], -axes[3]], 1), 0.17)
  ];
};
type Buttons = {
  A: number;
  B: number;
  X: number;
  Y: number;
  LB: number;
  RB: number;
  LT: number;
  RT: number;
  View: number;
  Menu: number;
  LStick: number;
  RStick: number;
  Up: number;
  Down: number;
  Left: number;
  Right: number;
  Guide: number; // Not working
};
export const getButtons = (gamepad: Gamepad): Buttons => {
  const [
    A,
    B,
    X,
    Y,
    LB,
    RB,
    LT,
    RT,
    View,
    Menu,
    LStick,
    RStick,
    Up,
    Down,
    Left,
    Right,
    Guide
  ] = gamepad.buttons.map(button => button.value);
  return {
    A,
    B,
    X,
    Y,
    LB,
    RB,
    LT,
    RT,
    View,
    Menu,
    LStick,
    RStick,
    Up,
    Down,
    Left,
    Right,
    Guide
  };
};
