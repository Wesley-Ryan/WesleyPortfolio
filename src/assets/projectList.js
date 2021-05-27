import Linux from "./linux.jpg";
import BlueWitness from "./blueWitness.jpg";
import Weather from "./weather.jpg";
import Alluiva from "./Alluvia.jpg";

export const projectList = [
  {
    title: "Desktop Linux Frontend",
    subTitle: "A portfolio website",
    desc: "It’s here Linux in the Browser! This project was created to showcase my abilities on the frontend, while creating a fun take on the developer “portfolio”. The project contains a global state management system using Zustand, custom hooks, and even conditional renders a mobile site for devices under 500px in width (bringing it back to the earlier 2000’s). ",
    img: Linux,
    techStack: ["React", "Zustand", "Framer Motion", "Emotion.sh"],
    ghUrl: "https://github.com/Wesley-Ryan",
    liveUrl: "https://wesleyryan.dev",
  },
  {
    title: "Blue Witness",
    subTitle: "Node Backend Project",
    desc: "The Blue Witness project is a movement to give the public access to reports of police use of force. During my time on this project, I worked closely with Data Science Engineers to implement a new data source for Blue Witness.During this process I gained a lot of experience in data flow, managing cron jobs,authentication and the value of working with a large team. ",
    img: BlueWitness,
    techStack: [
      "Node",
      "Express",
      "PostgreSQL",
      "Docker",
      "Cron Jobs",
      "OKTA Authentication",
    ],
    ghUrl:
      "https://github.com/Lambda-School-Labs/human-rights-first-police-be-a",
    liveUrl: "https://a.humanrightsfirst.dev/",
  },
  {
    title: "Alluiva",
    subTitle: "Subscription Tracker Fullstack",
    desc: "**UNDER_DEVELOPMENT** Spending too much on subscriptions? Or worse do you even know how much you spend? Alluiva is here to help you track those subscriptions and see just how much you are paying. Built with React and Node this project has an authentication built from scratch with features such as email account recovery",
    img: Alluiva,
    techStack: [
      "React",
      "Bootstap",
      "React-Router",
      "Redux",
      "Node",
      " Bcrypt",
      "Express",
      "Knex",
      "PostgreSQL",
      "SendGrid",
    ],
    ghUrl: "https://github.com/Wesley-Ryan/Alluvia-BE",
    liveUrl: "https://github.com/Wesley-Ryan/Alluvia-FE",
  },
  {
    title: "React Weather",
    subTitle: "Space Themed Frontend",
    desc: "Another weather app. This project uses the Open Weather api to deliver the weather. Built with React and Bootstrap this project was my start to using React Hooks, making API calls and incorporating the Bootstrap library.",
    img: Weather,
    techStack: ["React", "Bootstap", "Axios"],
    ghUrl: "https://github.com/Wesley-Ryan/React-WeatherAPI",
    liveUrl: "https://github.com/Wesley-Ryan/React-WeatherAPI",
  },
];
