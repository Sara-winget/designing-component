// write the book component cod
import React from 'react'

function Bookcard({image,name,genre, author}) {
  return (
    <div style={{border:'2px dotted black', padding:'10px'}} >
    <div style={{height:'100px'}}>
        <img src={image} alt={name} height={'75%'}/>
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
