import React from "react";
import { Link } from "react-router-dom";

import classes from "./Card.module.scss";

const Card = ({ children, cardClassName, containerClassName, link }) => (
  <Link to={link} className={`${classes.CardLink} ${containerClassName}`}>
    <div className={`${classes.Card} ${cardClassName}`}>{children}</div>
  </Link>
);

Card.defaultProps = {
  containerClassName: "",
  cardClassName: "",
};

export default Card;
