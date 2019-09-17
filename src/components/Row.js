import React from "react"

export const Row = ({row, idInArray, changeData,deleteRow}) => {
    return (
        <li className={`row mb-0 justify-content-center alert ${idInArray%2===0? 'alert-primary':null}`}>
            {row.id?
            <div className="col-3 col-sm-3 col-md-1 mb-2 mb-md-0 text-center">
                    <select
                        className="form-control"
                        defaultValue={row.sign}
                        aria-controls={false}
                        onChange={(event)=>{changeData("sign",event.target.value,row.id)}}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
            </div>
                : null
            }
            <div className={`col-9 col-sm-3 col-md-2 mb-2 mb-md-0 text-center ${!row.id? " offset-md-1":null}`}>
                <input className="form-control text-center" value={row.value}
                       onChange={(event)=>{changeData("value",event.target.value,row.id)
                       }}
                       type="number"/>
            </div>
            <div className="col-6 col-sm-3 col-md-1 text-center">
                <button className={`btn ${row.enabled? 'btn-warning': 'btn-success'}`}
                        onClick={()=>{changeData("enabled",!row.enabled,row.id)}}>
                    {row.enabled? 'Disable' : 'Enable'}</button>
            </div>
            <div className="col-6 col-sm-3 col-md-1 text-center">
                <button className="btn btn-danger" onClick={()=>{deleteRow(row.id)}} >Delete</button>
            </div>
        </li>
    )
}

