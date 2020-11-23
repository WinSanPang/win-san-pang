import React from "react";
import { Link } from "react-router-dom";

import classes from "./Home.module.scss";
import Me from "../../assets/images/Me.png";
import CV from "../../assets/WinSanPangCV.pdf";
import Header from "../../components/UI/Header/Header";
import Divider from "../../components/UI/Divider/Divider";
import Paragraph from "../../components/UI/Paragraph/Paragraph";
import Card from "../../components/UI/Card/Card";

const sections = [
  { name: "SKILLS", emoji: "💻", link: "/skills" },
  { name: "WORK", emoji: "🧑🏻‍💻", link: "/work" },
  { name: "EDUCATION", emoji: "🎓", link: "/education" },
  { name: "HOBBIES", emoji: "🏊🏻", link: "/hobbies" },
  { name: "PORTFOLIO", emoji: "📂", link: "/portfolio" },
  { name: "CONTACT", emoji: "📱", link: "/contact" },
];

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.HomeHeader}>
        <Header>Win San Pang</Header>
        <img src={Me} alt="Win San Pang" className={classes.Me} />
      </div>
      <Paragraph>
        Hello and welcome to my personal website
        <span role="img" aria-labelledby="open-folder-emoji">
          👋
        </span>{" "}
        Please feel free to navigate your way around and find out more about my
        career as an Associate Frontend Engineer, educational experience,
        skills, portfolio and personal interests. If you'd prefer to just take a
        look at my CV, click{" "}
        <strong>
          <a href={CV} target="_blank" rel="noopener noreferrer">
            here
          </a>
        </strong>{" "}
        to view it in PDF format.
      </Paragraph>
      <Divider />
      <div className={classes.HomeSections}>
        {sections.map((item) => (
          <Link to={item.link} className={`${classes.CardLink}`}>
            <Card key={item.name}>
              {item.name} {item.emoji}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
