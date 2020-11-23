import React from "react";

import classes from "./Handy.module.scss";
import { handy } from "../../../data/handy";
import Subheader from "../../UI/Subheader/Subheader";
import Card from "../../UI/Card/Card";

const Handy = () => {
  return (
    <div className={classes.Handy}>
      <Subheader>Handy</Subheader>
      <div className={classes.HandySections}>
        {handy.map((item) => (
          <Card
            key={item.jobTitle}
            containerClassName={classes.HandyCardContainer}
            cardClassName={classes.HandyCard}
            companyName={`Handy: ${item.jobTitle}`}
            point1={item.description.point1}
            point2={item.description.point2}
            point3={item.description.point3}
            photo={item.photo}
            photoCaption={item.photoCaption}
            alt={item.alt}
          >
            <b>{item.jobTitle}</b>
            <div className={classes.HandyCardDate}>
              <br />
              {item.dates}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Handy;
