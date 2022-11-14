import './views.css'
import { useEffect, useState } from 'react';
import { IMovie } from '../types/movies';
import PopularMovies from '../components/PopularMovies/PopularMovies';

export default function Home() {

    let randomPage = Math.round(Math.random() * (500 - 1) + 1)
    const [movies, setMovies] = useState<IMovie[]>([])
    
    const getMovies = async () => {
        const moviesData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ef39abb1c780cab951081e90b90310fd&language=en-US&page=${randomPage}`)
        const moviesResponse = await moviesData.json();
        return setMovies(moviesResponse.results)
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <div>
            <h1>HOME</h1>
            <div className="movie-container">
            {movies.map((movie)=> <PopularMovies movie={movie} page={randomPage}/>)}
            </div>
        </div>
    )
}