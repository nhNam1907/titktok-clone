import React from "react";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Button from "../../Button/Button";

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <div>
            <Button
                className={cx("menu-item")}
                leftIcon={data.icon}
                to={data.to}
            >
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
