import React, {useState} from 'react';
import { RowsBox } from "./components/RowsBox";
import  {Result} from "./components/Result";
import { AddRow } from "./components/AddRow";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export const Calculator = () => {
  const [rows, setRows] = useState([])
  return (
      <div className="container d-flex flex-column justify-content-center align-content-center">
        <h1 className="text-center">Simple React calculator (adder)</h1>
        <RowsBox rows={rows} setRows={setRows} />
          <AddRow rows={rows} setRows={setRows} />
        <Result rows={rows}/>
      </div>
  )
}
