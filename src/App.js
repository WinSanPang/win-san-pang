import React from "react";
import { Route, Switch } from "react-router-dom";

import classes from "./App.module.scss";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/work" exact render={() => <Work />} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
