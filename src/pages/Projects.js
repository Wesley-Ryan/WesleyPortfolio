import Card from "../components/Card";
import { projectList } from "../assets/projectList.js";

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
        {projectList.map((project, index) => {
          return (
            <Card activeTheme={activeTheme} project={project} key={index} />
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
