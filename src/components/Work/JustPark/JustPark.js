import React from "react";

import classes from "./JustPark.module.scss";
import Subheader from "../../UI/Subheader/Subheader";
import Card from "../../UI/Card/Card";

const sections = [
  {
    jobTitle: "Associate Frontend Engineer",
    dates: "Feb 2020 - Present",
    emoji: "💻",
    description: {
      point1:
        "Developing, improving and maintaining the codebase for the company’s five core web applications. Contribution included creating UI components, reducers and full page flows.",
      point2:
        "Collaborating with Backend, QA and Product teams to ensure we delivered high quality features and product improvements in a timely manner.",
      point3:
        "Made use of a number of software and tools (e.g. PhpStorm, Jenkins, JIRA, GitHub, Percy, Zeplin, Paw) for developing and self-testing purposes to ensure code changes were consistent with the intended product design.",
      point4: "",
      point5: "",
      point6: "",
    },
    photo:
      "https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/86793569_10222154382472325_2103051300789813248_n.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=YF7DfjG97LgAX9w_cnW&_nc_ht=scontent.flhr3-1.fna&oh=da98120345109b262159b23c00b56681&oe=5F7AA3E8",
    photoCaption: "",
  },
  {
    jobTitle: "Associate QA Engineer",
    dates: "Jan 2019 - Feb 2020",
    emoji: "🧑🏻‍💻",
    description: {
      point1:
        "Testing and debugging product changes across four development teams: Frontend, Backend, Mobile (Apps), and Infrastructure, with a primary focus on Backend code.",
      point2:
        "Applied the Behaviour Driven Development framework to systematically test and ensure the code changes met the relevant business or stakeholders’ needs.",
      point3:
        "Wrote automated tests (Cypress, Testcafe) and Laravel Seeders to improve the efficiency of the QA and development process.",
      point4:
        "Used a range of different software and tools (e.g. Paw, Jenkins, JIRA, GitHub, Percy, SequelPro) to ensure code changes were tested thoroughly and effectively.",
      point5:
        "Regularly presented product changes to the wider company in the fortnightly Product Demo.",
      point6:
        "Managing the company Service Desk, handling enquiries and issues reported by internal teams as well as investigating the root cause and working with the Engineering team to ensure a solution is developed.",
    },
    photo:
      "https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/120224974_10224354294388748_7187507406412787078_n.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=ODSn9h07lKwAX-xOVFp&_nc_ht=scontent.flhr3-1.fna&oh=7dc8bf2bceb8dfd9fa7e0c5660e24184&oe=5F96A0AF",
    photoCaption: "Some classic QA & Dev banter 🤣",
  },
  {
    jobTitle: "Senior Customer Happiness Associate",
    dates: "Jan 2018 - Jan 2019",
    emoji: "🎓",
    description: {
      point1:
        "Handling escalated customer complaints as well as assisting regular customer enquiries during busy periods.",
      point2:
        "Training and managing new starters to ensure a smooth onboarding process.",
      point3:
        "Monitoring the customer database for suspicious user activity and handling fraudulent cases, such as chargebacks.",
      point4:
        "Engaging in regular meetings with other departments, including product design and marketing, to formulate wider business goals and to feedback information to the customer support team.",
      point5: "Compiling reports and presentations for weekly team meetings.",
    },
    photo:
      "https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/120370589_10224366157885328_3401656235657117126_o.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=6sZRk6xLdAsAX_Rv8Ev&_nc_ht=scontent.flhr3-2.fna&oh=556f09f4489e4c6630da6ecca207aa6d&oe=5F9790C2",
    photoCaption:
      "Getting in the Chrismas spirit with fellow Customer Happiness colleagues 🤶🎅☃️",
  },
  {
    jobTitle: "Customer Happiness Associate",
    dates: "Apr 2017 - Jan 2018",
    emoji: "🏊🏻",
    description: {
      point1:
        "Providing top quality, professional customer service and resolving customer enquiries and complaints via phone, email (Zendesk) and social media platforms.",
      point2:
        "Consistently exceeded KPIs including customer satisfaction, call duration and cases handled.",
      point3:
        "Working together with various departments, including finance and account management, to resolve customer issues.",
    },
    photo:
      "https://scontent.flux1-1.fna.fbcdn.net/v/t1.0-9/120234611_10224354960725406_6149354717313191100_n.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=zHDfcKS6PkIAX8RXH73&_nc_ht=scontent.flux1-1.fna&oh=926ab2e0706f3a48a6587f21e3d95595&oe=5F943B99",
    photoCaption: "Lovely feedback I received from happy JustPark customers 🥰",
  },
];

const JustPark = () => {
  return (
    <div className={classes.JustPark}>
      <Subheader>JustPark</Subheader>
      <div className={classes.JustParkSections}>
        {sections.map((item) => (
          <Card
            key={item.jobTitle}
            containerClassName={classes.JustParkCardContainer}
            cardClassName={classes.JustParkCard}
            companyName={`JustPark: ${item.jobTitle}`}
            point1={item.description.point1}
            point2={item.description.point2}
            point3={item.description.point3}
            point4={item.description.point4}
            point5={item.description.point5}
            point6={item.description.point6}
            photo={item.photo}
            photoCaption={item.photoCaption}
          >
            <b>{item.jobTitle}</b>
            <div className={classes.JustParkCardDate}>{item.dates}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JustPark;
