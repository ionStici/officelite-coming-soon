import bg from './../assets/home/bg-pattern-header.svg';
import chart from './../assets/home/illustration-charts.svg';
import logo from './../assets/shared/logo.svg';
import styles from './../styles/header.module.scss';
[logo, bg, chart].forEach(img => (new Image().src = img));

export const Header = function () {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <img className={styles.bg} src={bg} alt="" />

                <a className={styles.logoBox} href=".">
                    <img className={styles.logo} src={logo} alt="logo" />
                </a>

                <div className={styles.chartBox}>
                    <img className={styles.chart} src={chart} alt="Chart" />
                </div>

                <div className={styles.contentBox}>
                    <h1 className={styles.h1}>
                        A simple solution to complex tasks is coming soon
                    </h1>
                    <p className={styles.p}>
                        Say goodbye to inefficient juggling of multiple apps,
                        teams, and projects. Officelite is the new collaboration
                        platform built with an intuitive interface to improve
                        productivity.
                    </p>
                    <a
                        className={styles.link}
                        href="."
                        onClick={e => e.preventDefault()}
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </header>
    );
};
