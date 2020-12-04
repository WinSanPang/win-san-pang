import React from "react";

import classes from "./WorkModal.module.scss";
import Subheader from "../../UI/Subheader/Subheader";
import Photograph from "../../UI/Photograph/Photograph";

const WorkModal = ({
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
  return (
    <>
      <Subheader>{companyName}</Subheader>
      <div className={classes.WorkModalContainer}>
        <ul className={classes.WorkModalList}>
          <h3 className={classes.WorkModalListTitle}>Key responsibilities:</h3>
          <li className={classes.WorkModalListItem}>{point1}</li>
          <li className={classes.WorkModalListItem}>{point2}</li>
          <li className={classes.WorkModalListItem}>{point3}</li>
          {point4 && <li className={classes.WorkModalListItem}>{point4}</li>}
          {point5 && <li className={classes.WorkModalListItem}>{point5}</li>}
          {point6 && <li className={classes.WorkModalListItem}>{point6}</li>}
        </ul>
        <Photograph modal>
          <img src={photo} alt={alt}></img>
          <p className={classes.WorkModalPhotoCaption}>{photoCaption}</p>
        </Photograph>
      </div>
    </>
  );
};

export default WorkModal;
