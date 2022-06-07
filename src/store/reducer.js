import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_MULTIPLIER,COUNTER_DIVIDER } from "./action.types";

export const reducer = (state,{type,payload})=>{
    switch(type){
       case COUNTER_INCREMENT:{
           state.count = state.count + payload;
           return {...state}
       }
        case COUNTER_DECREMENT:{
            state.count = state.count - payload
            return {...state}
        }
        case COUNTER_MULTIPLIER:{
            state.count = state.count*payload
            return {...state}
        }
        case COUNTER_DIVIDER:{
            state.count = state.count/payload
            return {...state}
        }
        default: {
            return state;
        }
    }
}