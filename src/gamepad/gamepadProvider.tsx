import React, { useEffect, useState, ReactNode } from "react";
import { useTick } from "../hooks/useTick";
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
  useTick(() => {
    setGamepad(getGamepad());
  });
  return <>{children(gamepad)}</>;
};
