import React, { useContext } from 'react';
import { TransContext } from '../Context/TransactionContext';
import Transaction from './Transaction';

const History = () => {
    // @ts-ignore
    let { transactions } = useContext(TransContext);
    
    return (
        <div className="history">
            <h2>History</h2>
            <hr />
            <ul>
                
                {transactions.map((transaction: any) => (<Transaction
                    key={transaction.id}
                    //@ts-ignore
                    transaction={transaction} />))}
            </ul>
        </div>
    )
}

export default History;