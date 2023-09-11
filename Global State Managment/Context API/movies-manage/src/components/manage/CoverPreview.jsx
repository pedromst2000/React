import React from "react";
import PropTypes from "prop-types";
import dummyCover from "../../assets/images/dummy-cover.png";

function CoverPreview({ ...props }) {
  return (
    <div className="image-preview">
      <h5>Cover Preview</h5>
      <img
        src={props.cover.length > 0 ? props.cover : dummyCover}
        alt="cover"
        width="200"
        height="200"
      />
    </div>
  );
}

CoverPreview.propTypes = {
  cover: PropTypes.string.isRequired,
};

export default CoverPreview;
