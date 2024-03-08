import React,{useReducer,createContext } from 'react';
import contextReducer from './contextReducer';

const initialState= JSON.parse(localStorage.getItem('transactions')) || [{"amount":100,"category":"Business","type":"Income","date":"2022-12-03","id":"56ba8591-7479-4818-83fb-87371e541ae7"},{"amount":50,"category":"Travel","type":"Expense","date":"2022-12-06","id":"db9b923c-c42f-4048-bf07-3bd61b39c05b"},{"amount":100,"category":"Salary","type":"Income","date":"2022-12-05","id":"9e79220d-11bd-4033-aef1-2869366c5079"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider =({children}) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) => {
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    };
  
    const addTransaction = (transaction) => {
      dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    };
     
    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

 

    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}