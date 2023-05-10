import {Movie} from "./movie";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import store from "../../../../store/store";
import {setMode, setSelectedMovie} from "../../../../store/moviesSlice";
import {useEffect, useState} from "react";


function MovieTicket() {
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState([]);

    useEffect(() => {
        store.dispatch(setMode('buy'))
    }, [selectedDate])

    const handleCancel = () => {
        store.dispatch(setSelectedMovie(null));
        navigate('/');
    }

    const handleFindTime = (data) => {
        console.log(selectedMovie.dates.find((d) => d.date === data));
        setSelectedDate(selectedMovie.dates.find((d) => d.date === data));
    }

    return (
        <div className="row mt-4">
            <div className="col-md-6">
                <Movie data={selectedMovie}/>
            </div>
            <div className="col-md-6">
                <div className="w-50 mb-1">
                    <label htmlFor="date" className="me-2 col-form-label">Дата</label>
                    <input
                        type="date"
                        id="date"
                        className="form-control "/>
                </div>
                {/*<div className="w-50 mb-1">*/}
                {/*    <label htmlFor="time" className="me-2 col-form-label">Время</label>*/}
                {/*    <select className="form-select" id="time">*/}
                {/*        {selectedDate.sessions.map((time)=>{return (*/}
                {/*            <option key={time.time} value={time.time}>{time.time}</option>*/}
                {/*        )})}*/}
                {/*    </select>*/}
                {/*</div>*/}
                <div className="w-50 mb-1">
                    <label htmlFor="tickets" className="me-2 col-form-label">Количество билетов</label>
                    <input
                        type="number"
                        id="tickets"
                        className="form-control"/>
                </div>
                <div className="w-50 mb-1">
                <label htmlFor="name" className="me-2 form-label">Имя</label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Введите имя"/>
                </div>
                <div className="w-50 mb-1">
                    <label htmlFor="phone" className="me-2 form-label">Телефон</label>
                    <input
                        type="text"
                        id="phone"
                        className="form-control"
                        placeholder="Введите номер телефона"/>
                </div>
                <button className="btn btn-primary me-4 mt-3 mb-3">Отправить</button>
            <button className="btn btn-outline-primary mt-3 mb-3"
                    onClick={handleCancel}
            >Отменить</button>
            </div>
        </div>
    )
}

export {MovieTicket}