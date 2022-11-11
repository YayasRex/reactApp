import { useEffect, useState } from 'react';
import { IMovie } from '../../types/movies';
import './PopularMovies.css'


export default function PopularMovies() {
    const imgNotF: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/245px-No-Image-Placeholder.svg.png"
    let [pages, setPages] = useState(1)
    const [movies, setMovies] = useState<IMovie[]>([]);

    const getMovies = async () => {
        const moviesData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ef39abb1c780cab951081e90b90310fd&language=en-US&page=${pages}`)
        const moviesResponse = await moviesData.json();
        setMovies(moviesResponse.results)
    }

    useEffect(() => {
        getMovies();
        console.log(pages)
    }, [pages])
    return (
        <div className='Popular-Movies'>
            <div className='movie-container'>
                {movies.map((movie) => (
                    <div className='movie'>
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : imgNotF} />
                        <p>{movie.title} <br /> {movie.release_date}</p>
                    </div>
                ))}
            </div>
            {/* <p className='page'>Page {pages}</p> */}
            <div className='select-pages'>
                <button className='previous-p page-button' onClick={() => setPages(pages === 1 ? pages : pages -= 1)} disabled={pages === 1}>Previous Page</button>
                <button className='next-p page-button' onClick={() => setPages(pages === 500 ? pages : pages += 1)} disabled={pages === 500}>Next Page</button>
            </div>
        </div>
    )
}