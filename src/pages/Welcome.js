const Welcome = ({ activeTheme }) => {
  return (
    <div className="welcome-container" style={{ color: `${activeTheme.font}` }}>
      <section id="welcome-banner">
        <h1>👋 Hi, I'm Wesley</h1>
        <div className="welcome-text">
          <span id="welcome-title">A Fullstack JavaScript Developer</span>
        </div>
        <div id="socials">
          <a
            href="https://github.com/Wesley-Ryan"
            target="_blank"
            rel="noreferrer"
            style={{
              color: `${activeTheme.font}`,
              WebkitTextStrokeWidth: `2px`,
              WebkitTextStrokeColor: `${activeTheme.highlight}`,
            }}
          >
            <i className="fab fa-github-square" id="social-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/wesley-white-dev/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: `${activeTheme.font}`,
              WebkitTextStrokeWidth: `2px`,
              WebkitTextStrokeColor: `${activeTheme.highlight}`,
            }}
          >
            <i className="fab fa-linkedin" id="social-icon"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
