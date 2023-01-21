import React, { useState, useEffect } from "react"
import axios from "axios"

import Input from "../components/input"
import Button from "../components/button"
import Message from "../components/message"
import Main from "../components/main"

import styles from "./index.module.scss"

export default function Home() {
    const [nameTable, setNameTable] = useState("")
    const [id, setId] = useState("")
    const [nameSort, setNameSort] = useState("")
    const [nameSearch, setNameSearch] = useState("")
    const [table, setTable] = useState([])
    const [tableWithId, setTableWithId] = useState({})
    const [messageTable, setMessageTable] = useState("")
    const [messageTableWithId, setMessageTableWithId] = useState("")
    const [showNext, setShowNext] = useState(false)
    const [showNext2, setShowNext2] = useState(false)

    const showTable = () => {
        axios
            .get(`http://localhost:8000/${nameTable}`)
            .then(data => {
                console.log(data)
                setMessageTable(null)
                setTable(data.data)
                setShowNext(true)
            })
            .catch(err => {
                setMessageTable(err.response.data)
                setShowNext(false)
            })
    }

    const showSort = () => {
        axios
            .get(`http://localhost:8000/${nameTable}/?sort=${nameSort}`)
            .then(data => {
                setTable(data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const showSearch = () => {
        axios
            .get(`http://localhost:8000/${nameTable}/?${nameSearch}`)
            .then(data => {
                setTable(data.data)
            })
            .catch(err => {
                setTable(table)
            })
    }

    const showTableWithId = () => {
        axios
            .get(`http://localhost:8000/${nameTable}/${id}`)
            .then(data => {
                console.log(data)
                setMessageTableWithId(null)
                setTableWithId(data.data)
                setShowNext2(true)
            })
            .catch(err => {
                setMessageTableWithId(err.response.data)
                setShowNext2(false)
            })
    }

    const getKeys = element => {
        var keys = Object.keys(element)
        return keys
    }

    return (
        <div className={styles.divflex}>
            <Main />
            <div className={styles.div}>
                <div>
                    <h1>GET</h1>
                    <Input
                        label="Entrez le nom de la table que vous voulez voir s'afficher"
                        value={nameTable}
                        placeholder="nom de la table"
                        onChange={e => {
                            setNameTable(e.target.value)
                        }}
                    />

                    <Button title="Afficher" onClick={() => showTable()} />
                    <br />
                    {table && showNext ? (
                        <>
                            <Input
                                label="Triez par"
                                value={nameSort}
                                placeholder="ex : name"
                                onChange={e => {
                                    setNameSort(e.target.value)
                                }}
                            />
                            <Button title="Trier" onClick={() => showSort()} />

                            <Input
                                label="Rechercher par"
                                value={nameSearch}
                                placeholder="ex : name=melly"
                                onChange={e => {
                                    setNameSearch(e.target.value)
                                }}
                            />
                            <Button title="Rechercher" onClick={() => showSearch()} />
                        </>
                    ) : (
                        ""
                    )}
                    <br />

                    {table && showNext ? (
                        table.map(element => (
                            <div className={styles.element} key={element.id}>
                                {/* je n'ai pas réussi à récupérer le nom des clés en bouclant c'est pour cela qu'il y en a plusieurs */}
                                <p>{element[getKeys(element)[0]]}</p>

                                <p>{element[getKeys(element)[1]]}</p>
                                <p>{element[getKeys(element)[2]]}</p>
                                <p>{element[getKeys(element)[3]]}</p>
                                <p>{element[getKeys(element)[4]]}</p>
                                <p>{element[getKeys(element)[5]]}</p>
                                <p>{element[getKeys(element)[6]]}</p>
                                <p>{element[getKeys(element)[7]]}</p>
                                <p>{element[getKeys(element)[8]]}</p>
                                <p>{element[getKeys(element)[9]]}</p>
                                <p>{element[getKeys(element)[10]]}</p>
                                <br />
                            </div>
                        ))
                    ) : (
                        <div></div>
                    )}
                    {messageTable ? (
                        <>
                            <Message mess={messageTable} />
                        </>
                    ) : (
                        ""
                    )}
                    <br />
                    {showNext ? (
                        <>
                            <Input
                                label="Entrez l'identifiant de l'objet que vous voulez voir s'afficher"
                                value={id}
                                placeholder="id"
                                onChange={e => {
                                    setId(e.target.value)
                                }}
                            />
                            <Button title="Afficher" onClick={() => showTableWithId()} />
                            <br />
                            {tableWithId && showNext2
                                ? tableWithId.map(element => (
                                      <div className={styles.element} key={element.id}>
                                          {/* je n'ai pas réussi à récupérer le nom des clés en bouclant c'est pour cela qu'il y en a plusieurs */}
                                          <p>{element[getKeys(element)[0]]}</p>
                                          <p>{element[getKeys(element)[1]]}</p>
                                          <p>{element[getKeys(element)[2]]}</p>
                                          <p>{element[getKeys(element)[3]]}</p>
                                          <p>{element[getKeys(element)[4]]}</p>
                                          <p>{element[getKeys(element)[5]]}</p>
                                          <p>{element[getKeys(element)[6]]}</p>
                                          <p>{element[getKeys(element)[7]]}</p>
                                          <p>{element[getKeys(element)[8]]}</p>
                                          <p>{element[getKeys(element)[9]]}</p>
                                          <p>{element[getKeys(element)[10]]}</p>
                                      </div>
                                  ))
                                : ""}
                            {messageTableWithId ? (
                                <>
                                    <Message mess={messageTableWithId} />
                                </>
                            ) : (
                                ""
                            )}
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    )
}
