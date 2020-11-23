import React, { useState } from "react";

import classes from "./Photograph.module.scss";
import Modal from "../Modal/Modal";
import PortfolioModal from "../PortfolioModal/PortfolioModal";

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
        <PortfolioModal
          modalPhoto1={modalPhoto1}
          alt1={alt1}
          modalPhotoCaption1={modalPhotoCaption1}
          modalPhoto2={modalPhoto2}
          alt2={alt2}
          modalPhotoCaption2={modalPhotoCaption2}
          description={description}
        />
      </Modal>
    </>
  );
};

export default Photograph;
