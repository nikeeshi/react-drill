import React from "react";
import { Link } from "react-router-dom";
import "styled-components/macro";
import styled from "styled-components/macro";
import { Row } from "../grid/GridBox";
import { pages } from "../root/pageLoader";
const SideNavContainer = styled.div`
  background: darkblue;
  height: 100vh;
`;
const NavLink = styled.a`
  padding: 0 10px;
  color: white;
  :hover {
    text-decoration: underline dashed;
  }
`;
const ReactRouterLink = styled(Link)`
  padding: 0 10px;
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
const SideNav: React.FC = () => {
  return (
    <SideNavContainer>
      <div>
        <ReactRouterLink to="/">React drill</ReactRouterLink>
      </div>
      {pages.map(page => (
        <div key={page.name}>
          <ReactRouterLink to={page.path}>{page.name}</ReactRouterLink>
        </div>
      ))}
      <br />
      <div>
        <NavLink href="https://github.com/nikeeshi/react-drill">Github</NavLink>
      </div>
      <div>
        <NavLink href="http://nikeeshipro.hatenablog.com/">My blog</NavLink>
      </div>
    </SideNavContainer>
  );
};

export default SideNav;
