import { Link } from "react-router-dom"
export const MovieCarouselItem = ({movie}) =>  {
   
    const url = "https://image.tmdb.org/t/p/w500/"+movie.poster_path
    return(
    <li className="movie-carousel__item" data-carousel="item">
            <Link  className="movie-carousel__link"  to={`/about/${movie.id}`}>
                <img className="movie-carousel__cover" src={url} alt={movie.title} />
            </Link>
    </li>

)}