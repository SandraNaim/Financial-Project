import React from "react";
import ExpensesPage from '../../Components/ExpensesPage/ExpensesPage';
import { DatePicker } from 'antd';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


/* import "./Expense_Card.css"; */

class Transaction_expense extends React.Component {


  constructor(props) {
    super(props);


    this.state = {
      items: [
        {
          mode: 'view',
          data: {
            title: '',
            type: 'íncome',
    
          }
        },
        {
          mode: 'view',
          data: {
            title: '',
          }
        },
        {
          mode: 'view',
          data: {
            title: 'Hello me',
          }
        }
      ]
    }
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
            title: ''
          }
        }
      ]
    })
  }

  handleSubmitNewItem = (id) => {
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
      <ExpensesPage items={this.state.items} handleAddItem={handleAddItem} 
        handleSubmitNewItem={handleSubmitNewItem} handleSwitchToUpdate={handleSwitchToUpdate} handleUpdateItem={handleUpdateItem}
      />
    )
  }

}

export default Transaction_expense;