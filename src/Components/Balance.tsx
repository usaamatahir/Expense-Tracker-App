import React, { useContext } from 'react'
import { TransContext } from '../Context/TransactionContext'
const Balance = () => {

    //@ts-ignore
    const {transactions} = useContext(TransContext);
    const totalAmount = transactions.map((transaction: any) => transaction.amount);
    const totalBalance = totalAmount.reduce((total: number, amount: number) => (total += amount), 0).toFixed(2);
    return (
        <div className="balance">
            <h2> Your Balance</h2>
            <h1>$ {totalBalance}</h1>
            <hr />
        </div>
    )
}

export default Balance;