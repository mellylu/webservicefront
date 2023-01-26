import React, { useState, useEffect } from "react"
import axios from "axios"

import Button from "../../components/button"
import Input from "../../components/input"
import Main from "../../components/main"
import Message from "../../components/message"

import styles from "./index.module.scss"

const Index = () => {
    const [nameTable, setNameTable] = useState("")
    const [newName, setNewName] = useState("")
    const [bodyKey, setBodyKey] = useState("")
    const [bodyValue, setBodyValue] = useState("")
    const [id, setId] = useState("")

    const [message, setMessage] = useState("")
    const [messageErreur, setMessageErreur] = useState("")

    const changeNameTable = () => {
        axios
            .put(`http://localhost:8000/${nameTable}`, JSON.stringify({ name: newName }))
            .then(data => {
                setMessage(data.data)
                setMessageErreur()
            })
            .catch(err => {
                setMessage()
                setMessageErreur(err.response.data)
            })
    }

    const changeTable = () => {
        axios
            .put(
                `http://localhost:8000/${nameTable}/${id}`,
                JSON.stringify({ [bodyKey]: bodyValue }),
            )
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
                    <h1>PUT</h1>
                    <Input
                        label="Entrez le nom de la table pour modifier son nom."
                        value={nameTable}
                        placeholder="nom de la table"
                        onChange={e => {
                            setNameTable(e.target.value)
                        }}
                    />
                    <Input
                        placeholder="Nouveau nom"
                        onChange={e => {
                            setNewName(e.target.value)
                        }}
                    />

                    <Button title="Modifier" onClick={() => changeNameTable()} />

                    <br />

                    <Input
                        label="Entrez le nom de la table ainsi qu'un identifiant. Si la clé existe la valeur inscrite sera remplacée par l'ancienne et si elle n'existe pas alors la clé et la valeur seront ajoutée à l'objet"
                        value={nameTable}
                        placeholder="nom de la table"
                        onChange={e => {
                            setNameTable(e.target.value)
                        }}
                    />
                    <Input
                        placeholder="Id"
                        onChange={e => {
                            setId(e.target.value)
                        }}
                    />
                    <Input
                        placeholder="Clé"
                        onChange={e => {
                            setBodyKey(e.target.value)
                        }}
                    />
                    <Input
                        placeholder="Valeur"
                        onChange={e => {
                            setBodyValue(e.target.value)
                        }}
                    />
                    <Button title="Modifier" onClick={() => changeTable()} />
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
