import React from "react";
import BusinessCard from "../../components/UI/BusinessCard/BusinessCard";

import classes from "./Contact.module.scss";
import Header from "../../components/UI/Header/Header";
import Divider from "../../components/UI/Divider/Divider";
import Paragraph from "../../components/UI/Paragraph/Paragraph";

const Contact = () => {
  return (
    <div className={classes.Contact}>
      <div className={classes.ContactHeader}>
        <Header>Contact <span role="img" aria-labelledby="mobile-phone-emoji">📱</span></Header>
      </div>
      <Paragraph>Please feel free to get in touch with me via the contact details below. Whether it's a job opportunity, a collaboration project, or even just some general feedback about my website, I'd love to hear from you!</Paragraph>
      <Divider />
      <BusinessCard />
    </div>
  );
};

export default Contact;
