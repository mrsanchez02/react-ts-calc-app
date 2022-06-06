export const evaluate = (currentOperand:string,previousOperand:string,operation:string):string => {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if(isNaN(prev)||isNaN(current)) return "";
    let computation: any
    switch (operation) {
        case "+":
            console.log(`${prev} + ${current}`)
            computation = prev + current
            break;
        case "-":
            computation = prev - current
            break;
        case "*":
            computation = prev * current
            break;
        case "÷":
            computation = prev / current
            break;
    }
    return computation.toString();
  }

  const INTEGER_FORMATER = new Intl.NumberFormat("en-us",{
    maximumFractionDigits: 0,
  })
  
  export function formatOperand(operand:string) {
    if(operand.length===0) return
    const [integer, decimal] = operand.split('.');
    if(typeof(decimal)==='undefined') return INTEGER_FORMATER.format(Number(integer)).toString();
    return `${INTEGER_FORMATER.format(Number(integer)).toString()}.${decimal}`
  }  