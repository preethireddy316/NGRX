import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounterState=createFeatureSelector<CounterState>('counter')

export const getCounter=createSelector(getCounterState,(state:any)=>{
    return state.counter
})

export const getText=createSelector(getCounterState,(state:any)=>{
    return state.text
}) 

