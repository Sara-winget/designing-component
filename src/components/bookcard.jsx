// write the book component cod
import React from 'react'

function Bookcard({image,name,genre, author}) {
  return (
    <div>
    <div>
        <img src={image} alt={name}/>
    </div>
    <div>
        <p>{name}</p>
        <p>{genre}</p>
        <p>{author}</p>
    </div>
    </div>
  )
}

export default Bookcard
