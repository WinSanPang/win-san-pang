import React from "react";

import classes from "./JustPark.module.scss";
import { justpark } from "../../../data/justpark";
import Subheader from "../../UI/Subheader/Subheader";
import Card from "../../UI/Card/Card";

const JustPark = () => {
  return (
    <div className={classes.JustPark}>
      <Subheader>JustPark</Subheader>
      <div className={classes.JustParkSections}>
        {justpark.map((item) => (
          <Card
            key={item.jobTitle}
            containerClassName={classes.JustParkCardContainer}
            cardClassName={classes.JustParkCard}
            companyName={`JustPark: ${item.jobTitle}`}
            point1={item.description.point1}
            point2={item.description.point2}
            point3={item.description.point3}
            point4={item.description.point4}
            point5={item.description.point5}
            point6={item.description.point6}
            photo={item.photo}
            photoCaption={item.photoCaption}
            alt={item.alt}
          >
            <b>{item.jobTitle}</b>
            <div className={classes.JustParkCardDate}>{item.dates}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JustPark;
