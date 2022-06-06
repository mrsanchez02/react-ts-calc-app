import React,{useContext,FC} from 'react'
import { CalcContext } from '../context/CalcContext'

type TDigitButtonProps = {
    digit: string
}

const DigitButton: FC<TDigitButtonProps> = ({digit}) => {
    
  const {addDigit} = useContext(CalcContext);

  return (
    <button onClick={()=>addDigit(digit)}>{digit}</button>
  )
}

export default DigitButton;