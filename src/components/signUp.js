import React from 'react';
import styles from './../styles/signUp.module.scss';
import { Form } from './form';
import { Link } from 'react-router-dom';

import logo from './../assets/shared/logo.svg';
import headerBgPattern from './../assets/home/bg-pattern-header.svg';
import sideBgPattern from './../assets/sign-up/bg-pattern-side.svg';

import { store } from './../store.js';

// // // // // // // // // //

const TimeBox = function (props) {
    return (
        <div className={styles.timeBox}>
            <p className={styles.time}>{String(props.num).padStart(2, '0')}</p>
            <p className={styles.type}>{props.text}</p>
        </div>
    );
};

const Timer = function (props) {
    const [day, setDay] = React.useState(store.getState().time.day);
    const [hours, setHours] = React.useState(store.getState().time.hours);
    const [minutes, setMinutes] = React.useState(store.getState().time.minutes);
    const [seconds, setSeconds] = React.useState(store.getState().time.seconds);

    const render = function () {
        setDay(store.getState().time.day);
        setHours(store.getState().time.hours);
        setMinutes(store.getState().time.minutes);
        setSeconds(store.getState().time.seconds);
    };

    const unsubscribe = store.subscribe(render);

    return (
        <section className={styles.contentBox}>
            <h1 className={styles.h1}>Work smarter. Save time.</h1>
            <p className={styles.p}>
                Easily manage your projects. Get on the list and receive in-app
                perks available only to early subscribers. We are moving into
                final development and getting ready for official launch soon.
            </p>

            <p className={styles.comingBox}>
                <span className={styles.comingText}>Coming </span>
                <span className={styles.comingDate}>{props.comingDate}</span>
            </p>

            <div className={styles.timerBox}>
                <TimeBox num={day} text="days" />
                <TimeBox num={hours} text="hours" />
                <TimeBox num={minutes} text="min" />
                <TimeBox num={seconds} text="sec" />
            </div>
        </section>
    );
};

// // // // // // // // // //

export const SignUp = function (props) {
    return (
        <>
            <header className={styles.header}>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="logo" />
                </Link>
                <img
                    className={styles.headerBgPattern}
                    src={headerBgPattern}
                    alt=""
                />
            </header>

            <div className={styles.wrapper}>
                <main className={styles.main}>
                    <Timer comingDate={props.state.comingDate} />
                    <Form />

                    <div className={styles.blackBg}>
                        <img
                            className={styles.blackBgPattern}
                            src={sideBgPattern}
                            alt=""
                        />
                    </div>
                </main>
            </div>
        </>
    );
};

// // // // // // // // // //
