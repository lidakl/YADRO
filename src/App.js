import {Header} from "./components/header/header";
import {MoviesCardList} from "./components/movies/movies-card-list/movies-card-list";
import {useSelector} from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MovieTicket} from "./components/movies/movies-card-list/movie-card/movie-ticket";

function App() {
    const movies = useSelector((state) => state.movies.movies)

    return (
        <div className="App">
                <Header/>
                {/*<MoviesCardList data = {movies}/>*/}
                {/*/!*<MovieTicket*!/*/}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MoviesCardList data = {movies}/>}></Route>
                    <Route path='movie/:id' element={<MovieTicket/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
