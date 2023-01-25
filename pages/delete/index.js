import React, { useState, useEffect } from "react"
import axios from "axios"

import Button from "../../components/button"
import Input from "../../components/input"
import Main from "../../components/main"
import Message from "../../components/message"

import styles from "./index.module.scss"

const Index = () => {
    const [nameTable, setNameTable] = useState("")
    const [message, setMessage] = useState("")
    const [messageErreur, setMessageErreur] = useState("")

    const deleteTable = () => {
        axios
            .delete(`http://localhost:8000/${nameTable}`)
            .then(data => {
                setMessage(data.data)
                setMessageErreur()
            })
            .catch(err => {
                setMessage()
                setMessageErreur(err.response.data)
            })
    }

    return (
        <div className={styles.divflex}>
            <Main />
            <div className={styles.div}>
                <div>
                    <h1>DELETE</h1>
                    <Input
                        label="Supprimer la table"
                        value={nameTable}
                        placeholder="nom de la table"
                        onChange={e => {
                            setNameTable(e.target.value)
                        }}
                    />
                    <Button title="DELETE" onClick={() => deleteTable()} />
                    {message ? (
                        <div>
                            <Message type="valid" mess={message} />
                        </div>
                    ) : (
                        ""
                    )}
                    {messageErreur ? (
                        <div>
                            <Message mess={messageErreur} />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    )
}

export default Index
