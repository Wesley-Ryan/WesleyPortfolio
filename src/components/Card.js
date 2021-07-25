const Card = ({ activeTheme, project }) => {
  const { title, subTitle, desc, img, ghUrl, liveUrl, techStack } = project;
  const techItem = {
    background: `${activeTheme.highlight}`,
    color: `${activeTheme.font}`,
  };
  return (
    <div
      className="card"
      id="shadow-Lg"
      style={{
        background: `${activeTheme.card}`,
        border: `${activeTheme.highlight}`,
        color: `${activeTheme.secondaryFont}`,
      }}
    >
      <div className="card-title">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>

      <img src={img} alt="project_image" height="150px" id="shadow-Lg" />
      <div className="card-btn-group">
        <a href={ghUrl} target="_blank" rel="noreferrer">
          <button
            style={{
              background: `${activeTheme.background}`,
              color: `${activeTheme.font}`,
              border: `2px solid ${activeTheme.highlight}`,
              margin: `10px`,
            }}
          >
            Github
          </button>
        </a>
        <a href={liveUrl} target="_blank" rel="noreferrer">
          <button
            style={{
              background: `${activeTheme.background}`,
              color: `${activeTheme.font}`,
              border: `2px solid ${activeTheme.highlight}`,
            }}
          >
            Live Demo
          </button>
        </a>
      </div>
      <p>{desc}</p>
      <footer>
        <h4 id="card-tech-title">Tech Stack</h4>
        <ul className="tech-list">
          {techStack.map((item) => {
            return <li style={techItem}>{item}</li>;
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Card;
