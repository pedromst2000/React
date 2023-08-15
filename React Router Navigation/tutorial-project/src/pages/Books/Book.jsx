import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

export default function Book() {
  
  const {id} = useParams();
  const obj = useOutletContext();

  return (
    <div>
      <h1>
        Book {id} {obj.book}
      </h1>
    </div>
  )
}
