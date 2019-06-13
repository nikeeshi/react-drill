import React, { ReactNode } from "react";
import "styled-components/macro";
import * as types from "styled-components/cssprop";
// import { Block } from "../styled/Block";
export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
type ThemeContextProps = { foreground: string; background: string };
const ThemeContext = React.createContext<ThemeContextProps>(themes.dark);
export const ThemedBlock = ({ children }: { children?: ReactNode }) => (
  <ThemeContext.Consumer>
    {value => (
      <div
        css={`
          background: ${value.background};
          color: ${value.foreground};
        `}
      >
        {children}
      </div>
    )}
  </ThemeContext.Consumer>
);
export default ThemeContext;
