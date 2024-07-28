import React, { Component } from 'react';
import axios from 'axios';

class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'credit',
      amount: '',
      description: '',
      date: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { type, amount, description, date } = this.state;

    axios.post('http://localhost:3000/transactions', { type, amount, description, date })
      .then(response => {
        console.log("Transaction added!", response.data);
        this.setState({ type: 'credit', amount: '', description: '', date: '' }); // Reset form
      })
      .catch(error => {
        console.error("There was an error adding the transaction!", error);
      });
  };

  render() {
    return (
      <div>
        <h2>Add Transaction</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Type:
            <select name="type" value={this.state.type} onChange={this.handleChange}>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </label>
          <br />
          <label>
            Amount:
            <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} required />
          </label>
          <br />
          <label>
            Description:
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Date:
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} required />
          </label>
          <br />
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    );
  }
}

export default AddTransaction;
