import './PopularMovies.css'
import { Link } from 'react-router-dom';
import { IMovie } from '../../types/movies';
import { DEFAULT_IMAGE, IMAGE_URL } from '../../utils/constants';

interface MovieCardProps {
    movie: IMovie,
    page?: number
}

export default function PopularMovies({ movie }: MovieCardProps) {
    return (
        <div className='movie'>
            <Link to={`/movies/${movie.id}`}>
                <img src={movie.poster_path ? `${IMAGE_URL}/${movie.poster_path}` : DEFAULT_IMAGE} />
            </Link>
            <p>{movie.title} <br /> {movie.release_date}</p>
        </div>
    )
}