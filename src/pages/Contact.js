import Monsters from "../assets/monsters.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <section id="left">
        <div id="contact-info">
          <h3 id="contact-heading">Let's talk</h3>
          <p id="contact-text">
            Want to meet up for coffee or have a job in mind? Fill out the form
            and I will get back to you promptly.
          </p>
        </div>
        <form>
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
      </section>
      <section className="right">
        <img src={Monsters} alt="contact_image" height="300px" />
      </section>
    </div>
  );
};

export default Contact;
