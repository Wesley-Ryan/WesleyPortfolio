import Hello from "../assets/hello.svg";

const Contact = ({ activeTheme }) => {
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
      <form style={{ color: `${activeTheme.font}` }}>
        <div className="form-group">
          <label>Your Name:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Your Email:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Your Message:</label>
          <textarea type="text" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
