import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavigationItem.module.scss";

const NavigationItem = ({ children, link }) => {
  let linkClass = null;

  if (link === "/") {
    linkClass = classes.NavigationItemHome;
  } else if (link === "/skills") {
    linkClass = classes.NavigationItemSkills;
  } else if (link === "/work") {
    linkClass = classes.NavigationItemWork;
  } else if (link === "/education") {
    linkClass = classes.NavigationItemEducation;
  } else if (link === "/hobbies") {
    linkClass = classes.NavigationItemHobbies;
  } else if (link === "/portfolio") {
    linkClass = classes.NavigationItemPortfolio;
  } else if (link === "/contact") {
    linkClass = classes.NavigationItemContact;
  }

  return (
    <li className={classes.NavigationItem}>
      <Link to={link} className={linkClass}>
        {children}
      </Link>
    </li>
  );
};

export default NavigationItem;
