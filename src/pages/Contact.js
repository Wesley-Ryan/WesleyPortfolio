const Contact = ({ activeTheme, setToggle }) => {
  return (
    <div
      className="contact-container"
      style={{ background: `${activeTheme.background}` }}
    >
      <div id="contact-info" style={{ color: `${activeTheme.font}` }}>
        <h3 id="contact-heading">Let's talk</h3>
        <p id="contact-text">
          Want to meet up for coffee or have a job in mind? Fill out the form
          and I will get back to you promptly.
        </p>
      </div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        style={{ color: `${activeTheme.font}` }}
      >
        <div className="form-group">
          <label>Your Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label>Your Email:</label>
          <input type="text" name="email" />
        </div>
        <div className="form-group">
          <label>Your Message:</label>
          <textarea type="text" name="message" />
        </div>
        <div>
          <button
            style={{
              background: `${activeTheme.button}`,
              color: `${activeTheme.font}`,
            }}
          >
            Submit
          </button>
          <button
            style={{
              background: `#cf142b`,
              color: `white`,
            }}
            onClick={() => setToggle(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
