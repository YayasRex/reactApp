import { IMovie } from "../types/movies";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import PopularMovies from "../components/PopularMovies/PopularMovies";

export default function Movies() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [pages, setPages] = useState(1)

    const getMovies = async () => {
        const moviesData = await fetch(`${API_URL}/movie/popular?api_key=ef39abb1c780cab951081e90b90310fd&language=en-US&page=${pages}`)
        const moviesResponse = await moviesData.json();
        setMovies(moviesResponse.results)
    }

    useEffect(() => {
        getMovies()
    }, [pages])

    return (
        <div>
            <h1>MOVIES</h1>
            <div className="movie-container">
                {movies.map((movie) => <PopularMovies movie={movie} page={pages} />)}
            </div>
            <div className='select-pages'>
                <button className='previous-p page-button' onClick={() => setPages(pages === 1 ? pages : pages - 1)} disabled={pages === 1}>Previous Page</button>
                <button className='next-p page-button' onClick={() => setPages(pages === 500 ? pages : pages + 1)} disabled={pages === 500}>Next Page</button>
            </div>
        </div>
    )
}