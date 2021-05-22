const Welcome = () => {
  return (
    <div className="welcome-container">
      <section id="welcome-banner">
        <h1>👋 Hi, I'm Wesley Ryan</h1>
        <div className="welcome-text">
          <span id="welcome-title">A Fullstack web developer...</span>
          <p>
            who is passionate about privacy and making the Internet cool again.
            I specialize in all things JavaScript but most of my time is spent
            in React or Node/Express. I’m proficient in technologies across the
            entire Stack including SQL and NoSQL databases. I am currently
            looking for new career opportunities where I have the ability to
            provide meaningful impact to the project and grow in my career.
          </p>
        </div>
        <div id="socials">
          <a
            href="https://github.com/Wesley-Ryan"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square" id="social-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/wesley-white-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin" id="social-icon"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
