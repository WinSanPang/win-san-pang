import React from "react";

import classes from "./Header.module.scss";

const Header = ({ children }) => (
  <header className={classes.Header}>{children}</header>
);

export default Header;
