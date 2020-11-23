import React from "react";

import classes from "./Ofcom.module.scss";
import { ofcom } from "../../../data/ofcom";
import Subheader from "../../UI/Subheader/Subheader";
import Card from "../../UI/Card/Card";

const Ofcom = () => {
  return (
    <div className={classes.Ofcom}>
      <Subheader>Ofcom</Subheader>
      <div className={classes.OfcomSections}>
        {ofcom.map((item) => (
          <Card
            key={item.jobTitle}
            containerClassName={classes.OfcomCardContainer}
            cardClassName={classes.OfcomCard}
            companyName={`Ofcom: ${item.jobTitle}`}
            point1={item.description.point1}
            point2={item.description.point2}
            point3={item.description.point3}
            photo={item.photo}
            photoCaption={item.photoCaption}
            alt={item.alt}
          >
            <b>{item.jobTitle}</b>
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
