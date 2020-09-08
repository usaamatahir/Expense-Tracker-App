import React, { createContext, useReducer } from 'react';
import TransReducer  from './TransactionReducer'


const initialState = {
    transactions: []
        
}


export const TransContext = createContext(initialState);

export const TransactionProvider = ({children}:any) => {
    
    let [state, dispatch] = useReducer(TransReducer, initialState);

    function addTransaction(transObj:any) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                id: transObj.id,
                desc: transObj.desc,
                amount: transObj.amount
            },
        })
    }

    function deleteTransaction(id: number) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    return (
        <TransContext.Provider value={{
            
            transactions: state.transactions,
            // @ts-ignore
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransContext.Provider>
    )
}