import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMovieDetails } from '../types/movieDetails';
import { API_URL, BANNER_URL, DEFAULT_IMAGE, IMAGE_URL } from '../utils/constants';
import './views.css'

export default function () {
    let { movieId } = useParams();
    const [movie, setMovieD] = useState<IMovieDetails | null>(null)
    const getMovieDetails = async () => {
        const movieData = await fetch(`${API_URL}/movie/${movieId}?api_key=ef39abb1c780cab951081e90b90310fd&language=en-US`)
        const movieDataRes = await movieData.json();
        setMovieD(movieDataRes)
    }

    const getMovieDate = (movie: IMovieDetails) => {
        return new Intl.DateTimeFormat('en-US').format(new Date(movie.release_date));
    }

    useEffect(() => {
        getMovieDetails()
    }, [])
    return (
        <div className="container-movie">
            <div className="info-movie">
                <img src={movie?.poster_path ? `${IMAGE_URL}/${movie.poster_path}` : DEFAULT_IMAGE} />
                <div>
                    <h1>{`${movie?.title} (${movie?.release_date ? movie.release_date.slice(0, 4) : "NO YEAR DATA"})`}</h1>
                    <h3>{movie && getMovieDate(movie)} - {movie?.genres.map((genre, index) => index === ((movie?.genres.length || 0) - 1) ? genre.name : `${genre.name}, `)}</h3>
                    <p>{movie?.tagline}</p>
                    <h3>General view</h3>
                    <p className='text-movie'>{movie?.overview}</p>
                </div>
            </div>
            <img className="banner" src={movie?.poster_path ? `${BANNER_URL}/${movie.backdrop_path}` : DEFAULT_IMAGE} />
        </div>
    )
}