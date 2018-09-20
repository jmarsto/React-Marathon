import React from 'react'
const Playlist = props => {


  return(
    <div onClick={props.handleClick} className={props.className}>{props.name}</div>
  )

}

export default Playlist;
