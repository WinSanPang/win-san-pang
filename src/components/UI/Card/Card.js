import React, { useState } from "react";

import classes from "./Card.module.scss";
import Modal from "../Modal/Modal";
import PortfolioModal from "../PortfolioModal/PortfolioModal";
import WorkModal from "../../Work/WorkModal/WorkModal";

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
  portfolio,
  brand,
  modalPhoto1,
  alt1,
  modalPhoto2,
  alt2,
  description,
  link,
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
        {portfolio ? (
          <PortfolioModal
            brand={brand}
            modalPhoto1={modalPhoto1}
            alt1={alt1}
            modalPhoto2={modalPhoto2}
            alt2={alt2}
            description={description}
            link={link}
          />
        ) : (
          <WorkModal
            companyName={companyName}
            point1={point1}
            point2={point2}
            point3={point3}
            point4={point4}
            point5={point5}
            point6={point6}
            photo={photo}
            photoCaption={photoCaption}
            alt={alt}
          />
        )}
      </Modal>
    </div>
  );
};

Card.defaultProps = {
  containerClassName: "",
  cardClassName: "",
  portfolio: false,
};

export default Card;
