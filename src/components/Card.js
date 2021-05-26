const Card = ({ activeTheme, title, desc, img }) => {
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
        <p>small text about</p>
      </div>

      <img src={img} alt="project_image" height="150px" id="shadow-Lg" />
      <div className="card-btn-group">
        <button
          style={{
            background: `${activeTheme.background}`,
            color: `${activeTheme.font}`,
            border: `2px solid ${activeTheme.highlight}`,
          }}
        >
          Github
        </button>
        <button
          style={{
            background: `${activeTheme.background}`,
            color: `${activeTheme.font}`,
            border: `2px solid ${activeTheme.highlight}`,
          }}
        >
          Live Demo
        </button>
      </div>
      <p>{desc}</p>
      <footer>
        <h4 id="card-tech-title">Tech Stack</h4>
        <ul className="tech-list">
          <li style={techItem}>React</li>
          <li style={techItem}>Zustand</li>
          <li style={techItem}>NodeJs</li>
          <li style={techItem}>Emotion</li>
        </ul>
      </footer>
    </div>
  );
};

export default Card;
