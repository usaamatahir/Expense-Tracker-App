import React, { useState, useContext } from 'react'
import {TransContext} from '../Context/TransactionContext';

const AddTransaction = () => {

    // @ts-ignore
    let { addTransaction } = useContext(TransContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmitTransaction = (event: any) => {
        event.preventDefault();

        if (amount === 0 || text === '') {
            alert("Please Provide The Values");
            return false;
        }

        addTransaction({
            id: Math.floor(Math.random()*100000000),
            desc: text,
            amount,
        })
        setText('');
        setAmount(0)
    }

    const onSubmitExpense = (event: any) => {
        event.preventDefault();

        if (amount === 0 || text === '') {
            alert("Please Provide The Values");
            return false;
        }

        addTransaction({
            id: Math.floor(Math.random() * 1000000),
            desc: text,
            amount: -amount,
        })
    }

    return (
        <div className="addTrans">
            <h2>Add Transaction</h2>
            <hr />
            <form >
                <div className="form-control">
                <label htmlFor='text'>Enter Description</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Description...' required />
                </div>
                <div className="form-control">
                <label htmlFor='amount'>Amount</label>
                  <input type='number' value={amount} onChange={(e) => setAmount(e.target.valueAsNumber)} placeholder='Enter Amount...' required />
                </div>
            </form>

            <div className="buttons">
                <button onClick={onSubmitTransaction} className="btn btnIncome">Add Income</button>
                <button onClick={onSubmitExpense} className="btn btnExpense">Add Expense</button>
            </div>
        </div>
    )
}

export default AddTransaction;