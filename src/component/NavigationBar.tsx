import React from "react";
import "styled-components/macro";
// import * as types from "styled-components/cssprop";
import styled from "styled-components/macro";
const NavLink = styled.a`
  padding: 0 10px;
`;
const NavigationBar: React.FC = () => {
  return (
    <div>
      <NavLink href="./">React drill</NavLink>
      <NavLink href="https://github.com/nikeeshi/react-drill">Github</NavLink>
      <NavLink href="http://nikeeshipro.hatenablog.com/">My blog</NavLink>
    </div>
  );
};

export default NavigationBar;
