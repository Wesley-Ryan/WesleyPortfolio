import Card from "../components/Card";
import Linux from "../assets/linux.jpg";
const Projects = ({ activeTheme }) => {
  return (
    <div className="project-container">
      <h2
        id="title"
        style={{
          WebkitTextStrokeWidth: `1px`,
          WebkitTextStrokeColor: `${activeTheme.highlight}`,
        }}
      >
        Projects
      </h2>
      <section className="projects-container">
        <Card
          title={"Desktop Linux in the Browser"}
          desc={
            "I created this project to showcase my frontend abilites and create a unique take on the Developer portfolio. The project contains a slew of apps including a terminal, notes app and music player."
          }
          img={Linux}
          activeTheme={activeTheme}
        />
        <Card
          title={"Desktop Linux in the Browser"}
          desc={
            "I created this project to showcase my frontend abilites and create a unique take on the Developer portfolio. The project contains a slew of apps including a terminal, notes app and music player."
          }
          img={Linux}
          activeTheme={activeTheme}
        />
        <Card
          title={"Desktop Linux in the Browser"}
          desc={
            "I created this project to showcase my frontend abilites and create a unique take on the Developer portfolio. The project contains a slew of apps including a terminal, notes app and music player."
          }
          img={Linux}
          activeTheme={activeTheme}
        />
        <Card
          title={"Desktop Linux in the Browser"}
          desc={
            "I created this project to showcase my frontend abilites and create a unique take on the Developer portfolio. The project contains a slew of apps including a terminal, notes app and music player."
          }
          img={Linux}
          activeTheme={activeTheme}
        />
      </section>
    </div>
  );
};

export default Projects;
