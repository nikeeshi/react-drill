import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Box from "./component/Box";
import Styled from "./component/Styled";
import TopNav from "./component/TopNav";
import { ColoredBlock } from "./styled/ColorBoxs";
import { ThemedBlock } from "./context/ThemeContext";

const A = () => <>A</>;
const B = () => <>B</>;
const C = () => <>C</>;
const Root = () => {
  return <Router>
    <App/>
  </Router>;
};
const App: React.FC = () => {
  return (
    <div>
      <TopNav />
      <div>Body</div>
    </div>
  );
};

export default Root;
