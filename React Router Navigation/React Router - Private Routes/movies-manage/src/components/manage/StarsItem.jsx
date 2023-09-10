import React from "react";
import PropTypes from "prop-types";

function StarsItem({ ...props }) {
  return (
    <tr key={props.star.id}>
      <td>{props.star.id}</td>
      <td>{props.star.name}</td>
      <td>
        <button
          className="btn-delete-star"
          onClick={() => props.deleteStar(props.star.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

StarsItem.propTypes = {
  star: PropTypes.object.isRequired,
  deleteStar: PropTypes.func.isRequired,
};

export default StarsItem;
