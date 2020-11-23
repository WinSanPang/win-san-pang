import React from "react";

import classes from "./PortfolioModal.module.scss";
import PhotoWithCaption from "../PhotoWithCaption/PhotoWithCaption";
import Divider from "../Divider/Divider";

const PortfolioModal = ({
  modalPhoto1,
  modalPhotoCaption1,
  alt1,
  modalPhoto2,
  modalPhotoCaption2,
  alt2,
  description,
  link,
  brand,
}) => {
  return (
    <div className={classes.PortfolioModal}>
      <div className={classes.PortfolioModalPhotosContainer}>
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
      <p className={classes.PortfolioModalDescription}>
        {description}{" "}
        <strong>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={
              brand === "TCA"
                ? classes.TheCerberusAffairLink
                : classes.ConnectedLearningLink
            }
          >
            {link}
          </a>
        </strong>
      </p>
    </div>
  );
};

export default PortfolioModal;
