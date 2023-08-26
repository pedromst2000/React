import React from 'react'
import Protypes from 'prop-types'

export default function Loading({timeloading, setTimeloading}) {
  
  React.useEffect(() => {

    const interval = setInterval(() => {
      setTimeloading((oldValue) => oldValue + 1);
    }, 1000);

    // Clean up function
    return () => {
      clearInterval(interval);
    }


  }, [timeloading]);
  
  
  return (
    <div className='loading'>
        <h1>Carregando...</h1>
    </div>
  )
}


Loading.propTypes = {
  timeloading: Protypes.number.isRequired,
  setTimeloading: Protypes.func.isRequired,
};
