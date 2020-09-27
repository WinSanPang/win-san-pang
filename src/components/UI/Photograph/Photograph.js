import React, { useState } from "react";

import classes from "./Photograph.module.scss";
import Modal from "../Modal/Modal";

const Photograph = ({ children, modal }) => {
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);
  return (
    /*<>*/
    <div
      className={modal ? classes.ModalPhotograph : classes.Photograph}
      onClick={() => setShowModal(true)}
    >
      {children}
    </div>
    /*<Modal show={showModal} modalClosed={() => setShowModal(false)}></Modal>
    </>*/
  );
};

export default Photograph;
