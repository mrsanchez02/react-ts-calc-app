interface IDigit {
    digit: string;
}

interface IOperation {
    oper: string;
}

export type ActionType = 
    {type: 'add-digit', payload: IDigit} | 
    {type: 'choose-operation', payload: IOperation} |
    {type:'clear',payload?: string} |
    {type: 'delete-digit', payload?: string} |
    {type: 'evaluate', payload?: string}