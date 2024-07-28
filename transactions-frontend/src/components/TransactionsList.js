import React, { Component } from 'react';
import axios from 'axios';

class TransactionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    };
  }

  componentDidMount() {
    this.fetchTransactions();
  }

  fetchTransactions = () => {
    axios.get('http://localhost:3000/transactions')
      .then(response => {
        this.setState({ transactions: response.data });
      })
      .catch(error => {
        console.error("There was an error fetching the transactions!", error);
      });
  };

  render() {
    return (
      <div>
        <h2>Transaction List</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {this.state.transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.running_balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TransactionsList;
