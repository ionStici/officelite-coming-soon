import { Link } from 'react-router-dom';
import styles from './../styles/pricing.module.scss';
import bgPattern from './../assets/home/bg-pattern-pricing.svg';

export const Pricing = function () {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={`${styles.card} ${styles.basic}`}>
                    <div className={styles.planBox}>
                        <p className={styles.plan}>Basic</p>
                        <p className={styles.price}>Free</p>
                        <p className={styles.details}>Up to 5 users for free</p>

                        <div className={styles.linkBoxTop}>
                            <Link className={styles.link} to="/sign-up">
                                Try for Free
                            </Link>
                        </div>
                    </div>

                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            Basic document collaboration
                        </li>
                        <li className={styles.li}>2 gb storage</li>
                        <li className={styles.li}>
                            Great security and support
                        </li>
                    </ul>

                    <div className={styles.linkBoxBottom}>
                        <Link className={styles.link} to="/sign-up">
                            Try for Free
                        </Link>
                    </div>
                </div>

                {/* // // // // // */}

                <div className={`${styles.card} ${styles.pro}`}>
                    <img className={styles.bgPattern} src={bgPattern} alt="" />

                    <div className={styles.planBox}>
                        <p className={styles.plan}>Pro</p>
                        <p className={styles.price}>$9.99</p>
                        <p className={styles.details}>
                            Per user, billed monthly
                        </p>

                        <div className={styles.linkBoxTop}>
                            <Link className={styles.link} to="/sign-up">
                                Try for Free
                            </Link>
                        </div>
                    </div>

                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            All essential integrations
                        </li>
                        <li className={styles.li}>50 gb storage</li>
                        <li className={styles.li}>More control and insights</li>
                    </ul>

                    <div className={styles.linkBoxBottom}>
                        <Link className={styles.link} to="/sign-up">
                            Try for Free
                        </Link>
                    </div>
                </div>

                {/* // // // // // */}

                <div className={`${styles.card} ${styles.ultimate}`}>
                    <div className={styles.planBox}>
                        <p className={styles.plan}>Ultimate</p>
                        <p className={styles.price}>$19.99</p>
                        <p className={styles.details}>
                            Per user, billed monthly
                        </p>

                        <div className={styles.linkBoxTop}>
                            <Link className={styles.link} to="/sign-up">
                                Try for Free
                            </Link>
                        </div>
                    </div>

                    <ul className={styles.ul}>
                        <li className={styles.li}>Robust work management</li>
                        <li className={styles.li}>100 gb storage</li>
                        <li className={styles.li}>VIP support</li>
                    </ul>

                    <div className={styles.linkBoxBottom}>
                        <Link className={styles.link} to="/sign-up">
                            Try for Free
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};
