import React from "react";
import IncomePage from '../../Components/IncomePage/IncomePage';
import { DatePicker } from 'antd';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


/* import "./Income_Card.css"; */

class Transaction_income extends React.Component {


  constructor(props) {
    super(props);


    this.state = {
      items: [
        {
          mode: 'view',
          data: {
            title: 'Hello there',
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
    const income = this.state.items[index].data.income;

    if (income.type === 'fixed') {
      // On Fixed we validate the following: Title / category / amount / currency / start_date

      if (income.title !== '' && income.category !== '' && income.amount > 0 && income.currency !== '' && income.start_date !== '') {
        errors = false;
      }
    } else if (income.type === 'recurring') {
      // on Recurring we validate the following: Title / Category / amount / currency / start_date / interval
      if (income.title !== '' && income.category !== '' && income.amount > 0 && income.currency !== '' && income.start_date !== '' && income.interval > 0) {
        errors = false;
      }
      // We want to validate if the user filled all the inputs

      // We want to validate if the start date < end date / if the end date was specified
      if (income.end_date !== '') {
        if (income.start_date < income.end_date) {

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

      this.setState({
        items: new_items
      })
    } else {
      alert('Please fix the errors')
    }
  }

  handleUpdateItem = (id) => {
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

    this.setState({
      items: new_items
    })
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
      <IncomePage items={this.state.items} handleAddItem={handleAddItem}
        onOk={this.onOk} handleTypeChange={this.handleTypeChange} handleInputChange={this.handleInputChange}
        handleValidation={this.handleValidation}
        handleSubmitNewItem={handleSubmitNewItem} handleSwitchToUpdate={handleSwitchToUpdate} handleUpdateItem={handleUpdateItem}
      />
    )
  }

}

export default Transaction_income;