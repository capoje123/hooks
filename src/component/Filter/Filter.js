import React from 'react'
import { Rating } from 'react-simple-star-rating'

function Filter({setInput,setRating}) {
    const handleRating = (rate) => {
        setRating(rate)}
  return (
    <div><input onChange={(e)=>setInput(e.target.value)}  type="text" placeholder='search by title'></input>
    <Rating onClick={handleRating}/>
    </div>
  )
}

export default Filter