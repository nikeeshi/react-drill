export const getGamepad = (): Gamepad | null => {
  const gamepads = [...navigator.getGamepads()];
  const oneGamepad = gamepads.find(
    (gamepad): gamepad is Gamepad => gamepad !== null
  );
  return oneGamepad || null;
};