import React from "react";

import classes from "./Hobbies.module.scss";
import { hobbies } from "../../data/hobbies";
import Header from "../../components/UI/Header/Header";
import Divider from "../../components/UI/Divider/Divider";
import Paragraph from "../../components/UI/Paragraph/Paragraph";
import Photograph from "../../components/UI/Photograph/Photograph";

const Hobbies = () => {
  return (
    <div className={classes.Hobbies}>
      <div className={classes.HobbiesHeader}>
        <Header>
          Hobbies{" "}
          <span role="img" aria-labelledby="person-swimming-emoji">
            🏊🏻
          </span>
        </Header>
      </div>
      <Paragraph>
        Here you can find out about some my hobbies and interests. If you want
        to know more, just click onto the photographs.
      </Paragraph>
      <Divider />
      <div className={classes.HobbiesPhotographs}>
        {hobbies.map((item) => (
          <Photograph
            key={item.name}
            modalPhoto1={item.modalPhoto1}
            modalPhotoCaption1={item.modalPhotoCaption1}
            modalPhotoAlt1={item.modalPhotoAlt1}
            modalPhoto2={item.modalPhoto2}
            modalPhotoCaption2={item.modalPhotoCaption2}
            modalPhotoAlt2={item.modalPhotoAlt2}
            description={item.description.split("\\n")}
          >
            <img src={item.img} alt={item.alt} />
            <p>{item.caption}</p>
            <h3>{item.name}</h3>
          </Photograph>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
