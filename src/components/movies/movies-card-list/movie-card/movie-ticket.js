import {Movie} from "./movie";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import store from "../../../../store/store";
import {setMode, setSelectedMovie} from "../../../../store/moviesSlice";
import {useEffect, useState} from "react";
import "./movie-ticket.css"


function MovieTicket() {
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(selectedMovie.dates.at(0));

    useEffect(() => {
        store.dispatch(setMode('buy'))
    }, [selectedDate])

    const handleCancel = () => {
        store.dispatch(setSelectedMovie(null));
        navigate('/');
    }

    const handleChangeDate = (event) => {
        let isFound = false
        selectedMovie.dates.map((d) => {
                if (d.date === event.target.value) {
                    isFound = true;
                    setSelectedDate(d);
                }
            }
        );
        if (!isFound) {
            setSelectedDate({date: event.target.value})
        }
    }

    return (
        <div className="background" style={{backgroundImage: 'url(' + selectedMovie.image + ')'}}>
            <div className="blur">
                <div className="row mt-4">
                    <div className="col-md-6">
                        <Movie data={selectedMovie}/>
                    </div>
                    <div className="col-md-6">
                        <div className="w-50 mb-1">
                            <label htmlFor="date" className="me-2 col-form-label text">Дата</label>
                            <input
                                type="date"
                                id="date"
                                className="form-control"
                                value={selectedDate.date}
                                onChange={handleChangeDate}
                            />
                        </div>
                        {selectedDate.sessions && <div className="w-50 mb-1">
                            <label htmlFor="time" className="me-2 col-form-label text">Время</label>
                            <select className="form-select" id="time">
                                {selectedDate.sessions.map((time) => {
                                    return (
                                        <option key={time.time} value={time.time}>{time.time}</option>
                                    )
                                })}
                            </select>
                        </div>}
                        {!selectedDate.sessions && <div className="alert alert-secondary mt-2 mb-0 w-50" role="alert">
                            Нет сеансов на выбранную дату
                        </div>}
                        <div className="w-50 mb-1">
                            <label htmlFor="tickets" className="me-2 col-form-label text">Количество билетов</label>
                            <input
                                type="number"
                                id="tickets"
                                className="form-control"
                                disabled={!selectedDate.sessions}
                            />
                        </div>
                        <div className="w-50 mb-1">
                            <label htmlFor="name" className="me-2 form-label text">Имя</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Введите имя"
                                disabled={!selectedDate.sessions}
                            />
                        </div>
                        <div className="w-50 mb-1">
                            <label htmlFor="phone" className="me-2 form-label text">Телефон</label>
                            <input
                                type="text"
                                id="phone"
                                className="form-control"
                                placeholder="Введите номер телефона"
                                disabled={!selectedDate.sessions}
                            />
                        </div>
                        <button className="btn btn-secondary me-4 mt-3 mb-3"
                                disabled={!selectedDate.sessions}
                        >Отправить
                        </button>
                        <button className="btn btn-dark mt-3 mb-3"
                                onClick={handleCancel}
                        >Отменить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {MovieTicket}