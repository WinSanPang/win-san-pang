import React from "react";

import classes from "./Home.module.scss";
import Header from "../../components/UI/Header/Header";
import Me from "../../assets/images/Me.png";
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vehicula nec sem eget fringilla. Aliquam non lacus sed lacus vulputate
        mattis et aliquet nunc. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Cras condimentum lectus a
        sapien suscipit dictum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent non luctus risus. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </Paragraph>
      <div className={classes.HomeSections}>
        {sections.map((item) => (
          <Card key={item.name} link={item.link}>
            {item.name} {item.emoji}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
