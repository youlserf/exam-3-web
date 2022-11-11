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
        className="card col-sm-8 col-md-4 col-lg-2 p-1 m-1"
        styles={{
          width: "18rem",
          backgroundColor: "dark",
        }}
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
              <p style={{ fontSize: 12 }}>{movie.description}</p>
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
