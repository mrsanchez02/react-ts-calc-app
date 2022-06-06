import {ActionType} from '../types/';
import { evaluate } from '../helper';

interface Icalc {
  currentOperand : string,
  previousOperand: string,
  operation: string,
  overwrite: boolean
};

export const reducer = (state: Icalc, {type,payload}: ActionType) => {
    switch (type) {
      case "add-digit":
        if(state.overwrite) {
          return {
            ...state,
            currentOperand: payload.digit,
            overwrite: false
          }
        }
        // No aditional 0.
        if(payload.digit === '0' && state.currentOperand.length === 0) return state;
        // No need more than one period '.'
        if(payload.digit ==='.' && state.currentOperand.includes('.')) return state;
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`
        };
      case "choose-operation":
        if(state.currentOperand.length===0 && state.previousOperand.length===0) return state; 
        // With this you can switch operations before adding other operand.
        if(state.currentOperand.length===0){
          return {
            ...state,
            operation: payload.oper
          }
        }
        if(state.previousOperand.length===0) return {
            ...state,
            operation: payload.oper,
            previousOperand: state.currentOperand,
            currentOperand: ''
          }
          return {
            ...state,
            previousOperand: evaluate(state.currentOperand,state.previousOperand,state.operation),
            operation:payload.oper,
            currentOperand: ""
          };
      case 'clear':
        return {
          ...state,
          overwrite: false,
          previousOperand: "",
          operation: "",
          currentOperand: ""
        };
      case 'delete-digit':
        if(state.overwrite) return{
          ...state,
          overwrite: false,
          currentOperand: ''
        };
        if(state.currentOperand.length===0) return state;
        if(state.currentOperand.length===1) return {
          ...state,
          currentOperand: ''
        };
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1)
        }
      case 'evaluate':
        if(state.operation.length===0||state.currentOperand.length===0||state.previousOperand.length===0) return state;
        return {
          ...state,
          overwrite: true,
          previousOperand: "",
          operation:"",
          currentOperand: evaluate(state.currentOperand,state.previousOperand,state.operation)
        };
    }
  }