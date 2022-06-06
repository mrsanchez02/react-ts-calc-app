import { useContext } from 'react';
import './styles.css';
import {CalcContext} from './context/CalcContext'
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';

function App() {

  const {currentOperand,previousOperand,operation,clear,evaluate,deleteDigit} = useContext(CalcContext);

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <button className="span-two" onClick={clear}>AC</button>
      <button onClick={deleteDigit}>DEL</button>
      <OperationButton operation='÷' />
      <DigitButton digit='1' />
      <DigitButton digit='2' />
      <DigitButton digit='3' />
      <OperationButton operation='*' />
      <DigitButton digit='4' />
      <DigitButton digit='5' />
      <DigitButton digit='6' />
      <OperationButton operation='-' />
      <DigitButton digit='7' />
      <DigitButton digit='8' />
      <DigitButton digit='9' />
      <OperationButton operation='+' />
      <DigitButton digit='.' />
      <DigitButton digit='0' />
      <button className="span-two" onClick={evaluate}>=</button>
    </div>
  );
}

const INTEGER_FORMATER = new Intl.NumberFormat("en-us",{
  maximumFractionDigits: 0,
})

function formatOperand(operand:string) {
  if(operand.length===0) return
  const [integer, decimal] = operand.split('.');
  if(typeof(decimal)==='undefined') return INTEGER_FORMATER.format(Number(integer)).toString();
  return `${INTEGER_FORMATER.format(Number(integer)).toString()}.${decimal}`
}

export default App;
