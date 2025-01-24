import React from "react";
import styles from "./../styles/footer.module.scss";
import bgPattern from "./../assets/home/bg-pattern-footer.svg";
import { Link } from "react-router-dom";
import { store } from "../store.js";
import { paths } from "../paths.js";

export const Footer = function () {
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

  store.subscribe(render);

  return (
    <footer className={styles.footer}>
      <img className={styles.bgPattern} src={bgPattern} alt="" />
      <div className={styles.wrapper}>
        <div className={styles.contentBox}>
          <h3 className={styles.h3}>
            Coming <span>{store.getState().comingDate}</span>
          </h3>

          <div className={styles.timeBox}>
            <div className={styles.box}>
              <p className={styles.num}>{String(day).padStart(2, "0")}</p>
              <p className={styles.time}>days</p>
            </div>

            <div className={styles.box}>
              <p className={styles.num}>{String(hours).padStart(2, "0")}</p>
              <p className={styles.time}>Hours</p>
            </div>

            <div className={styles.box}>
              <p className={styles.num}>{String(minutes).padStart(2, "0")}</p>
              <p className={styles.time}>Min</p>
            </div>

            <div className={styles.box}>
              <p className={styles.num}>{String(seconds).padStart(2, "0")}</p>
              <p className={styles.time}>Sec</p>
            </div>
          </div>
        </div>

        <Link className={styles.link} to={paths.SIGN_UP}>
          Get Started
        </Link>
      </div>
    </footer>
  );
};
