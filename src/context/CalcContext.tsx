import React, { createContext, useReducer } from "react";
import { reducer } from "./CalcReducer";

type Props = {
    children: React.ReactNode
}

export const CalcContext = createContext<any>({});

export const ContextProvider = ({children}:Props) => {

    const initialState = {
        currentOperand : '0',
        previousOperand: '',
        operation: '',
        overwrite: false
    }

    const [{currentOperand,previousOperand,operation}, dispatch] = useReducer(reducer,initialState);

    const addDigit = (digit:string):void => {
        dispatch({
            type:"add-digit",
            payload:{digit}
        })
    }

    const chooseOperation = (oper:string):void => {
        dispatch({
            type:"choose-operation",
            payload:{oper}
        })
    }

    const clear = ():void => {
        dispatch({
            type:'clear'
        })
    }

    const evaluate = ():void => {
        dispatch({
            type:'evaluate'
        })
    }

    const deleteDigit = ():void => {
        dispatch({
            type:"delete-digit"
        })
    }

    return (
    <CalcContext.Provider value={{
        currentOperand,
        previousOperand,
        operation,
        addDigit,
        chooseOperation,
        clear,
        evaluate,
        deleteDigit
    }}>
        {children}
    </CalcContext.Provider>
    )
}