import { useEffect, useState } from "react";
import { get } from "./service/serverTomatoes";
import "./App.css";
import CardTomatoes from "./components/CardTomatoes";
import FindTomatoes from "./components/FindTomatoes";

function App() {
  const [movies, setMovies] = useState([]);
  const [datos, setDatos] = useState({
    nombre: "",
  });
  const [uniqueMovie, setUniqueMovie] = useState([]);
  const [changeView, setChangeView] = useState(false);

  const getMovies = async () => {
    const pelis = await get();
    setMovies(pelis?.entries);
  };

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    const peliculas = movies.filter((movie) => movie.title === datos.nombre);
    console.log(peliculas);
    setMovies(peliculas);
    console.log(uniqueMovie);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div
        className="bg-dark p-1 col-12"
        style={{
          borderRadius: "25px",
        }}
      >
        <div
          className="mt-4 p-4"
          style={{
            width: "100%",
            backgroundColor: "red",
          }}
        >
          <form className="row" onSubmit={enviarDatos}>
            <div className="col-8">
              <input
                type="text"
                placeholder="Nombre"
                className="form-control"
                placeHolder="Name of movie"
                onChange={handleInputChange}
                name="nombre"
              />
            </div>
            <button type="submit" className="btn btn-dark col-4">
              Buscar
            </button>
          </form>
        </div>
        <div className="row justify-content-center p-1">
          {movies?.map((movie, index) => (
            <CardTomatoes key={index} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
