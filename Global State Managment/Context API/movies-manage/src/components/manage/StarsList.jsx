import React from "react";
import PropTypes from "prop-types";
import StarsItem from "./StarsItem";

function StarsList({ ...props }) {
  

  
  return (
    <div className="actors-list">
      <h5>Stars Preview</h5>
      <table border="2">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {props.stars.map((star) => (
            <StarsItem  key={star.id} star={star}
              deleteStar={props.deleteStar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

StarsList.propTypes = {
  stars: PropTypes.array.isRequired,
  deleteStar: PropTypes.func.isRequired,
};

export default StarsList;
