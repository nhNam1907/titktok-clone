import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function HeaderLanguage({ title, onBack }) {
    return (
        <header className={cx("header")}>
            <button className={cx("back-btn")} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx("header-title")}>{title}</h4>
        </header>
    );
}

export default HeaderLanguage;
