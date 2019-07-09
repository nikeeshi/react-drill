import React from "react";
import { HashRouter as Router } from "react-router-dom";
import SideNav from "./SideNav";
import { Row, Box } from "../grid/GridBox";
import { FlatRouter } from "../lib/flatRouter";
import { pageConfig } from "../pageConfig";
const App: React.FC = () => {
  return (
    <Router>
      <Row>
        <SideNav />
        <Box base={3}>
          <FlatRouter pages={pageConfig} />
        </Box>
      </Row>
    </Router>
  );
};

export default App;
