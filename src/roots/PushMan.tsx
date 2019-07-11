import * as React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { GamepadProvider } from "../gamepad/gamepadProvider";
const Block: React.FC<{ x: number; y: number }> = ({ x, y }) => {
  return (
    <div
      css={css`
        box-sizing: border-box;
        height: 15px;
        width: 15px;
        position: absolute;
        border: 3px solid black;
        top: ${y}px;
        left: ${x}px;
      `}
    />
  );
};

export const PushMan: React.FC = () => {
  return (
    <div
      css={css`
        box-sizing: border-box;
        height: 300px;
        width: 300px;
        position: relative;
        border: 3px solid #73ad21;
      `}
    >
      <GamepadProvider>
        {(gamepad: Gamepad | null) => (
          <div>
            {gamepad && <Block x={(1+gamepad.axes[0])/2*279} y={(1+gamepad.axes[1])/2*279} />}
            {gamepad && <Block x={(1+gamepad.axes[2])/2*279} y={(1+gamepad.axes[3])/2*279} />}
          </div>
        )}
      </GamepadProvider>
    </div>
  );
};
