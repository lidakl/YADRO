import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [
        {
            id: 1,
            title: "Профиль",
            description: "Британская журналистка, работающая под прикрытием, внедряется в систему пропаганды «Исламского " +
                "государства», которое привлекает в свои ряды все больше молодых европейских женщин.",
            image: "/images/profile.png",
            type: ['detective'],
            dates: [
                {
                    date: "20-05-2023",
                    sessions: [
                        {
                            time: "12.00",
                            seats: "20"
                        },
                        {
                            time: "18.00",
                            seats: "10"
                        }
                    ]
                },
                {
                    date: "21-05-2023",
                    sessions: [
                        {
                            time: "14.00",
                            seats: "20"
                        },
                        {
                            time: "16.00",
                            seats: "10"
                        }
                    ]
                },
                {
                    date: "22-05-2023",
                    sessions: [
                        {
                            time: "10.00",
                            seats: "20"
                        },
                        {
                            time: "12.00",
                            seats: "10"
                        }
                    ]
                },
            ]
        }, {
            id: 2,
            title: "Я - начало",
            description: "Молекулярный биолог и его ассистентка делают потрясающее открытие, способное коренным " +
                "образом изменить современное общество.",
            image: "/images/iOrigin.jpg",
            type: ['drama', 'fantastic'],
            dates: [
                {
                    date: "20-05-2023",
                    sessions: [
                        {
                            time: "12.00",
                            seats: "20"
                        },
                        {
                            time: "18.00",
                            seats: "10"
                        }
                    ]
                },
                {
                    date: "21-05-2023",
                    sessions: [
                        {
                            time: "14.00",
                            seats: "20"
                        },
                        {
                            time: "16.00",
                            seats: "10"
                        }
                    ]
                },
                {
                    date: "22-05-2023",
                    sessions: [
                        {
                            time: "10.00",
                            seats: "20"
                        },
                        {
                            time: "12.00",
                            seats: "10"
                        }
                    ]
                },
            ]
        }, {
            id: 3,
            title: "Одарённая",
            description: "Фрэнк Адлер живет в прибрежном городке во Флориде и воспитывает в одиночку свою необычайно " +
                "одаренную племянницу Мэри. Но планы парня о спокойной школьной жизни для девочки рушатся, когда о " +
                "математических способностях ребенка узнает грозная мать Фрэнка Эвелин. У бабушки свои представления " +
                "о будущем внучки, и ради этого она готова даже разлучить Мэри с Фрэнком.",
            image: "/images/gifted.jpg",
            type: ['drama'],
            dates: [
                {
                    date: "20-05-2023",
                    sessions: [
                        {
                            time: "12.00",
                            seats: "20"
                        },
                        {
                            time: "18.00",
                            seats: "10"
                        }
                    ]
                },
                {
                    date: "21-05-2023",
                    sessions: [
                        {
                            time: "14.00",
                            seats: "20"
                        },
                        {
                            time: "16.00",
                            seats: "10"
                        }
                    ]
                },
                {
                    date: "22-05-2023",
                    sessions: [
                        {
                            time: "10.00",
                            seats: "20"
                        },
                        {
                            time: "12.00",
                            seats: "10"
                        }
                    ]
                },
            ]
        }, {
            id: 4,
            title: "7 психопатов",
            description: "Непутевый писатель потерял вдохновение и никак не может справиться с новым сценарием. Волей " +
                "случая он оказывается втянутым в похищение собаки, затеянное его эксцентричными дружками. Выясняется, " +
                "что украденное животное – любимый пёс главного местного гангстера, которому ничего не стоит в два " +
                "счета вычислить и уничтожить оболтусов.",
            image: "/images/sevenPsychopaths.jpg",
            type: ['comedy'],
            dates: [
                {
                    date: "20-05-2023",
                    sessions: [
                        {
                            time: "12.00",
                            seats: "20"
                        },
                        {
                            time: "18.00",
                            seats: "10"
                        }
                    ]
                },
                {
                    date: "21-05-2023",
                    sessions: [
                        {
                            time: "14.00",
                            seats: "20"
                        },
                        {
                            time: "16.00",
                            seats: "10"
                        }
                    ]
                },
                {
                    date: "22-05-2023",
                    sessions: [
                        {
                            time: "10.00",
                            seats: "20"
                        },
                        {
                            time: "12.00",
                            seats: "10"
                        }
                    ]
                },
            ]
        },
        {
            id: 5,
            title: "Ты водишь!",
            description: "Каждый год в течение месяца пятеро друзей участвуют в беспощадно навороченной версии игры " +
                "в кошки-мышки. Они играют в неё с первого класса, чтобы, рискуя собственной шеей, работой и " +
                "отношениями, одолеть противника с победоносным криком: «Ты водишь!» В этом году кошки-мышки приходятся " +
                "на свадьбу единственного непобежденного игрока, что должно сделать из него легкую мишень. Но он знает, " +
                "что они придут, и он готов.",
            image: "/images/tag.jpg",
            type: ['comedy'],
            dates: [
                {
                    date: "20-05-2023",
                    sessions: [
                        {
                            time: "12.00",
                            seats: "20"
                        },
                        {
                            time: "18.00",
                            seats: "10"
                        }
                    ]
                },
                {
                    date: "21-05-2023",
                    sessions: [
                        {
                            time: "14.00",
                            seats: "20"
                        },
                        {
                            time: "16.00",
                            seats: "10"
                        }
                    ]
                },
                {
                    date: "22-05-2023",
                    sessions: [
                        {
                            time: "10.00",
                            seats: "20"
                        },
                        {
                            time: "12.00",
                            seats: "10"
                        }
                    ]
                },
            ]
        },
        {
            id: 6,
            title: "Основатель",
            description: "История жизни Рэя Крока, человека создавшего самую известную в мире сеть ресторанов " +
                "быстрого обслуживания — McDonald`s.",
            image: "/images/founder.jpg",
            type: ['drama'],
            dates: [
                {
                    date: "20-05-2023",
                    sessions: [
                        {
                            time: "12.00",
                            seats: "20"
                        },
                        {
                            time: "18.00",
                            seats: "10"
                        }
                    ]
                },
                {
                    date: "21-05-2023",
                    sessions: [
                        {
                            time: "14.00",
                            seats: "20"
                        },
                        {
                            time: "16.00",
                            seats: "10"
                        }
                    ]
                },
                {
                    date: "22-05-2023",
                    sessions: [
                        {
                            time: "10.00",
                            seats: "20"
                        },
                        {
                            time: "12.00",
                            seats: "10"
                        }
                    ]
                },
            ]
        }
    ],
    selectedMovie: '',
    mode: ''
};

const movieSlice = createSlice({
    name: 'moviesSlice',
    initialState: initialState,
    reducers: {
        findMovieByStr(state, action) {
            state.movies = initialState.movies
                .filter((movie) => movie.title.toLowerCase().includes(action.payload));
        },
        getMovies(state) {
            state.movies = initialState.movies
        },
        findMovieByGenre(state, action) {
            state.movies = state.movies
                .filter((movie) => action.payload.some(value => movie.type.includes(value)))
        },
        setSelectedMovie(state, action) {
            state.selectedMovie = action.payload;
        },
        setMode(state, action) {
            state.mode = action.payload;
        }
    },
});

const {actions, reducer} = movieSlice;

export const {
    findMovieByStr,
    getMovies,
    findMovieByGenre,
    setSelectedMovie,
    setMode
} = actions;

export default reducer;
