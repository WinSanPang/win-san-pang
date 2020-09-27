import React from "react";

import classes from "./Work.module.scss";
import Header from "../../components/UI/Header/Header";
import Paragraph from "../../components/UI/Paragraph/Paragraph";
import JustPark from "../../components/Work/JustPark/JustPark";
import Ofcom from "../../components/Work/Ofcom/Ofcom";
import Divider from "../../components/UI/Divider/Divider";
import Handy from "../../components/Work/Handy/Handy";

const Work = () => {
  return (
    <div className={classes.Work}>
      <div className={classes.WorkHeader}>
        <Header>
          Work{" "}
          <span role="img" aria-labelledby="technologist-emoji">
            🧑🏻‍💻
          </span>
        </Header>
      </div>
      <Paragraph>
        A Junior Frontend Engineer who, having previously spent 5+ years working
        in customer service, self-taught and progressed into web development.
        Skilled in several programming languages whilst also possessing strong
        interpersonal, problem-solving and outstanding customer service skills.
        Demonstrated commitment, self-motivation, and initiative in previous
        work experience, academic work, and extra-curricular roles. Feel free to
        click on the cards below to find out more about my roles and
        responsibilities.
      </Paragraph>
      <Divider />
      <JustPark />
      <Divider />
      <Ofcom />
      <Divider />
      <Handy />
    </div>
  );
};

export default Work;
