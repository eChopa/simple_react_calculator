import React from "react"

export const Result = ({rows}) => {
    const result = rows.reduce((res, current)=>{
       return current.enabled ? res + (current.sign === "+" ? 1 : -1)*parseInt(current.value || 0)  : res
    },0)
    return (
        rows.length?
                <div className="row justify-content-center alert alert-info font-weight-bold">
                    Result: {result}
                </div>
            : null
    )
}