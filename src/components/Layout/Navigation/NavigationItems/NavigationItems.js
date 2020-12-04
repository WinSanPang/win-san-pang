import React from "react";

import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/skills">Skills</NavigationItem>
    <NavigationItem link="/work">Work</NavigationItem>
    <NavigationItem link="/education">Education</NavigationItem>
    <NavigationItem link="/hobbies">Hobbies</NavigationItem>
    <NavigationItem link="/portfolio">Portfolio</NavigationItem>
    <NavigationItem link="/contact">Contact</NavigationItem>
  </ul>
);

export default NavigationItems;
