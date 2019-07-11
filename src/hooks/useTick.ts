import { useEffect } from "react";

export function useTick(callback: (time: number) => void) {
  useEffect(() => {
    let isAlive: boolean = true;
    function tick(time: number) {
      if (isAlive) {
        callback(time);
        window.requestAnimationFrame(tick);
      }
    }
    window.requestAnimationFrame(tick);
    return () => {
      isAlive = false;
    };
  });
}
