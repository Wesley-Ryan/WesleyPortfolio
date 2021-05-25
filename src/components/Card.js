const Card = (props) => {
  const { activeTheme } = props;
  return (
    <div
      className="card"
      id="shadow-Lg"
      style={{
        background: `${activeTheme.card}`,
        color: `${activeTheme.secondaryFont}`,
      }}
    >
      <h2>{props.title}</h2>
      <img src={props.img} alt="project_image" height="150px" id="shadow-Lg" />
      <p>{props.desc}</p>
      <footer>
        <i
          className="fab fa-react"
          style={{
            color: `#00ced1`,
          }}
        ></i>
        <i
          className="fab fa-js"
          style={{
            color: `#ffff00`,
            WebkitTextStrokeWidth: `.7px`,
            WebkitTextStrokeColor: `black`,
          }}
        ></i>
      </footer>
    </div>
  );
};

export default Card;
