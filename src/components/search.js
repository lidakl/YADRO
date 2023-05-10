import {Filter} from "./filter";
import {findMovieByGenre, findMovieByStr, getMovies} from "../store/moviesSlice";
import store from "../store/store";
import {setSearchStr} from "../store/searchFilterSlice";
import {useSelector} from "react-redux";

function Search(props) {
    // const [search, setSearch] = useState('');
    const genres = useSelector((state) => state.searchFilter.genres)
    const search = useSelector((state) => state.searchFilter.search)


    const handleChangeFilter = (event) => {
        store.dispatch(setSearchStr(event.target.value))
        if (event.target.value === "") {
            store.dispatch(getMovies());
        } else {
            store.dispatch(findMovieByStr(event.target.value));
            if (genres.length !== 0) {
                store.dispatch(findMovieByGenre(genres));
            }
        }
    }

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            store.dispatch(findMovieByStr(search));
            if (genres.length !== 0) {
                store.dispatch(findMovieByGenre(genres));
            }
        }
    }

    return (
        <div className="input-group">
            <input type="search"
                   className="form-control rounded shadow-none"
                   placeholder="Search"
                   aria-label="Search"
                   aria-describedby="search-addon"
                   onKeyUp={handleKey}
                   value={search}
                   onChange={handleChangeFilter}
            />
            <Filter/>
        </div>
    )
}

export {Search}