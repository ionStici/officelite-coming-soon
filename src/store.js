import { createStore } from 'redux';

// // // // // // // // // //

const localStorageFuture = +localStorage.getItem('time');
let future;
if (!localStorageFuture) future = new Date().setDate(new Date().getDate() + 30);
if (localStorageFuture) future = localStorageFuture;
localStorage.setItem('time', future);
// let future = new Date().getTime() + 4000;

// // // // // // // // // //

const d = new Date(future).getDate();
const m = new Date(future).toDateString().split(' ')[1];
const y = new Date(future).getFullYear();
const coming = `${d} ${m} ${y}`;

// // // // // // // // // //

const initialState = {
    future: future,
    comingDate: coming,
    time: {
        day: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    },
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'time/changeDay':
            return {
                ...state,
                time: {
                    ...state.time,
                    day: action.payload,
                },
            };

        case 'time/changeHours':
            return {
                ...state,
                time: {
                    ...state.time,
                    hours: action.payload,
                },
            };

        case 'time/changeMinutes':
            return {
                ...state,
                time: {
                    ...state.time,
                    minutes: action.payload,
                },
            };

        case 'time/changeSeconds':
            return {
                ...state,
                time: {
                    ...state.time,
                    seconds: action.payload,
                },
            };

        default:
            return state;
    }
};

export const store = createStore(timerReducer);

const CHANGE_DAY = 'time/changeDay';
const CHANGE_HOURS = 'time/changeHours';
const CHANGE_MINUTES = 'time/changeMinutes';
const CHANGE_SECONDS = 'time/changeSeconds';

const changeDays = newTime => ({ type: CHANGE_DAY, payload: newTime });
const changeHours = newTime => ({ type: CHANGE_HOURS, payload: newTime });
const changeMinutes = newTime => ({ type: CHANGE_MINUTES, payload: newTime });
const changeSeconds = newTime => ({ type: CHANGE_SECONDS, payload: newTime });

const startTimer = function () {
    let now = new Date().getTime();
    let time = store.getState().future - now;

    let day = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);

    store.dispatch(changeDays(day));
    store.dispatch(changeHours(hours));
    store.dispatch(changeMinutes(minutes));
    store.dispatch(changeSeconds(seconds));

    if (time <= 1000) {
        clearInterval(timer);
    }
};

startTimer();

const timer = setInterval(startTimer, 1000);
