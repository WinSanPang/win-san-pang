import React from "react";

import classes from "./Ofcom.module.scss";
import Subheader from "../../UI/Subheader/Subheader";
import Card from "../../UI/Card/Card";

const sections = [
  {
    name: "Consumer Contact Associate",
    dates: "Jun 2015 - Dec 2016",
    emoji: "💻",
  }
];

const Ofcom = () => {
  return (
    <div className={classes.Ofcom}>
      <Subheader>Ofcom</Subheader>
      <div className={classes.OfcomSections}>
        {sections.map((item) => (
          <Card
            key={item.name}
            containerClassName={classes.OfcomCardContainer}
            cardClassName={classes.OfcomCard}
          >
            <b>{item.name}</b>
            <div className={classes.OfcomCardDate}>
              <br />
              {item.dates}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Ofcom;
