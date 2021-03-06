const About = ({ activeTheme }) => {
  return (
    <div
      className="about-container"
      style={
        activeTheme.name === "dark"
          ? { backgroundColor: `${activeTheme.background}` }
          : { backgroundColor: `white` }
      }
    >
      <div id="contact-info">
        <h2
          id="title"
          style={{
            color: `${activeTheme.secondaryFont}`,
            WebkitTextStrokeWidth: `1.5px`,
            WebkitTextStrokeColor: `${activeTheme.highlight}`,
          }}
        >
          About
        </h2>

        <p
          id="about-text"
          style={
            activeTheme.name === "dark"
              ? { color: `${activeTheme.font}` }
              : { color: `black` }
          }
        >
          I'm a Fullstack developer who is passionate about privacy and making
          the Internet cool again. I specialize in all things JavaScript but
          most of my time is spent in React or Node/Express. However I am
          proficient in technologies across the entire Stack including SQL and
          NoSQL databases. I am currently looking for new career opportunities
          where I have the ability to provide meaningful impact to the project
          and grow in my career.
        </p>
      </div>
    </div>
  );
};

export default About;
