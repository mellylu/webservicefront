import React from "react"
import { useRouter } from "next/router"

import styles from "./main.module.scss"

const Main = () => {
    const router = useRouter()

    return (
        <div className={styles.div}>
            <div className={styles.ul}>
                <div className={styles.li}>
                    <button
                        className={styles.a}
                        onClick={() => {
                            router.push("/")
                        }}
                    >
                        GET
                    </button>
                </div>
                <div className={styles.li}>
                    <button
                        className={styles.a}
                        onClick={() => {
                            router.push("/post")
                        }}
                    >
                        POST
                    </button>
                </div>
                <div className={styles.li}>
                    <button
                        className={styles.a}
                        onClick={() => {
                            router.push("/put")
                        }}
                    >
                        PUT
                    </button>
                </div>
                <div className={styles.li}>
                    <button
                        className={styles.a}
                        onClick={() => {
                            router.push("/delete")
                        }}
                    >
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main
