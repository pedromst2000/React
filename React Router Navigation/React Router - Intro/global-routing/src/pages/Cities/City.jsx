import React from 'react'
import { useParams } from 'react-router-dom'

export default function City() {
  
  const {id} = useParams()
  
    return (
    <div>
        <h3>
            City Page {id}
        </h3>
    </div>
  )
}
