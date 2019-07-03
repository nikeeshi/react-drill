import React, { useState, useEffect } from "react";
import { Page } from "../lib/Page";
type Props = {
  secretValue: number;
};
const Secret = ({ secretValue }: Props) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div>
      <button onClick={() => setRevealed(true)}>Reveal</button>{" "}
      {revealed ? secretValue : "*"}
    </div>
  );
};
function generate() {
  return Math.floor(Math.random() * 10000);
}
export function RandomPicker() {
  const [randomNumber, setRandomNumber] = useState(generate());
  return (
    <div>
      <button onClick={() => setRandomNumber(generate())}>
        Generate random number
      </button>{" "}
      <Secret secretValue={randomNumber} key={randomNumber} />
    </div>
  );
}
