import React from "react"

import styles from "./input.module.scss"

const Input = ({ label, type, value, placeholder, onChange }) => {
    return (
        <div>
            {label && (
                <div>
                    <label htmlFor={label}>{label}</label>
                </div>
            )}
            <input
                type={type}
                id={label}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={styles.input}
            />
        </div>
    )
}

export default Input
