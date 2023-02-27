import { createContext, useReducer } from "react";
import QuoteReducer from "./QuoteReducer";
const QuoteContext =createContext()

export const QuoteProvide=({children})=>{

    const initialState = {
      quoteData: null
    };
    const [state,dispatch]=useReducer(QuoteReducer,initialState)

    return(
        <QuoteContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </QuoteContext.Provider>

    )
}
export default QuoteContext;