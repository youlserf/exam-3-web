import { useEffect, useState } from "react";

const CardTomatoes = ({ movie }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <div
        className="card col-4"
        styles={{ width: "18rem" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={movie.images.posterArt.url}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          {isHover ? (
            <div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
          <p className="card-text">{movie.title}</p>
        </div>
      </div>
    </>
  );
};

export default CardTomatoes;
