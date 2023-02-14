import React from 'react'
import Moviecard from '../moviecard/Moviecard'


function Movieliste({data ,deleteMoviee}) {
  return (
    <div>{ data.map((el)=>(<Moviecard  key={el.id} el={el} deleteMoviee={deleteMoviee}/>)) }
    </div>
  )
}

export default Movieliste