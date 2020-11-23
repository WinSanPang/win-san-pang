import React from "react";

import classes from "./Portfolio.module.scss";
import { portfolio } from "../../data/portfolio";
import Header from "../../components/UI/Header/Header";
import Divider from "../../components/UI/Divider/Divider";
import Paragraph from "../../components/UI/Paragraph/Paragraph";
import Card from "../../components/UI/Card/Card";

const Portfolio = () => {
  return (
    <div className={classes.Portfolio}>
      <Header>
        Portfolio{" "}
        <span role="img" aria-labelledby="open-folder-emoji">
          📂
        </span>
      </Header>
      <Paragraph>
        Here you can find some projects I've participated in and the websites
        that have been subsequently built. Click on the cards to read more.
      </Paragraph>
      <Divider />
      <div className={classes.PortfolioSections}>
        {portfolio.map((item) => (
          <Card
            key={item.name}
            portfolio
            containerClassName={classes.PortfolioContainer}
            cardClassName={classes.PortfolioCard}
            brand={item.brand}
            modalPhoto1={item.modalPhoto1}
            modalPhotoAlt1={item.modalPhotoAlt1}
            modalPhoto2={item.modalPhoto2}
            modalPhotoAlt2={item.modalPhotoAlt2}
            description={item.description.split("\\n")}
            link={item.link}
          >
            <img
              src={item.photo}
              alt={item.alt}
              className={classes.PortfolioImages}
            />
            <p
              className={
                item.brand === "TCA"
                  ? classes.TheCerberusAffair
                  : classes.ConnectedLearning
              }
            >
              {item.name}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
