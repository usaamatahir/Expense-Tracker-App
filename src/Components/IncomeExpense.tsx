import React, { useContext } from 'react';
import { TransContext } from '../Context/TransactionContext';

const IncomeExpense = () => {

    //@ts-ignore
    const { transactions } = useContext(TransContext);
    
    const amounts = transactions.map((transaction: any) => transaction.amount)
    const income = amounts.filter((amount: number) => amount > 0).reduce((inc: number, item: number) => (inc += item), 0).toFixed(2);
    const expense = (amounts.filter((amount: number) => amount < 0).reduce((inc: number, item: number) => (inc += item), 0) * -1).toFixed(2);
    return (
        <div className="incomeExpense">
            <div>
                <h2>Income</h2>
                <p className="money plus">$ {income}</p>
            </div>
            <div>
                <h2>Expense</h2>
                <p className="money minus">$ {expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense;