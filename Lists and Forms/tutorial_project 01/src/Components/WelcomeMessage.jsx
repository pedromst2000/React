import PropTypes from "prop-types";

export default function WelcomeMessage({ message }) {
  return <h2>{message}</h2>;
}

WelcomeMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
