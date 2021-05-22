const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <img src="" alt="project_image" />
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
