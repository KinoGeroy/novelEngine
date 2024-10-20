import styles from './Button.module.scss'
import React, {FC} from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    classType?: number;
}

const Button: FC<ButtonProps> = ({classType, children, ...props}) => {
    return (
        <button className={`${styles.button} ${styles[`button${classType}`]}`} {...props}>
            {children}
        </button>
    );
};

export default Button;

