import React from 'react';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Transaction Tracker</h1>
        <AddTransaction />
        <TransactionsList />
      </header>
    </div>
  );
}

export default App;
