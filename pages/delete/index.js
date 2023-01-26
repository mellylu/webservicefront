import React, { useState, useEffect } from "react"
import axios from "axios"

import Button from "../../components/button"
import Input from "../../components/input"
import Main from "../../components/main"
import Message from "../../components/message"

import styles from "./index.module.scss"

const Index = () => {
    const [nameTable, setNameTable] = useState("")
    const [id, setId] = useState("")
    const [message, setMessage] = useState("")
    const [messageErreur, setMessageErreur] = useState("")

    const deleteTable = () => {
        axios
            .delete(`http://localhost:8000/${nameTable}`)
            .then(data => {
                console.log(data)
                setMessage(data.data)
                setMessageErreur()
            })
            .catch(err => {
                setMessage()
                setMessageErreur(err.response.data)
            })
    }

    const deleteElement = () => {
        axios
            .delete(`http://localhost:8000/${nameTable}/${id}`)
            .then(data => {
                console.log(data)
                setMessage(data.data)
                setMessageErreur()
            })
            .catch(err => {
                console.log(err)
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
                        label="Entrer le nom de la table pour la supprimer."
                        value={nameTable}
                        placeholder="nom table"
                        onChange={e => {
                            setNameTable(e.target.value)
                        }}
                    />
                    <Button title="Supprimer" onClick={() => deleteTable()} />

                    <br />

                    <Input
                        label="Entrer le nom de la table et l'id de l'élement à supprimer."
                        value={nameTable}
                        placeholder="nom table"
                        onChange={e => {
                            setNameTable(e.target.value)
                        }}
                    />
                    <Input
                        value={id}
                        placeholder="id"
                        onChange={e => {
                            setId(e.target.value)
                        }}
                    />
                    <Button title="Supprimer" onClick={() => deleteElement()} />
                    <br />
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
