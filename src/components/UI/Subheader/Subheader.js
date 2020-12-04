import React from "react";

import classes from "./Subheader.module.scss";

const Subheader = ({ children, className }) => (
  <h1 className={`${classes.Subheader} ${className}`}>{children}</h1>
);

Subheader.defaultProps = {
  className: "",
};

export default Subheader;
