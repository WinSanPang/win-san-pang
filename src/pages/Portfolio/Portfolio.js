import React from "react";

import classes from "./Portfolio.module.scss";
import { portfolios } from "../../data/portfolio";
import Header from "../../components/UI/Header/Header";
import Divider from "../../components/UI/Divider/Divider";
import Paragraph from "../../components/UI/Paragraph/Paragraph";
import Card from "../../components/UI/Card/Card";
import Button from "../../components/UI/Button/Button";

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
        {portfolios.map((portfolio) => (
          <Card
            key={portfolio.name}
            portfolio
            containerClassName={classes.PortfolioContainer}
            cardClassName={
              portfolio.brand === "TCA"
                ? classes.TheCerberusAffairPortfolioCard
                : classes.ConnectedLearningPortfolioCard
            }
            brand={portfolio.brand}
            modalPhoto1={portfolio.modalPhoto1}
            modalPhotoAlt1={portfolio.modalPhotoAlt1}
            modalPhoto2={portfolio.modalPhoto2}
            modalPhotoAlt2={portfolio.modalPhotoAlt2}
            description={portfolio.description.split("\\n")}
            link={portfolio.link}
          >
            <img
              src={portfolio.photo}
              alt={portfolio.alt}
              className={classes.PortfolioImages}
            />
            <div className={classes.PortfolioDetails}>
              <p
                className={
                  portfolio.brand === "TCA"
                    ? classes.TheCerberusAffair
                    : classes.ConnectedLearning
                }
              >
                {portfolio.name}
              </p>
              <Button brand={portfolio.brand}>{portfolio.skills.skill1}</Button>
              <Button brand={portfolio.brand}>{portfolio.skills.skill2}</Button>
              <Button brand={portfolio.brand}>{portfolio.skills.skill3}</Button>
              {portfolio.skills.skill4 && (
                <Button brand={portfolio.brand}>
                  {portfolio.skills.skill4}
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

//// Add skills used in the modal so it's clearer. Skills for TCA used React, React Hooks, SCSS, Photoshop
// CL used React, SCSS, Photoshop
//<Button>{item.skills.skill1}</Button>
