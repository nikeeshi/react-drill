import React from "react";
import styled from "styled-components/macro";
import * as types from "styled-components/cssprop";

const rand256 = () => Math.floor(Math.random() * 256);

// const Div = styled.div`
//   backgroundColor: ${props => props.color}
//   border: ${props => props.borderColor}
//   minHeight: 50px
//   width: 100%
// `;
const Box: React.FC = () => {
  const color = `rgb(${rand256()},${rand256()},${rand256()})`;
  return <div style={{ backgroundColor: color, height: 200, width: 200 }} />;
};

export default Box;
