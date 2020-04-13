import React from "react";
import ExpensesPage from '../../Components/ExpensesPage/ExpensesPage';
import { DatePicker } from 'antd';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


/* import "./Expense_Card.css"; */

class Transaction_expense extends React.Component {


  constructor(props) {
    super(props);


    this.state = {
      transactions: [],
      currencies: [],
      categories: [],
      items: [],
     
    }
  
  }

  async componentDidMount() {

    const response = await fetch('http://localhost:8000/api/currencies');
    const json = await response.json();
    if (json.success === true) {
      this.setState({
        currencies: json.data
      })
    }
    const token = localStorage.getItem('token');
    const response2 = await fetch(`http://localhost:8000/api/categories?token=${token}`);
    const json2 = await response2.json();
    if (json2.success === true) {
      this.setState({
        categories: json2.data
      })
    }
    debugger;
    this.getExpense()
  }



  getExpense = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:8000/api/transactions?token=${token}`);
      const result = await response.json();
      debugger;
      if (result.success) {
        const expenses = result.data.filter(transaction => {
          if (transaction.type === 'expense') {
            return true;
          } else {
            return false;
          }
        })
        const items = expenses.map(expense => {
          let type = 'fixed';
          if (expense.interval > 0) {
            type = 'recurring';
          }

          return {
            mode: 'view',
            data: { ...expense, category: expense.category_id, currency: expense.currency_id, type }
          }
        })
        this.setState({ items: items, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  createExpense = async props => {
    try {
      // if (fixed0){

      const { index, title, description, amount, category_id, start_date, end_date, interval, type, currency_id } = props;
      const token = localStorage.getItem('token');
      // console.log('úrl', `http://localhost:8000/api/transactions/create?title=${title}&description=${description}&amount=${amount}&category_id=${category_id}&start_date=${start_date}&end_date=${end_date}&type=${type}&interval=${interval}&currency_id=${currency_id}&token=${token}`);
      const response = await fetch(
        `http://localhost:8000/api/transactions/create?title=${title}&description=${description}&amount=${amount}&category_id=${category_id}&start_date=${start_date}&end_date=${end_date}&type=expense&interval=${interval}&currency_id=${currency_id}&token=${token}`, {
        headers: {
          'Accept': 'application/json',
        }
      }
      );
      const json = await response.json();
      if (json.success) {
        // we reproduce the user that was created in the database, locally
        const expenseY = json.data;
        const new_items = this.state.items.map((item, currentIndex) => {

          const expense = expenseY;
          if (index !== currentIndex) {
            return item;
          }
          else {

            let type = 'fixed';
            if (expense.interval > 0) {
              type = 'recurring';
            }

            return {
              mode: 'view',
              data: { ...expense, category: expense.category_id, currency: expense.currency_id, type }
            }
          }
        })
        // call the backend with the update route
        this.setState({
          items: new_items
        })
      } else {
        this.setState({ error: json.message });
      }
    } catch (err) {
      this.setState({ error: err.message });
    }
  };
  onOk = (date, index, name) => {
    const newItems = this.state.items;

    newItems[index]['data'] = {
      ...newItems[index]['data'], [name]: date
    }

    this.setState(
      {
        items: newItems
      }
    );

  }

  handleTypeChange = (value, index) => {
    const newItems = this.state.items;

    newItems[index]['data'] = {
      ...newItems[index]['data'], 'type': value
    }

    this.setState(
      {
        items: newItems
      }
    );
  }

  handleInputChange = (event, index) => {
    const target = event.target;
    const value = target.name === 'type' ? target.checked : target.value;
    const name = target.name;

    const newItems = this.state.items;

    newItems[index]['data'] = {
      ...newItems[index]['data'], [name]: value
    }

    this.setState(
      {
        items: newItems
      }
    );
  }

  handleValidation = (index) => {

    let errors = [];
    const expense = this.state.items[index].data;

    // We need to check the type if its recurring or fixed

    if (expense.type === 'fixed') {
      // On Fixed we validate the following: Title / category / amount / currency / start_date

      if (expense.title === '') {
        errors.push('Please fill the title');
      }
      if (expense.category === '') {
        errors.push('Please fill the category');
      }
      if (parseInt(expense.amount) <= 0) {
        errors.push('Please fill the amount');
      }
      if (expense.currency === '') {
        errors.push('Please fill the currency');
      }
      if (expense.start_date === '') {
        errors.push('Please fill the start_date');
      }



    } else if (expense.type === 'recurring') {

      // on Recurring we validate the following: Title / Category / amount / currency / start_date / interval
      if (expense.title === '') {
        errors.push('Please fill the title');
      }
      if (expense.category === '') {
        errors.push('Please fill the category');
      }
      if (expense.amount <= 0) {
        errors.push('Please fill the amount');
      }
      if (expense.currency === '') {
        errors.push('Please fill the currency');
      }
      if (expense.interval <= 0) {
        errors.push('Please fill the interval');
      }
      if (expense.currency === '') {
        errors.push('Please fill the currency');
      }
      if (expense.end_date !== '') {
        if (expense.start_date > expense.end_date) {
          errors.push('Please fill the end_date');
        }

      }


      // We want to validate if the user filled all the inputs
    }
    return errors;
  }


  onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }



  onOk = (date, index, name) => {
    const newItems = this.state.items;

    newItems[index] = {
      ...newItems[index],
      data: {
        ...newItems[index].data,
        [name]: date
      }
    }


    this.setState(
      {
        items: newItems
      }
    );

  }


  handleCancelItem = (index) => {
    const items = this.state.items;

    items.splice(index, 1)
    this.setState({
      items: items
    })
  }

  handleAddItem = () => {
    this.setState({
      items: [
        ...this.state.items,
        {
          mode: 'add',
          data: {
            title: '',
            description: '',
            type: 'fixed',
            interval: 0,
            amount: '',
            category: '',
            currency: '',
            start_date: '',
            end_date: ''
          }
        }
      ]
    })
  }

  handleSubmitNewItem = (index) => {

    const errors = this.handleValidation(index)

    if (errors.length === 0) {
      const { title, description, amount, category, start_date, end_date, interval, type, currency } = this.state.items[index].data;
      debugger;
      this.createExpense({ index, title, description, amount, category_id: category, start_date, end_date, interval, type, currency_id: currency })
    } else {
      alert(errors.toString())
    }
  }

  handleUpdateItem = async (editedIndex) => {

    const errors = this.handleValidation(editedIndex)
    const item = this.state.items[editedIndex];
    const { id, title, description, amount, start_date, end_date, currency, category, interval } = item.data;
    debugger;
    console.log(item);
    if (errors.length === 0) {
      // Add api call for later
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/transactions/${id}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, description, amount, start_date, end_date, currency_id: currency, category_id: category, interval, token }),
          method: 'PUT'
        })
        const json = await response.json();

        if (json.success) {
          const new_items = this.state.items.map((item, index) => {
            const expense = item.data;
            if (index !== editedIndex) {
              return item;
            }
            else {

              let type = 'fixed';
              if (expense.interval > 0) {
                type = 'recurring';
              }

              return {
                mode: 'view',
                data: { ...expense, category: expense.category_id, currency: expense.currency_id, type }
              }
            }
          })
          // call the backend with the update route
          this.setState({
            items: new_items
          })
        } else {
          debugger;
          alert('2 ' + json.message)
        }
      } catch (error) {
        alert('1 ' + error.message)
      }

    } else {
      alert(errors.toString())
    }
  }

  handleSwitchToUpdate = (id) => {
    // Add api call for later
    const new_items = this.state.items.map((item, index) => {

      if (index !== id) {
        return item;
      }
      else {
        return {
          ...item,
          mode: 'edit'
        }
      }
    })

    this.setState({
      items: new_items
    })
  }

  render() {
    const {
      handleAddItem,
      handleSubmitNewItem,
      handleSwitchToUpdate,
      handleUpdateItem
    } = this;

    return (
      <>
        {/* {JSON.stringify(this.state.items)} */}
   
        <ExpensesPage categories={this.state.categories} currencies={this.state.currencies} items={this.state.items} handleAddItem={handleAddItem}
          onOk={this.onOk} handleTypeChange={this.handleTypeChange} handleInputChange={this.handleInputChange}
          handleValidation={this.handleValidation} handleCancelItem={this.handleCancelItem}
          handleSubmitNewItem={handleSubmitNewItem} handleSwitchToUpdate={handleSwitchToUpdate} handleUpdateItem={handleUpdateItem}
        />
      </>
    )
  }

}

export default Transaction_expense;