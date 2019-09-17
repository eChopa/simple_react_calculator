import React from "react"
import { Row } from "./Row"


export const RowsBox = ({rows, setRows}) => {
    const  deleteRow = (id) => {
        setRows(rows.filter((row) => row.id !== id))
    }
    const changeData = (type,value, id) => {
        setRows(rows.map(row => {return row.id === id? {...row, [type]: value} : row}))
    }
    return (
        <ul className="list-group">
            {rows.map((row,idInArray) => {return (<Row key={row.id} idInArray={idInArray} row={row} changeData={changeData} deleteRow={deleteRow}/>)})}
        </ul>

    )
}
