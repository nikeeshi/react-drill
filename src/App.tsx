import React from "react";
import "./App.css";
import Box from "./component/Box";
import Styled from "./component/Styled";
import NavigationBar from "./component/NavigationBar";

const App: React.FC = () => {
  return (
    <div>
      <NavigationBar/>
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
        <Styled />
      </div>
    </div>
  );
};

export default App;
