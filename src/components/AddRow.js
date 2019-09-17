import React from "react"

export const AddRow = ({rows, setRows}) => {
    return(
        <div className="row justify-content-center my-4">
            <button
                className="btn btn-primary"
                onClick={()=>{setRows([...rows, {id:  rows.length?rows[rows.length-1].id+1 : 0, sign: "+", value: '', enabled: true}])}}>
                Add row
            </button>
        </div>
    )
}