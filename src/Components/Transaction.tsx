import React, { useContext } from "react";
import { TransContext } from "../Context/TransactionContext";

const Transaction = ({ transaction }: any) => {
  //@ts-ignore
  const { deleteTransaction } = useContext(TransContext);

  return (
    <div>
      <li>
        <span>{transaction.desc}</span>
        <span>
          <span>{transaction.amount}</span>
          <button onClick={() => deleteTransaction(transaction.id)} className="dlt-btn" > X </button>
        </span>
      </li>
    </div>
  );
};

export default Transaction;
