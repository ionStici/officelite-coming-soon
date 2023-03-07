import styles from './../styles/footer.module.scss';
import bgPattern from './../assets/home/bg-pattern-footer.svg';
import { Link } from 'react-router-dom';

let time = 2_592_000;

export const Footer = function () {
    return (
        <footer className={styles.footer}>
            <img className={styles.bgPattern} src={bgPattern} alt="" />
            <div className={styles.wrapper}>
                <div className={styles.contentBox}>
                    <h3 className={styles.h3}>
                        Coming <span>4 Nov 2020</span>
                    </h3>

                    <div className={styles.timeBox}>
                        <div className={styles.box}>
                            <p className={styles.num}>47</p>
                            <p className={styles.time}>days</p>
                        </div>

                        <div className={styles.box}>
                            <p className={styles.num}>07</p>
                            <p className={styles.time}>Hours</p>
                        </div>

                        <div className={styles.box}>
                            <p className={styles.num}>56</p>
                            <p className={styles.time}>Min</p>
                        </div>

                        <div className={styles.box}>
                            <p className={styles.num}>14</p>
                            <p className={styles.time}>Sec</p>
                        </div>
                    </div>
                </div>

                <Link className={styles.link} to="/sign-up">
                    Get Started
                </Link>
            </div>
        </footer>
    );
};

// If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page
// If you're choosing to make this timer dynamic, have it countdown from the date you set above
