import React from "react"

export const Row = ({row, idInArray, changeData,deleteRow}) => {
    return (
        <li className={`row mb-0 justify-content-around alert ${idInArray%2===0? 'alert-primary':null}`}>
            <select
                className="form-control col-3 col-md-2 col-lg-1 mb-2 mb-md-0 text-center"
                defaultValue={row.sign}
                aria-controls={false}
                onChange={(event)=>{changeData("sign",event.target.value,row.id)}}>
                <option value="+">+</option>
                <option value="-">-</option>
            </select>
            <input className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0 text-center form-control text-center" value={row.value}
                   onChange={(event)=>{changeData("value",event.target.value,row.id)
                   }}
                   type="number"/>

            <button className={`col-6 col-md-2 col-lg-1 text-center btn ${row.enabled? 'btn-warning': 'btn-success'}`}
                    onClick={()=>{changeData("enabled",!row.enabled,row.id)}}>
                {row.enabled? 'Disable' : 'Enable'}</button>
            <button className="col-6 col-md-2 col-lg-1 text-center btn btn-danger" onClick={()=>{deleteRow(row.id)}} >Delete</button>
        </li>
    )
}



