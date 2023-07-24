import PropTypes from "prop-types";

export default function Profile({id, name, profession, age, backgroundColor, color, borderRadius }) {
  
  const stylesheet = {
    backgroundColor: backgroundColor,
    color: color,
    borderRadius: borderRadius,
  };

  
  return (
    <div style={stylesheet} key={id}>
      <h2>{name}</h2>
      <h3>{profession}</h3>
      <h4>{age}</h4>
    </div>
  );
}

Profile.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired,
};
