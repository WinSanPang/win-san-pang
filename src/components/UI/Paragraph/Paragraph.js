import React from "react";

import classes from "./Paragraph.module.scss";

const Paragraph = ({ children }) => (
  <header className={classes.Paragraph}>{children}</header>
);

export default Paragraph;
