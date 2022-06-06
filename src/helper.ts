export const evaluate = (currentOperand:string,previousOperand:string,operation:string):string => {
    console.log(`${previousOperand} & ${currentOperand}`);
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