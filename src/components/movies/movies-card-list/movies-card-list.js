import {Movie} from "./movie-card/movie";
import {useEffect} from "react";
import store from "../../../store/store";
import {setMode} from "../../../store/moviesSlice";

function MoviesCardList(props) {
    useEffect(() => {
        store.dispatch(setMode('choose'))
    })

    return (
        <div className= "m-4">
            <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {props.data.map((movie, index) => <Movie key={index} data={movie} condition={"true"}/>)}
            </div>
        </div>

    )
}

export {MoviesCardList}