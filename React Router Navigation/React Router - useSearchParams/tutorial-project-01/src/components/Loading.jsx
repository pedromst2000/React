import React, { useEffect } from "react";
import PropTypes from "prop-types";

function Loading({ ...props }) {

    useEffect(() => {
        const interval = setInterval(() => {
            props.setTimeLoading((prev) => prev + 1);
        }
        , 1000);

        return () => clearInterval(interval);
    }, [props]);


  return (
    <>
        <div className="loading-container">
            <h3>
                Loading...
            </h3>
        </div>
    </>
  );
}

Loading.propTypes = {
  timeLoading: PropTypes.number.isRequired,
  setTimeLoading: PropTypes.func.isRequired,
};

export default Loading;
