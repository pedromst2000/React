import PropTypes from "prop-types";

export default function Profile({id, name, profession, age }) {
  return (
    <div key={id}>
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
};
