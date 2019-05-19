import React from "react";
import 'styled-components/macro';

const rand256 = () => Math.floor(Math.random() * 256);
const Box: React.FC = () => {
  const color = `rgb(${rand256()},${rand256()},${rand256()})`;
  return <div style={{ backgroundColor: color, height: 200, width: 200 }} />;
};

export default Box;
