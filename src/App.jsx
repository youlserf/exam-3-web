import { useEffect, useState } from 'react'
import { get } from './service/serverTomatoes'
import './App.css'
import CardTomatoes from './components/CardTomatoes'

function App() {
  const [movies, setMovies] = useState([])

 const getMovies = async () => {
  const pelis = await get();
      setMovies(pelis?.entries);
      console.log(movies)
 }

    useEffect(() => {
      getMovies()
    }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {movies?.map(movie => <CardTomatoes key={Date.now()} movie={movie}/>)}
        </div>
      </div>
    </>
  )
}

export default App
