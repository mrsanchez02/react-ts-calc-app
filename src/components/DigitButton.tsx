import React,{useContext} from 'react'
import { CalcContext } from '../context/CalcContext'

type Props = {
    digit: string
}

const DigitButton = ({digit}: Props) => {
    
  const {addDigit} = useContext(CalcContext);

  return (
    <button onClick={()=>addDigit(digit)}>{digit}</button>
  )
}

export default DigitButton