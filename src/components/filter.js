import {findMovieByStr, findMovieByGenre, getMovies} from "../store/moviesSlice";
import store from "../store/store";
import {deleteGenres, setGenres} from "../store/searchFilterSlice";
import {useSelector} from "react-redux";

function Filter() {
    const genres = useSelector((state) => state.searchFilter.genres)
    const search = useSelector((state) => state.searchFilter.search)

    const handleFilterGenre = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            console.log(value)
            store.dispatch(setGenres(value));
        } else {
            store.dispatch(deleteGenres(value));
        }
    }

    const handleFilter = () => {
        if (genres.length === 0) {
            store.dispatch(getMovies());
        } else {
            store.dispatch(findMovieByStr(search));
            store.dispatch(findMovieByGenre(genres));
        }
    }

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="ms-2">
                    <div className="form-check">
                        <input className="form-check-input"
                               type="checkbox"
                               value="comedy"
                               id="flexCheckDefault"
                               onChange={handleFilterGenre}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Комедия
                        </label>
                    </div>
                </li>
                <li className="ms-2">
                    <div className="form-check">
                        <input className="form-check-input"
                               type="checkbox"
                               value="detective"
                               id="flexCheckDefault"
                               onChange={handleFilterGenre}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Детектив
                        </label>
                    </div>
                </li>
                <li className="ms-2">
                    <div className="form-check">
                        <input className="form-check-input"
                               type="checkbox"
                               value="drama"
                               id="flexCheckDefault"
                               onChange={handleFilterGenre}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Драма
                        </label>
                    </div>
                </li>
                <li className="ms-2">
                    <div className="form-check">
                        <input className="form-check-input"
                               type="checkbox"
                               value="fantastic"
                               id="flexCheckDefault"
                               onChange={handleFilterGenre}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Фантастика
                        </label>
                    </div>
                </li>
                <li className="ps-1 pe-1">
                    <button className="btn btn-secondary btn-sm w-100"
                            onClick={handleFilter}
                    >Применить</button>
                </li>
            </ul>
        </div>
    )
}

export {Filter}