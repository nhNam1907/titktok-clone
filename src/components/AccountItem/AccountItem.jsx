import React from "react";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image/Image";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <Image
                className={cx("avatar")}
                alt="avata"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e86867bdcd0d0fa4649f4731b60677ad~c5_100x100.jpeg?x-expires=1652256000&x-signature=FuOxOI%2BmT5P3%2BGg0R4gt8kOTduc%3D"
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx("username")}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
