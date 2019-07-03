import React from "react";
import { NavLink } from "react-router-dom";
import "styled-components/macro";
import styled from "styled-components/macro";
import { pageConfig } from "../pageConfig";
const SideNavContainer = styled.div`
  background: darkblue;
  height: 100vh;
`;
const ExternalLink = styled.a`
  padding: 0 10px;
  color: white;
  :hover {
    text-decoration: underline dashed;
  }
`;
const ReactRouterLink = styled(NavLink)`
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
      {pageConfig.map(
        page =>
          page.navigation!=="invisible" && (
            <div key={page.name}>
              <ReactRouterLink to={page.path}>{page.name}</ReactRouterLink>
            </div>
          )
      )}
      <br />
      <div>
        <ExternalLink href="https://github.com/nikeeshi/react-drill">
          Github
        </ExternalLink>
      </div>
      <div>
        <ExternalLink href="http://nikeeshipro.hatenablog.com/">
          My blog
        </ExternalLink>
      </div>
    </SideNavContainer>
  );
};

export default SideNav;
