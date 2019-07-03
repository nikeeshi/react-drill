import React from "react";
import { Page } from "./Page";
import { Route } from "react-router-dom";

export const FlatRouter: React.FC<{ pages: Page[] }> = ({ pages }) => {
  return (
    <>
      {pages.map(page => {
        const isRoot = page.path === "/";
        return (
          <Route
            key={page.name}
            path={page.path}
            exact={isRoot}
            component={page.component}
          />
        );
      })}
    </>
  );
};
