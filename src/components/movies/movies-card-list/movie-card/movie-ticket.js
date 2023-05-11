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
    const [isNotValidate, setIsNotValidate] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [seat, setSeat] = useState(0);
    const [time, setTime] = useState(selectedMovie.dates.at(0).sessions.at(0).time);

    useEffect(() => {
        store.dispatch(setMode('buy'))
    }, [selectedDate])

    const handleCancel = () => {
        store.dispatch(setSelectedMovie(null));
        navigate('/');
    }

    const handleSubmit = () => {
        if (handleValidate()) {
            console.log(
                "Дата: " + selectedDate.date + '\n' +
                "Время: " + time + '\n' +
                "Кол-во мест: " + seat + '\n' +
                "Имя: " + name + '\n' +
                "Номер телефона: " + phone
            )
        }
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

    const getSeats = () => {
        let count = 0;
        selectedDate.sessions.map((t) => {
            if (t.time === time) {
                count = t.seats
            }
        })
        return count;
    }

    const handleValidate = () => {
        let isValid = true;
        if (seat > getSeats() || seat <= 0) {
            setIsNotValidate((prevState) => [...prevState, 'seat']);
            isValid = false;
        }

        if (name.length === 0) {
            setIsNotValidate((prevState) => [...prevState, 'name']);
            isValid = false;
        }

        let exp = new RegExp("^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$")
        if (!exp.test(phone) && phone.length !== 11) {
            setIsNotValidate((prevState) => ([...prevState, 'phone']))
            isValid = false;
        }

        return isValid;
    }

    return (
        <div className="background" style={{backgroundImage: 'url(' + selectedMovie.image + ')'}}>
            <div className="blur">
                <div className="row">
                    <div className="col-md-6 mb-4">
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
                            <select className="form-select"
                                    id="time"
                                    onChange={(event) => setTime(event.target.value)}>
                                {selectedDate.sessions.map((t) => {
                                    return (
                                        <option key={t.time}
                                                value={t.time}
                                        >{t.time}</option>
                                    )
                                })}
                            </select>
                        </div>}
                        {!selectedDate.sessions &&
                            <div className="alert alert-secondary mt-2 mb-0 w-50" role="alert">
                                Нет сеансов на выбранную дату
                            </div>}
                        <div className="w-50 mb-1">
                            <label htmlFor="tickets" className="me-2 col-form-label text">Количество билетов</label>
                            <input
                                type="number"
                                id="tickets"
                                className="form-control"
                                value={seat}
                                onChange={(event) => (setSeat(event.target.value))}
                                disabled={!selectedDate.sessions}
                            />
                        </div>
                        {isNotValidate.includes('seat') &&
                            <span className="help-block" style={{color: 'red'}}>
                                Билетов осталось: {getSeats()}
                            </span>}
                        <div className="w-50 mb-1">
                            <label htmlFor="name" className="me-2 form-label text">Имя</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Введите имя"
                                onChange={(event) => setName(event.target.value)}
                                disabled={!selectedDate.sessions}
                            />
                        </div>
                        {isNotValidate.includes('name') &&
                            <span className="help-block" style={{color: 'red'}}>Введите имя!</span>}
                        <div className="w-50 mb-1">
                            <label htmlFor="phone" className="me-2 form-label text">Телефон</label>
                            <input
                                type="text"
                                id="phone"
                                className="form-control"
                                placeholder="Введите номер телефона"
                                onChange={(event) => setPhone(event.target.value)}
                                disabled={!selectedDate.sessions}
                            />
                        </div>
                        {isNotValidate.includes('phone') &&
                            <span className="help-block" style={{color: 'red'}}>Неверный номер телефона!</span>}
                        <div>
                            <button className="btn btn-secondary me-4 mt-3 mb-3"
                                    onClick={handleSubmit}
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
        </div>
    )
}

export {MovieTicket}