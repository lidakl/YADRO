import {useNavigate} from "react-router-dom";
import store from "../../../../store/store";
import {setSelectedMovie} from "../../../../store/moviesSlice";
import {useSelector} from "react-redux";

function Movie(props) {
    const navigate = useNavigate();
    const mode = useSelector((state) => state.movies.mode);

    const handleBuyTicket = () => {
        store.dispatch(setSelectedMovie(props.data));
        navigate('movie/' + props.data.id);
    }

    function truncateLabel(label, length) {
        return (label.length > length) ?
            label.substring(0, length).concat("...") : label;
    }

    return (
        <div className="col d-flex justify-content-center">
            <div className="card m-2 h-100 mh-100" style={{width: '20rem'}}>
                <img className="card-img-top" src={process.env.PUBLIC_URL + props.data.image}
                     height="350px" />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    {mode === 'choose' && <p className="card-text">{truncateLabel(props.data.description, 100)}</p>}
                    {mode === 'buy' && <p className="card-text"> {props.data.description}</p>}
                </div>
                {props.condition && <div className="text-end mb-1 me-1">
                <button className="btn btn-primary"
                        onClick={handleBuyTicket}
                >Купить билет
                </button>
            </div>}
            </div>
        </div>
    )
}

export {Movie}