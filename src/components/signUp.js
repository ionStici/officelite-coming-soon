import { useRef } from 'react';

import styles from './../styles/signUp.module.scss';
import { Link } from 'react-router-dom';

import logo from './../assets/shared/logo.svg';
import headerBgPattern from './../assets/home/bg-pattern-header.svg';

import sideBgPattern from './../assets/sign-up/bg-pattern-side.svg';

import iconArrowDown from './../assets/sign-up/icon-arrow-down.svg';
import iconCheck from './../assets/sign-up/icon-check.svg';
import iconCross from './../assets/sign-up/icon-cross.svg';

// // // // // // // // // //

const Form = function (props) {
    const inputName = useRef(null);
    const inputEmail = useRef(null);
    const inputTel = useRef(null);
    const inputComp = useRef(null);

    const borderRed = { borderBottom: '1px solid var(--color-red)' };
    const colorRed = { color: 'var(--color-red)' };

    const validName = name => {
        if (name) return true;
        if (!name) return false;
    };

    const validEmail = email => {
        if (email) return true;
        if (!email) return false;
    };

    const validTel = tel => {
        if (tel) return true;
        if (!tel) return false;
    };

    const validComp = comp => {
        if (comp) return true;
        if (!comp) return false;
    };

    const handleSubmit = function (e) {
        e.preventDefault();

        const name = inputName.current.value;
        const email = inputEmail.current.value;
        const tel = inputTel.current.value;
        const company = inputComp.current.value;

        if (validName(name)) {
            inputName.current.style.color = 'var(--color-dark-gray)';
            inputName.current.style.borderBottom =
                '1px solid var(--color-gray-05)';
        } else {
            inputName.current.style.color = 'var(--color-red)';
            inputName.current.style.borderBottom = '1px solid var(--color-red)';
        }

        if (validEmail(email)) {
            inputEmail.current.style.color = 'var(--color-dark-gray)';
            inputEmail.current.style.borderBottom =
                '1px solid var(--color-gray-05)';
        } else {
            inputEmail.current.style.color = 'var(--color-red)';
            inputEmail.current.style.borderBottom =
                '1px solid var(--color-red)';
        }

        if (validTel(tel)) {
            inputTel.current.style.color = 'var(--color-dark-gray)';
            inputTel.current.style.borderBottom =
                '1px solid var(--color-gray-05)';
        } else {
            inputTel.current.style.color = 'var(--color-red)';
            inputTel.current.style.borderBottom = '1px solid var(--color-red)';
        }

        if (validComp(company)) {
            inputComp.current.style.color = 'var(--color-dark-gray)';
            inputComp.current.style.borderBottom =
                '1px solid var(--color-gray-05)';
        } else {
            inputComp.current.style.color = 'var(--color-red)';
            inputComp.current.style.borderBottom = '1px solid var(--color-red)';
        }

        return;
    };

    const handleDropDown = function () {
        //
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <img
                className={`${styles.iconCross} ${styles.iconCross_name}`}
                src={iconCross}
                alt=""
            />
            <img
                className={`${styles.iconCross} ${styles.iconCross_email}`}
                src={iconCross}
                alt=""
            />
            <img
                className={`${styles.iconCross} ${styles.iconCross_tel}`}
                src={iconCross}
                alt=""
            />
            <img
                className={`${styles.iconCross} ${styles.iconCross_comp}`}
                src={iconCross}
                alt=""
            />

            <input
                className={styles.input}
                type="text"
                placeholder="Name"
                ref={inputName}
            />
            <input
                className={styles.input}
                type="email"
                placeholder="Email Address"
                ref={inputEmail}
            />

            <div
                className={`${styles.input} ${styles.select}`}
                onClick={handleDropDown}
            >
                <p>
                    <span>Basic Pack</span>
                    <span className={styles.selectFree}>Free</span>
                </p>
                <img src={iconArrowDown} alt="" />

                <ul className={styles.ul}>
                    <li>
                        <span>Basic Pack</span>
                        <span className={styles.selectFree}>Free</span>
                        <img
                            className={styles.iconCheck}
                            src={iconCheck}
                            alt=""
                        />
                    </li>

                    <li>
                        <span>Pro Pack</span>
                        <span className={styles.selectFree}>$9.99</span>
                        <img
                            className={styles.iconCheck}
                            src={undefined}
                            alt=""
                        />
                    </li>

                    <li>
                        <span>Ultimate Pack</span>
                        <span className={styles.selectFree}>$19.99</span>
                        <img
                            className={styles.iconCheck}
                            src={undefined}
                            alt=""
                        />
                    </li>
                </ul>
            </div>

            <input
                className={styles.input}
                type="tel"
                placeholder="Phone Number"
                ref={inputTel}
            />

            <input
                className={styles.input}
                type="text"
                placeholder="Company"
                ref={inputComp}
            />

            <input
                className={styles.btn}
                type="submit"
                value="Get on the list"
            />
        </form>
    );
};

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
