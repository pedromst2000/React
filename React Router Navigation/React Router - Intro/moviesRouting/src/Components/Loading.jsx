import React from "react";
import PropTypes from "prop-types";

export default function Loading({timeLoading, setTimeLoading}) {
  
  React.useEffect(() => {

    const interval = setInterval(() => {
      setTimeLoading((oldTime) => oldTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };

  }, [timeLoading]);

  
  return (
    <div className="loading">
      <h3>Loading...
      </h3>
    </div>
  );
}


Loading.propTypes = {
  timeLoading: PropTypes.number.isRequired,
  setTimeLoading: PropTypes.func.isRequired,
};