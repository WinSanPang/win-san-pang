import React from "react";

import classes from "./Ofcom.module.scss";
import Subheader from "../../UI/Subheader/Subheader";
import Card from "../../UI/Card/Card";

const sections = [
  {
    jobTitle: "Consumer Contact Associate",
    dates: "Jun 2015 - Dec 2016",
    emoji: "💻",
    description: {
      point1:
        "Providing high quality, professional customer service to consumers’ telecoms and broadcast-related enquiries and complaints over the phone.",
      point2:
        "Consistently met KPIs including quality assessment target for compiled case records and call handling quality standards for both call duration and customer satisfaction.",
      point3:
        "Liaising with specialist policy and investigations teams within Ofcom, working with these departments where necessary to resolve consumer enquiries.",
    },
    photo:
      "https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/120344782_10224366368490593_669096003840558971_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=7nvhQro9sQAAX9eoODp&_nc_ht=scontent.flhr3-2.fna&oh=6a5f5cc6db8f6bf95fc7acc51ce0da53&oe=5F98370B",
    photoCaption:
      "Featuring on the Ofcom Christmas tree for my love of Lego & Pokemon 🎄",
  },
];

const Ofcom = () => {
  return (
    <div className={classes.Ofcom}>
      <Subheader>Ofcom</Subheader>
      <div className={classes.OfcomSections}>
        {sections.map((item) => (
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
