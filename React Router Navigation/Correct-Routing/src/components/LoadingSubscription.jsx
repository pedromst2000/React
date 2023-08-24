import React from 'react'
import propTypes from 'prop-types'

export default function LoadingSubscription({loadingTime, setLoadingTime}) {
  
  
React.useEffect(() => {

    const timer = setInterval(() => {
        setLoadingTime((prevTime) => prevTime + 1);
    }, 1000);
    

    // Clear timeout if the component is unmounted
    return () => clearInterval(timer);


}, [loadingTime]);
  
  
  
    return (
    <div>
        <h3>
            Loading...
        </h3>
        <span>
            Your subscription is being processed.
        </span>
    </div>
  )
}

LoadingSubscription.propTypes = {
    loadingTime: propTypes.number.isRequired,
    setLoadingTime: propTypes.func.isRequired
}
