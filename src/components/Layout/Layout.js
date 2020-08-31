import React, { useState } from "react";

import classes from "./Layout.module.scss";
import Aux from "../../hoc/Aux";
import NavigationMenu from "./Navigation/NavigationMenu/NavigationMenu";
import Sidebar from "./Navigation/Sidebar/Sidebar";
/* import Footer from './Footer/Footer'; */

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarClosedHandler = () => {
    setShowSidebar(false);
  };

  const sidebarToggleHandler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Aux>
      <NavigationMenu sidebarToggleClicked={sidebarToggleHandler} />
      <Sidebar open={showSidebar} closed={sidebarClosedHandler} />
      <main className={classes.Layout}>{children}</main>
      {/* <Footer/> */}
    </Aux>
  );
};

export default Layout;
