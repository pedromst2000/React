import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {
  
  const { id } = useParams();
  
    return (
    <div>
        <h3>
            Movie Detail Page {id}
        </h3>
    </div>
  )
}
