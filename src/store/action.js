import { COUNTER_DECREMENT, COUNTER_DIVIDER, COUNTER_INCREMENT,COUNTER_MULTIPLIER } from "./action.types"

export const add = (value)=> {
    return {type:COUNTER_INCREMENT,payload:value}
}
export const subtract = (value)=>{
    return {type:COUNTER_DECREMENT,payload:value}
}
export const multiply = (value)=>{
    return {type:COUNTER_MULTIPLIER,payload:value}        
}
export const divide = (value)=>{
    return {type:COUNTER_DIVIDER,payload:value}
}