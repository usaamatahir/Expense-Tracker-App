import React from "react";
import { Header, Balance, IncomeExpense, History, AddTransaction } from "./Components";
import "./Style.css";
import { TransactionProvider } from "./Context/TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <History />
          <AddTransaction />
        </div>
      </div>
    </TransactionProvider>
  );
}

export default App;
