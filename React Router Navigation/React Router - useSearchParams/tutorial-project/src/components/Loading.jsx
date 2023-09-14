import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function Loading({timeLoading, setTimeLoading}) {
  
    
  useEffect(() => {

    const timer = setTimeout(() => {
      setTimeLoading((timeLoading) => timeLoading + 1)
    }, 1000)
    
    return () => clearInterval(timer)


  }, [timeLoading])
  
    return (
    <div className='loading'>
        <h3>
            Loading...
        </h3>
    </div>
  )
}

Loading.propTypes = {
setTimeLoading: PropTypes.func.isRequired,
timeLoading: PropTypes.number.isRequired,
}

export default Loading
