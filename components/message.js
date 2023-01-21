import React from "react"

import styles from "./message.module.scss"

const Message = ({ mess, type }) => {
    return (
        <div className={styles.divmessage}>
            {type === "valid" ? (
                <div className={styles.valid}>
                    <p>{mess}</p>
                </div>
            ) : (
                <div className={styles.error}>
                    <p>{mess}</p>
                </div>
            )}
        </div>
    )
}

export default Message
