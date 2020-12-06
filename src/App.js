import React from "react";
import { Route, Switch } from "react-router-dom";

import classes from "./App.module.scss";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Education from "./pages/Education/Education";
import Hobbies from "./pages/Hobbies/Hobbies";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/skills" exact render={() => <Skills />} />
            <Route path="/work" exact render={() => <Work />} />
            <Route path="/education" exact render={() => <Education />} />
            <Route path="/hobbies" exact render={() => <Hobbies />} />
            <Route path="/portfolio" exact render={() => <Portfolio />} />
            <Route path="/contact" exact render={() => <Contact />} />
          </Switch>
        </Layout>
      </div>
  );
}

export default App;
