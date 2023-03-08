import { useRef } from 'react';
import styles from './../styles/form.module.scss';

import iconArrowDown from './../assets/sign-up/icon-arrow-down.svg';
import iconCheck from './../assets/sign-up/icon-check.svg';
import iconCross from './../assets/sign-up/icon-cross.svg';

export const Form = function (props) {
    const inputName = useRef(null);
    const inputEmail = useRef(null);
    const inputTel = useRef(null);
    const inputComp = useRef(null);

    const dropDownBox = useRef(null);
    const arrowIcon = useRef(null);

    const iconCheck1 = useRef(null);
    const iconCheck2 = useRef(null);
    const iconCheck3 = useRef(null);

    const iconCrossName = useRef(null);
    const iconCrossEmail = useRef(null);
    const iconCrossTel = useRef(null);
    const iconCrossComp = useRef(null);

    const plan = useRef(null);
    const price = useRef(null);

    const form = useRef(null);

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
            iconCrossName.current.style.display = 'none';
        } else {
            inputName.current.style.color = 'var(--color-red)';
            inputName.current.style.borderBottom = '1px solid var(--color-red)';
            iconCrossName.current.style.display = 'revert';
        }

        if (validEmail(email)) {
            inputEmail.current.style.color = 'var(--color-dark-gray)';
            inputEmail.current.style.borderBottom =
                '1px solid var(--color-gray-05)';
            iconCrossEmail.current.style.display = 'none';
        } else {
            inputEmail.current.style.color = 'var(--color-red)';
            inputEmail.current.style.borderBottom =
                '1px solid var(--color-red)';
            iconCrossEmail.current.style.display = 'revert';
        }

        if (validTel(tel)) {
            inputTel.current.style.color = 'var(--color-dark-gray)';
            inputTel.current.style.borderBottom =
                '1px solid var(--color-gray-05)';
            iconCrossTel.current.style.display = 'none';
        } else {
            inputTel.current.style.color = 'var(--color-red)';
            inputTel.current.style.borderBottom = '1px solid var(--color-red)';
            iconCrossTel.current.style.display = 'revert';
        }

        if (validComp(company)) {
            inputComp.current.style.color = 'var(--color-dark-gray)';
            inputComp.current.style.borderBottom =
                '1px solid var(--color-gray-05)';
            iconCrossComp.current.style.display = 'none';
        } else {
            inputComp.current.style.color = 'var(--color-red)';
            inputComp.current.style.borderBottom = '1px solid var(--color-red)';
            iconCrossComp.current.style.display = 'revert';
        }

        if (
            !validName(name) ||
            !validEmail(email) ||
            !validTel(tel) ||
            !validComp(company)
        )
            return undefined;
    };

    const handleDropDown = function () {
        const dropdown = dropDownBox.current.dataset.dropdown;

        if (dropdown === 'close') {
            dropDownBox.current.style.visibility = 'visible';
            arrowIcon.current.style.transform = 'rotate(180deg)';
            setTimeout(() => (dropDownBox.current.style.opacity = '1'), 50);

            dropDownBox.current.dataset.dropdown = 'open';
        } else if (dropdown === 'open') {
            dropDownBox.current.style.opacity = '0';
            arrowIcon.current.style.transform = 'rotate(0)';
            setTimeout(
                () => (dropDownBox.current.style.visibility = 'hidden'),
                150
            );

            dropDownBox.current.dataset.dropdown = 'close';
        }
    };

    const handleSelect = function ({ target }) {
        [iconCheck1.current, iconCheck2.current, iconCheck3.current].forEach(
            icon => {
                icon.setAttribute('src', undefined);
            }
        );

        let icon;
        let spans;

        if (target.querySelector('img')) {
            icon = target.querySelector('img');
            spans = target.querySelectorAll('span');
        }

        if (target.closest('li').querySelector('img')) {
            icon = target.closest('li').querySelector('img');
            spans = target.closest('li').querySelectorAll('span');
        }

        icon.setAttribute('src', iconCheck);

        const [planText, priceText] = spans;
        plan.current.textContent = planText.textContent;
        price.current.textContent = priceText.textContent;
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} ref={form}>
            <img
                className={`${styles.iconCross} ${styles.iconCross_name}`}
                src={iconCross}
                ref={iconCrossName}
                alt=""
            />
            <img
                className={`${styles.iconCross} ${styles.iconCross_email}`}
                src={iconCross}
                ref={iconCrossEmail}
                alt=""
            />
            <img
                className={`${styles.iconCross} ${styles.iconCross_tel}`}
                src={iconCross}
                ref={iconCrossTel}
                alt=""
            />
            <img
                className={`${styles.iconCross} ${styles.iconCross_comp}`}
                src={iconCross}
                ref={iconCrossComp}
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
                    <span ref={plan}>Basic Pack</span>
                    <span className={styles.selectFree} ref={price}>
                        Free
                    </span>
                </p>
                <img
                    className={styles.iconArrow}
                    src={iconArrowDown}
                    alt=""
                    ref={arrowIcon}
                />

                <ul
                    className={styles.ul}
                    ref={dropDownBox}
                    data-dropdown="close"
                >
                    <li onClick={handleSelect}>
                        <span>Basic Pack</span>
                        <span className={styles.selectFree}>Free</span>
                        <img
                            className={styles.iconCheck}
                            src={iconCheck}
                            ref={iconCheck1}
                            alt=""
                        />
                    </li>

                    <li onClick={handleSelect}>
                        <span>Pro Pack</span>
                        <span className={styles.selectFree}>$9.99</span>
                        <img
                            className={styles.iconCheck}
                            src={undefined}
                            ref={iconCheck2}
                            alt=""
                        />
                    </li>

                    <li onClick={handleSelect}>
                        <span>Ultimate Pack</span>
                        <span className={styles.selectFree}>$19.99</span>
                        <img
                            className={styles.iconCheck}
                            src={undefined}
                            ref={iconCheck3}
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
