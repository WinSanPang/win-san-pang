import React from "react";

import classes from "./NavigationMenu.module.scss";
/* import Logo from '../../Logo/Logo'; */
import NavigationItems from "../NavigationItems/NavigationItems";
import SidebarToggle from "../../Navigation/Sidebar/SidebarToggle/SidebarToggle";

const navigationMenu = ({ sidebarToggleClicked }) => (
  <header className={classes.NavigationMenu}>
    <SidebarToggle clicked={sidebarToggleClicked} />
    <div className={classes.NavigationMenuLogo}>{/* <Logo/> */}</div>
    <nav className={classes.NavigationMenuDesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default navigationMenu;
