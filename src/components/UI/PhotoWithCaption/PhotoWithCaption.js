import React from "react";

import classes from "./PhotoWithCaption.module.scss";

const PhotoWithCaption = ({ src, alt, caption }) => (
  <div className={classes.PhotoWithCaption}>
    <img className={classes.PhotoWithCaptionImg} src={src} alt={alt} />
    <p>{caption}</p>
  </div>
);

export default PhotoWithCaption;
