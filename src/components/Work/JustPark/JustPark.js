import React from "react";

import classes from "./JustPark.module.scss";
import Subheader from "../../UI/Subheader/Subheader";
import Card from "../../UI/Card/Card";

const sections = [
  {
    name: "Associate Frontend Engineer",
    dates: "Feb 2020 - Present",
    emoji: "💻",
  },
  {
    name: "Associate QA Engineer",
    dates: "Jan 2019 - Feb 2020",
    emoji: "🧑🏻‍💻",
  },
  {
    name: "Senior Customer Happiness Associate",
    dates: "Jan 2018 - Jan 2019",
    emoji: "🎓",
  },
  {
    name: "Customer Happiness Associate",
    dates: "Apr 2017 - Jan 2018",
    emoji: "🏊🏻",
  },
];

const JustPark = () => {
  return (
    <div className={classes.JustPark}>
      <Subheader>JustPark</Subheader>
      <div className={classes.JustParkSections}>
        {sections.map((item) => (
          <Card
            key={item.name}
            containerClassName={classes.JustParkCardContainer}
            cardClassName={classes.JustParkCard}
          >
            <b>{item.name}</b>
            <div className={classes.JustParkCardDate}>
              <br />
              {item.dates}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JustPark;
