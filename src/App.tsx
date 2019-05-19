import React from "react";
import "./App.css";
import Box from "./component/Box";
import Styled from "./component/Styled";

const App: React.FC = () => {
  return (
    <div
      style={{
        borderStyle: "solid",
        borderWidth: 1,
        display: "flex",
        height: 300
      }}
    >
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Styled/>
    </div>
  );
};

export default App;
