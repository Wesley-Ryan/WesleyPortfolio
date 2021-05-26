import Card from "../components/Card";
import Linux from "../assets/linux.jpg";
import BlueWitness from "../assets/blueWitness.jpg";
import Weather from "../assets/weather.jpg";

const Projects = ({ activeTheme }) => {
  return (
    <div className="project-container">
      <h2
        id="title"
        style={{
          color: `${activeTheme.secondaryFont}`,
          WebkitTextStrokeWidth: `1.5px`,
          WebkitTextStrokeColor: `${activeTheme.highlight}`,
          background: `${activeTheme.secondaryBG}`,
        }}
      >
        Projects
      </h2>
      <section className="projects-container">
        <Card
          title={"Desktop Linux in the Browser"}
          desc={`Linux in the Browser... This project was created to showcase my abilites as a Frontend Developer while creating a fun take on the "portfolio" website. It uses React, Zustand, Custom Hooks, Framer Motion, and conditional Routes this mobile site if you are viewing https://wesleyryan.dev from a device with a smaller screen.`}
          img={Linux}
          activeTheme={activeTheme}
        />
        <Card
          title={"Blue Witness"}
          desc={
            "The Blue Witness project is a movement to give the public access to reports of police use of force incidents. By crowdsourcing incident reports from twitter and reddit we create a platform where people can contribute to a greater cause. This project was a group effort where most of my contributions were on the backend. From cron jobs to OKTA authentication this project kept me learning and exploring. "
          }
          img={BlueWitness}
          activeTheme={activeTheme}
        />
        <Card
          title={"React Weather"}
          desc={
            "Get the weather with this spaced themed weather app. The app was built with React and the OpenWeather API."
          }
          img={Weather}
          activeTheme={activeTheme}
        />
      </section>
    </div>
  );
};

export default Projects;
