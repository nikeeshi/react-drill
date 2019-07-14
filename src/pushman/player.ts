import { inputAction } from "../roots/PushMan";
import { add, getAxes, getButtons } from "../gamepad/inputNormalizer";
type Vector = [number, number];
const V = (x: number, y: number): Vector => {
  return [x, y];
};
export type Player = { pos: Vector; v: Vector };
export const initialPlayer: Player = { pos: [1, 2], v: [0, 0] };
type InputAction = ReturnType<typeof inputAction>;
const isGround = (player: Player) => {
  return player.pos[1] <= 0;
};
const isNearGround = (player: Player) => {
  return player.pos[1] < 2;
};
const clone = <X, Y>(arr: [X, Y]): [X, Y] => {
  return [arr[0], arr[1]];
};
const getNextPlayer = ({ pos, v }: Player): Player => {
  return { pos: add(pos, v), v: clone(v) };
};
const scale = 1;
const maxSpeed = 2;
const acc = 0.15 * scale;
const airAcc = 0.05 * scale;
const friction = 0.1 * scale;
const airFriction = 0.05 * scale;
const jumpSpeed = 2;
const normalize1 = (v: number) => {
  if (v > 0) return 1;
  else if (v < 0) return -1;
  else return 0;
};
const abs = Math.abs;
const max = Math.max;
const min = Math.min;
export const updatePlayer = (player: Player, { gamepad }: InputAction) => {
  const { pos, v } = getNextPlayer(player);
  const axes = getAxes(gamepad);
  const buttons = getButtons(gamepad);
  const xInput = axes[0][0];
  let a = 0;
  if (isGround(player)) {
    if (abs(xInput) > 0 && v[0] * xInput >= 0) {
      a = xInput * acc;
      if (abs(a + v[0]) > maxSpeed) {
        a = (maxSpeed - abs(v[0])) * normalize1(v[0]);
      }
    } else {
      a = -normalize1(v[0]) * min(abs(v[0]), friction);
    }
  } else {
    if (abs(xInput) > 0 && v[0] * xInput >= 0) {
      a = xInput * airAcc;
      if (abs(a + v[0]) > maxSpeed) {
        a = (maxSpeed - abs(v[0])) * normalize1(v[0]);
      }
    } else {
      a = -normalize1(v[0]) * min(abs(v[0]), airFriction);
    }
  }
  // console.log(a);
  v[0] += a;
  if (pos[1] <= 0) {
    pos[1] = 0;
    v[1] = 0;
  }
  if (isGround(player)) {
    if (buttons.A === 1) {
      v[1] = jumpSpeed;
    } else {
      v[1] = 0;
    }
  } else {
    v[1] -= 0.09;
  }

  return { pos, v };
};
