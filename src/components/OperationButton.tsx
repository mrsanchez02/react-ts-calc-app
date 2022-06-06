import React,{useContext,FC} from 'react'
import { CalcContext } from '../context/CalcContext'

type TOperationButtonProps = {
    operation:string
}

const OperationButton:FC<TOperationButtonProps> = ({operation}) => {

  const {chooseOperation} = useContext(CalcContext);

  return (
    <button onClick={()=>chooseOperation(operation)}>{operation}</button>
  )
}

export default OperationButton