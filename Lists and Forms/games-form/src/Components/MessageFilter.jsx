import React from "react";
import PropTypes from "prop-types";

function MessageFilter({ messageFilter }) {
  return (
    <div className="message-filter">
      <h3>{messageFilter}</h3>
    </div>
  );
}

MessageFilter.propTypes = {
  messageFilter: PropTypes.string.isRequired,
};

export default MessageFilter;
