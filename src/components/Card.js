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
    </div>
  );
};

export default Card;
