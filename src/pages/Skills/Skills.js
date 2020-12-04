import React from "react";

import classes from "./Skills.module.scss";
import {
  programmingSkills,
  generalSkills,
  creativeSkills,
} from "../../data/skills";
import Header from "../../components/UI/Header/Header";
import Divider from "../../components/UI/Divider/Divider";
import Paragraph from "../../components/UI/Paragraph/Paragraph";
import Clouds from "../../components/UI/Clouds/Clouds";
import Subheader from "../../components/UI/Subheader/Subheader";

const Skills = () => {
  return (
    <div className={classes.Skills}>
      <Header>
        Skills{" "}
        <span role="img" aria-labelledby="computer-emoji">
          💻
        </span>
      </Header>
      <Paragraph>
        Here you can see my current skillset, with each star within the 'Skill
        Cloud' representing my skill level :)
      </Paragraph>
      <Divider />
      <Subheader className={classes.SkillsProgramming}>
        Programming Languages
      </Subheader>
      <Clouds skillset={programmingSkills} type="programming" />
      <Subheader className={classes.SkillsGeneral}>General</Subheader>
      <Clouds skillset={generalSkills} type="general" />
      <Subheader className={classes.SkillsCreative}>Creative</Subheader>
      <Clouds skillset={creativeSkills} type="creative" />
    </div>
  );
};

export default Skills;
