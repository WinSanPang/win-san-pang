import React from "react";

import classes from "./Education.module.scss";
import Header from "../../components/UI/Header/Header";
import Divider from "../../components/UI/Divider/Divider";
import Book from "../../components/UI/Book/Book";

const Education = () => {
  return (
    <div className={classes.Education}>
      <div className={classes.EducationHeader}>
        <Header>Education <span role="img" aria-labelledby="graduation-cap-emoji">🎓</span></Header>
      </div>
      <Divider />
      <Book />
    </div>
  );
};

export default Education;
