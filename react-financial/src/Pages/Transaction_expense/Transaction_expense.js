import React from "react";
import ExpensesPage from '../../Components/ExpensesPage/ExpensesPage';
import { DatePicker } from 'antd';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


/* import "./Income_Card.css"; */

class Transaction_expense extends React.Component {


  constructor(props) {
    super(props);


    this.state = {
      items: [
        {
          mode: 'view',
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
        },
        {
          mode: 'view',
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
        },
        {
          mode: 'view',
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
    }
  }


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

    let errors = true
    const expense = this.state.items[index].data;

    if (expense.type === 'fixed') {
      // On Fixed we validate the following: Title / category / amount / currency / start_date

      if (expense.title !== '' && expense.category !== '' && expense.amount > 0 && expense.currency !== '' && expense.start_date !== '') {
        errors = false;
      }
    } else if (expense.type === 'recurring') {
      // on Recurring we validate the following: Title / Category / amount / currency / start_date / interval
      if (expense.title !== '' && expense.category !== '' && expense.amount > 0 && expense.currency !== '' && expense.start_date !== '' && expense.interval > 0) {
        errors = false;
      }
      // We want to validate if the user filled all the inputs

      // We want to validate if the start date < end date / if the end date was specified
      if (expense.end_date !== '') {
        if (expense.start_date < expense.end_date) {

          errors = false;
        }
      }

    }
    return errors;
  }


  onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  onOk = (value) => {
    console.log('onOk: ', value);
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

  handleSubmitNewItem = (id) => {

    const errors = this.handleValidation(id)

    if (!errors) {

      const new_items = this.state.items.map((item, index) => {

        if (index !== id) {
          return item;
        }
        else {
          return {
            ...item,
            mode: 'view'
          }
        }
      })

      // backend add transaction with the create route
      this.setState({
        items: new_items
      })
    } else {
      alert('Please fix the errors')
    }
  }

  handleUpdateItem = (id) => {

    const errors = this.handleValidation(id)

    if (!errors) {
      // Add api call for later
      const new_items = this.state.items.map((item, index) => {

        if (index !== id) {
          return item;
        }
        else {
          return {
            ...item,
            mode: 'view'
          }
        }
      })
      // call the backend with the update route
      this.setState({
        items: new_items
      })
    } else {
      alert('Please fix the errors')
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
      <ExpensesPage items={this.state.items} handleAddItem={handleAddItem}
        onOk={this.onOk} handleTypeChange={this.handleTypeChange} handleInputChange={this.handleInputChange}
        handleValidation={this.handleValidation} handleCancelItem={this.handleCancelItem}
        handleSubmitNewItem={handleSubmitNewItem} handleSwitchToUpdate={handleSwitchToUpdate} handleUpdateItem={handleUpdateItem}
      />
    )
  }

}

export default Transaction_expense;