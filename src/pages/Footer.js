const Footer = ({ activeTheme, setToggle }) => {
  return (
    <div
      className="footer-container"
      style={{
        background: `${activeTheme.background}`,
        color: `${activeTheme.font}`,
      }}
    >
      <h3
        id="footer-title"
        style={{
          WebkitTextStrokeWidth: `1.5px`,
          WebkitTextStrokeColor: `${activeTheme.highlight}`,
        }}
      >
        Get in touch
      </h3>
      <p id="footer-text">
        Have a project in mind, spot my resume online or just want to say hi?
      </p>
      <button
        id="mobile-btn"
        style={{
          backgroundColor: `${activeTheme.button}`,
          color: `${activeTheme.font}`,
          border: `1px solid ${activeTheme.highlight} `,
        }}
        onClick={() => setToggle((prevState) => !prevState)}
      >
        Contact
      </button>
      <div className="footer-bottom">
        <p id="footer-year">Created with ❤️ 2021</p>
      </div>
    </div>
  );
};

export default Footer;
