import React, { useState } from "react";

import classes from "./Card.module.scss";
import Modal from "../Modal/Modal";
import Subheader from "../../UI/Subheader/Subheader";
import Photograph from "../Photograph/Photograph";

const Card = ({
  children,
  cardClassName,
  containerClassName,
  companyName,
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
  photo,
  photoCaption,
  alt,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={containerClassName}>
      <div
        className={`${classes.Card} ${cardClassName}`}
        onClick={() => setShow(true)}
      >
        {children}
      </div>
      <Modal show={show} modalClosed={() => setShow(false)}>
        <Subheader className={classes.CardSubheader}>{companyName}</Subheader>
        <div className={classes.ModalContainer}>
          <ul className={classes.ModalList}>
            <h3>Key responsibilities:</h3>
            <li className={classes.ModalListItem}>{point1}</li>
            <li className={classes.ModalListItem}>{point2}</li>
            <li className={classes.ModalListItem}>{point3}</li>
            {point4 && <li className={classes.ModalListItem}>{point4}</li>}
            {point5 && <li className={classes.ModalListItem}>{point5}</li>}
            {point6 && <li className={classes.ModalListItem}>{point6}</li>}
          </ul>
          <Photograph modal>
            <img src={photo} alt={alt}></img>
            <p>{photoCaption}</p>
          </Photograph>
        </div>
      </Modal>
    </div>
  );
};

Card.defaultProps = {
  containerClassName: "",
  cardClassName: "",
};

export default Card;
