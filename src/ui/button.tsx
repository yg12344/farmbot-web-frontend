import * as React from "react";
import { t } from "i18next";

interface ButtonProps {
    /** Default styles + whatever user wants */
    className?: string;
    /** Text inside Button */
    text: string;
    onClick: () => void;
}

export function Button(props: ButtonProps) {
    let baseClasses = "";
    let classes = `${baseClasses} ${props.className}`;

    return <button
        className={classes}
        onClick={props.onClick}>
        {t(props.text)}
    </button>;
}
