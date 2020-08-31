import React from "react";

import classes from "./Handy.module.scss";
import Subheader from "../../UI/Subheader/Subheader";
import Card from "../../UI/Card/Card";

const sections = [
  {
    name: "Customer Service Shift Leader",
    dates: "Oct 2014 - May 2015",
    emoji: "🧑🏻‍💻",
  }
];

const Handy = () => {
  return (
    <div className={classes.Handy}>
      <Subheader>Handy</Subheader>
      <div className={classes.HandySections}>
        {sections.map((item) => (
          <Card
            key={item.name}
            containerClassName={classes.HandyCardContainer}
            cardClassName={classes.HandyCard}
          >
            <b>{item.name}</b>
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
