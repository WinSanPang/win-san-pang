import React from "react";
import Me from "../../../assets/images/Me-Logo.png";
import classes from "./Logo.module.scss";

const Logo = () => (
  <div className={classes.Logo}>
    <a href="/">
      <img src={Me} alt="Win San Pang" />
    </a>
  </div>
);

export default Logo;
