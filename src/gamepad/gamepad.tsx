import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
const getGamepad = (): Gamepad | null => {
  const gamepads = [...navigator.getGamepads()];
  const oneGamepad = gamepads.find(
    (gamepad): gamepad is Gamepad => gamepad !== null
  );
  return oneGamepad || null;
};
export const GamepadProvider: React.FC<{
  children: (gamepad: Gamepad | null) => ReactNode;
}> = ({ children }) => {
  const [gamepad, setGamepad] = useState<Gamepad | null>(null);
  useEffect(() => {
    setInterval(() => setGamepad(getGamepad()));
  }, []);
  return <>{children(gamepad)}</>;
};
