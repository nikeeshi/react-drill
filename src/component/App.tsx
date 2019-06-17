import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SideNav from "./SideNav";
import { Root } from "../root/Root";
import { pages } from "../root/pageLoader";
import { Row, Box } from "../grid/GridBox";
const App: React.FC = () => {
  return (
    <Router>
      <Row>
        <SideNav />
        <Box base={3}>
          {pages.map(page => (
            <Route
              key={page.name}
              path={page.path}
              component={page.component}
            />
          ))}
          <Route path="/" exact component={Root} />
        </Box>
      </Row>
    </Router>
  );
};

export default App;
