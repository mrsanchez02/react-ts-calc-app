import React,{useContext} from 'react'
import { CalcContext } from '../context/CalcContext'

type Props = {
    operation:string
}

const OperationButton = ({operation}: Props) => {

    const {chooseOperation} = useContext(CalcContext);

  return (
    <button onClick={()=>chooseOperation(operation)}>{operation}</button>
  )
}

export default OperationButton