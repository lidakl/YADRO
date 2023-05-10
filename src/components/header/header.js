import {Search} from "../search";
import "./header.css"
import store from "../../store/store";
import {findMovieByStr} from "../../store/moviesSlice";
import {useSelector} from "react-redux";

function Header() {
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);

    const search = (name) => {
        store.dispatch(findMovieByStr(name))
    }

    return (
        <nav className="nav-bar">
            <div className="row">
                <div className="col-6">
                    <h3 className="header">
                        Фильмы
                    </h3>
                </div>
                {!selectedMovie && <div className="col-6">
                    <Search search={search}/>
                </div>}
            </div>

        </nav>
    );
}

export {Header}
