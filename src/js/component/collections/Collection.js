import { MovieCarouselItem } from "./MovieCarouselItem";
import { useMovies } from "../../hooks/useMovies";
export const Collection = (props) => {
    
    
    const collectionMovies = useMovies()
    return(
    <div className="collection" data-carousel="collection" data-id="${props.id}">
        <h3 className="collection__title">Filmes Populares</h3>
        <div className="movie-carousel">
        {/* <button class="arrow-slider arrow-slider--left" data-carousel="btn-previous"><AiOutlineLeft /></button>
            <button class="arrow-slider arrow-slider--right" data-carousel="btn-next"><AiOutlineRight /></button> */}
            <ul className="movie-carousel__list" data-carousel="list">
            { collectionMovies.map((movie,index) =>(
                        <MovieCarouselItem movie={movie} key={index}/>
                    ))}
            </ul>

    </div>
</div>
)}