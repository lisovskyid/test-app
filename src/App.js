import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import routes from "./routes";
import { mockRewards, users as mockUsers } from "./mocks/rewards";
import { ls } from "./services";

const App = () => {
  const defaultRoute = process.env.REACT_APP_REDIRECT_AFTER_FIRST_MOUNT;

  //remove when connect rest api
  useEffect(() => {
    databaseImitation(mockRewards, mockUsers);
  }, []);

  const databaseImitation = () => {
    const hasRewards = ls.get("rewards") === true;
    if (hasRewards) return;

    ls.save("rewards", mockRewards);
    ls.save("users", mockUsers);
  };

  const mapRoutes = () =>
    routes.map((props) => {
      const { component: Page, path, exact } = props;

      return (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => <Page {...props} />}
        />
      );
    });

  return (
    <Router>
      <Route exact path="/">
        <Redirect to={defaultRoute} />
      </Route>
      <Switch>{mapRoutes()}</Switch>
    </Router>
  );
};

export default App;
