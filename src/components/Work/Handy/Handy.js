import React from "react";

import classes from "./Handy.module.scss";
import Subheader from "../../UI/Subheader/Subheader";
import Card from "../../UI/Card/Card";

const sections = [
  {
    jobTitle: "Customer Service Shift Leader",
    dates: "Oct 2014 - May 2015",
    emoji: "🧑🏻‍💻",
    description: {
      point1:
        "Providing exemplary customer service over the phone and via email.",
      point2:
        "Promoted to the role of Shift Leader, with responsibilities including coordinating the customer service team, handling escalations, training new team members, and interviewing applicants.",
      point3:
        "Was awarded the titles: 'Above and Beyond', 'Best Team Player' and 'Employee of the Week'.",
    },
    photo:
      "https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/120344782_10224366460252887_8138223664337301961_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=Ku5-VycZvSIAX-Y8Rek&_nc_ht=scontent.flhr3-2.fna&oh=9ff9efbc524a86782edc16bc774c2e2e&oe=5F9861B2",
    photoCaption: "Dressed up as a Vampire for the Handy Halloween Party 🧛",
  },
];

const Handy = () => {
  return (
    <div className={classes.Handy}>
      <Subheader>Handy</Subheader>
      <div className={classes.HandySections}>
        {sections.map((item) => (
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
