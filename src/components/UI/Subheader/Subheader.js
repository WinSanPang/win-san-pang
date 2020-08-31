import React from "react";

import classes from "./Subheader.module.scss";

const Subheader = ({ children, className }) => (
  <header className={`${classes.Subheader} ${className}`}>{children}</header>
);

Subheader.defaultProps = {
  className: ""
};

export default Subheader;
