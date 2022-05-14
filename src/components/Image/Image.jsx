import React from "react";
import { useState, forwardRef } from "react";
import { images } from "../../assets/images";
import styles from "./Image.module.scss";
import classNames from "classnames";

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallback = images.noImg,
            ...props
        },
        ref
    ) => {
        const [fallback, setFallback] = useState("");

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                {...props}
                className={classNames(styles.wrapper, className)}
                src={fallback || src}
                alt={alt}
                ref={ref}
                onError={handleError}
            />
        );
    }
);

export default Image;
