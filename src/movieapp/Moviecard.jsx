import React from "react";
import "./movies.css"
const MovieCard = ({ data }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  return (
      
              <div className="container" key={data.id}>
                <div className="imagediv">
                  <img width="300px" src={IMG_PATH + data.poster_path} alt="" />
                
                  <div className="Overview">
                    <h2>Overview</h2>
                    {data.overview}
                  </div>
                </div>
                <div className="movie">
                  <h1>{data.title}</h1>
                  <h3 className="movie2">{data.vote_average}</h3>
                </div>
            
            </div>
    
  )
};

export default MovieCard;
