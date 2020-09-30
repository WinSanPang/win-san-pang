import React from "react";

import classes from "./Divider.module.scss";

const Divider = ({ short }) => (
  <div className={short ? classes.DividerShort : classes.Divider}></div>
);

export default Divider;
