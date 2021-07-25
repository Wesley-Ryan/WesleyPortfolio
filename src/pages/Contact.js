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
        name="mobile-contact"
        method="POST"
        data-netlify="true"
        style={{ color: `${activeTheme.font}` }}
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="form-group">
          <label>Your Name:</label>
          <input type="text" name="person" />
        </div>
        <div className="form-group">
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label>Your Message:</label>
          <textarea type="text" name="message" />
        </div>
        <div>
          <button
            type="submit"
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
