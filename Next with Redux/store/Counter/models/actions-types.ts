
export enum CounterAction{
    INCREMENT_COUNT = "INCREMENT_COUNT",
    DECREMENT_COUNT = "DECREMENT_COUNT"
}
interface Counter{
    count: number;
}
export interface IncrementCount extends Counter{
    type:typeof CounterAction.INCREMENT_COUNT
}
export interface DecrementCount extends Counter{
    type:typeof CounterAction.DECREMENT_COUNT
}

export type CountActionsTypes = IncrementCount | DecrementCount;