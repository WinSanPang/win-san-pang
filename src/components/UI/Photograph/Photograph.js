import React, { useState } from "react";

import classes from "./Photograph.module.scss";
import Modal from "../Modal/Modal";
import Divider from "../Divider/Divider";
import PhotoWithCaption from "../PhotoWithCaption/PhotoWithCaption";

const Photograph = ({
  children,
  modal,
  modalPhoto1,
  modalPhotoCaption1,
  alt1,
  modalPhoto2,
  modalPhotoCaption2,
  alt2,
  description,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={modal ? classes.ModalPhotograph : classes.Photograph}
        onClick={() => setShowModal(true)}
      >
        {children}
      </div>
      <Modal show={showModal} modalClosed={() => setShowModal(false)}>
        <div className={classes.ModalPhotosContainer}>
          <PhotoWithCaption
            src={modalPhoto1}
            alt={alt1}
            caption={modalPhotoCaption1}
          />
          <PhotoWithCaption
            src={modalPhoto2}
            alt={alt2}
            caption={modalPhotoCaption2}
          />
        </div>
        <Divider short />
        <p className={classes.ModalDescription}>{description}</p>
      </Modal>
    </>
  );
};

export default Photograph;
