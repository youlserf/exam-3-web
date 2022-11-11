import React from 'react'

const CardTomatoes = ({movie}) => {
    console.log(movie.images.posterArt.url)
    return (
    <>
    <div className="card col-4" styles={{width: "18rem"}}>
          <img src={movie.images.posterArt.url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">{movie.title}</p>
          </div>
        </div>
    </>
  )
}

export default CardTomatoes