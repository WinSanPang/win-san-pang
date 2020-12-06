import React from "react";
import { Link } from "react-router-dom";

import Me from "../../../assets/images/Me-Logo.png";
import classes from "./Logo.module.scss";

const Logo = () => (
  <div className={classes.Logo}>
    <Link to="/">
      <img src={Me} alt="Win San Pang" />
    </Link>
  </div>
);

export default Logo;
