import React, { useState, useEffect } from "react"
import axios from "axios"

import Button from "../../components/button"
import Input from "../../components/input"
import Main from "../../components/main"
import Message from "../../components/message"

import styles from "./index.module.scss"

const Index = () => {
    const [nameTable, setNameTable] = useState("")
    const [bodyCle, setBodyCle] = useState("")
    const [bodyValeur, setBodyValeur] = useState("")
    const [message, setMessage] = useState("")
    const [messageErreur, setMessageErreur] = useState("")

    const createTable = () => {
        axios
            .post(`http://localhost:8000/${nameTable}`, JSON.stringify({ [bodyCle]: bodyValeur }))
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
                    <h1>POST</h1>
                    <Input
                        label="Entrez le nom de la table pour ajouter un élément. Si elle existe déjà un objet s'ajoutera à la table sinon un table sera crée avec l'objet dedans."
                        value={nameTable}
                        placeholder="nom de la table"
                        onChange={e => {
                            setNameTable(e.target.value)
                        }}
                    />
                    <Input
                        placeholder="clé"
                        onChange={e => {
                            setBodyCle(e.target.value)
                        }}
                    />
                    <Input
                        placeholder="Valeur"
                        onChange={e => {
                            setBodyValeur(e.target.value)
                        }}
                    />
                    <Button title="Créer" onClick={() => createTable()} />
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
