import React from "react";

import classes from "./Button.module.scss";

const Button = ({ children, brand }) => (
  <button
    className={
      brand === "TCA"
        ? classes.TheCerberusAffairButton
        : classes.ConnectedLearningButton
    }
  >
    {children}
  </button>
);

export default Button;
