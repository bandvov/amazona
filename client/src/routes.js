import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "./CONSTANTS";

export default function Routes() {
  return (
    <Switch>
      {ROUTES.map((route) => {
        return (
          <Route
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        );
      })}
      <Redirect to={"/404"}>
        <h1>Page not found</h1>
      </Redirect>
    </Switch>
  );
}
