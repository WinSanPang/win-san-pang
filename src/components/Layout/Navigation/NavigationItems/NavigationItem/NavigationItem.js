import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavigationItem.module.scss";

const navigationItem = ({ children, active, link }) => (
  <li className={classes.NavigationItem}>
    <Link to={link} className={active ? classes.active : null}>
      {children}
    </Link>
  </li>
);

export default navigationItem;
