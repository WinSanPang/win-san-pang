import React from 'react';
import classes from './Modal.module.scss';

import Backdrop from '../Backdrop/Backdrop';

const Modal = ({children, show, modalClosed}) => (
  <>
    <Backdrop show={show} clicked={modalClosed}/>
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(0)',
        zIndex: show ? '500' : '-100',
        opacity: show ? '1' : '0'}}
    >
      {children}
    </div>
  </>
);

export default Modal;
