import styles from './../styles/footer.module.scss';
import bgPattern from './../assets/home/bg-pattern-footer.svg';

export const Footer = function () {
    return (
        <footer className={styles.footer}>
            <img className={styles.bgPattern} src={bgPattern} alt="" />
            <div className={styles.wrapper}>
                <div></div>
            </div>
        </footer>
    );
};

// // // // // // // // // //

// index.js

// <!-- If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page -->
// Coming 4 Nov 2020

// <!-- If you're choosing to make this timer dynamic, have it countdown from the date you set above -->
// 47 Days
// 07 Hours
// 56 Min
// 14 Sec
// Get Started
