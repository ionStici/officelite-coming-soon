import styles from './../styles/signUp.module.scss';
import { Form } from './form';
import { Link } from 'react-router-dom';

import logo from './../assets/shared/logo.svg';
import headerBgPattern from './../assets/home/bg-pattern-header.svg';
import sideBgPattern from './../assets/sign-up/bg-pattern-side.svg';

// // // // // // // // // //

const TimeBox = function (props) {
    return (
        <div className={styles.timeBox}>
            <p className={styles.time}>{props.num}</p>
            <p className={styles.type}>{props.text}</p>
        </div>
    );
};

const Timer = function (props) {
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
                <span className={styles.comingDate}>4 Nov 2020</span>
            </p>

            <div className={styles.timerBox}>
                <TimeBox num="47" text="days" />
                <TimeBox num="07" text="hours" />
                <TimeBox num="56" text="min" />
                <TimeBox num="14" text="sec" />
            </div>
        </section>
    );
};

// // // // // // // // // //

export const SignUp = function () {
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
                    <Timer />
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
