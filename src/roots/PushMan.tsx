import * as React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { getGamepad } from "../gamepad/gamepadProvider";
import { useReducer } from "react";
import { useTick } from "../hooks/useTick";
import { Player, updatePlayer, initialPlayer } from "../pushman/player";
const Block: React.FC<{ x: number; y: number }> = ({ x, y }) => {
  return (
    <div
      css={css`
        box-sizing: border-box;
        height: 15px;
        width: 15px;
        position: absolute;
        border: 3px solid black;
        bottom: ${y}px;
        left: ${x}px;
      `}
    />
  );
};

type State = {
  player1: Player;
};
export function inputAction(gamepad: Gamepad) {
  return { type: "InputAction", gamepad } as const;
}
type Action = ReturnType<typeof inputAction>;
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "InputAction": {
      return { player1: updatePlayer(state.player1, action) };
    }
  }
  return state;
};
const PlayerBlock: React.FC<{ player: Player }> = ({
  player: {
    pos: [x, y]
  }
}) => {
  return <Block x={x} y={y} />;
};
export const PushMan: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { player1: initialPlayer });
  useTick(() => {
    const gamepad = getGamepad();
    if (gamepad) {
      dispatch(inputAction(gamepad));
    }
  });
  return (
    <div>
      <p>
        ゲームパッドをつないでみてね。
        <br />
        Aボタンはジャンプ、スティックで移動するよ。
      </p>

      <div
        css={css`
          height: 300px;
          width: 300px;
          position: relative;
          border: 3px solid #73ad21;
        `}
      >
        <PlayerBlock player={state.player1} />
      </div>
    </div>
  );
};
