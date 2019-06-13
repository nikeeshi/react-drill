import React from "react";
import { Link } from "react-router-dom";
import "styled-components/macro";
import styled from "styled-components/macro";
import { Row, Box } from "../grid/GridBox";
const NavLink = styled.a`
  padding: 0 10px;
`;
const ReactRouterLink = styled(Link)`
  padding: 0 10px;
`;
const TopNav: React.FC = () => {
  return (
    <Row>
      <div>
        <div>
          <ReactRouterLink to="/">React drill</ReactRouterLink>
        </div>
        <div>
          <ReactRouterLink to="/hoge">Hoge</ReactRouterLink>
        </div>
        <div>
          <ReactRouterLink to="/fuga">Fuga</ReactRouterLink>
        </div>
      </div>
      <NavLink href="https://github.com/nikeeshi/react-drill">Github</NavLink>
      <NavLink href="http://nikeeshipro.hatenablog.com/">My blog</NavLink>
    </Row>
  );
};

export default TopNav;
