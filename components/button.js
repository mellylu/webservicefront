import React from "react"

import styles from "./button.module.scss"

const Button = ({ onClick, title }) => {
    return (
        <div>
            <button onClick={onClick} className={styles.btn}>
                {title}
            </button>
        </div>
    )
}

export default Button
