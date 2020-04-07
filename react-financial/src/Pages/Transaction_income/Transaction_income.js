import React from "react";
import IncomePage from '../../Components/IncomePage/IncomePage';
import { DatePicker } from 'antd';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


/* import "./Income_Card.css"; */

class Transaction_income extends React.Component {


  constructor(props) {
    super(props);


    this.state = {
      transactions: [],
      currencies: [],
      categories: [],
      items: []
    }
  }

  async componentDidMount() {

    const response = await fetch('http://localhost:8000/api/currencies');
    const json = await response.json();
    if (json.status == 'success') {
      this.setState({
        currencies: json.data
      })
    }
    const token = localStorage.getItem('token');
    const response2 = await fetch(`http://localhost:8000/api/categories?token=${token}`);
    const json2 = await response2.json();
    if (json2.status == 'success') {
      this.setState({
        categories: json2.data
      })
    }
    debugger;
    this.getIncome()
  }



  getIncome = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`http://localhost:8000/api/transactions?token=${token}`);
      const result = await response.json();
      debugger;
      if (result.success) {
        const incomes = result.data.filter(transaction => {
          if( transaction.type === 'income'){
            return true;
          }else {
            return false;
          }
        })
        const items = incomes.map(income => {
          let type = 'fixed';
          if(income.interval > 0){
            type= 'recurring';
          }
          
          return {
            mode: 'view',
            data: {...income, category: income.category_id, currency: income.currency_id, type}
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

  createIncome = async props => {
    try {
     // if (fixed0){
    
      const { title, description, amount, category_id, start_date, end_date, interval, type, currency_id } = props;
      const token = localStorage.getItem('token');
     // console.log('úrl', `http://localhost:8000/api/transactions/create?title=${title}&description=${description}&amount=${amount}&category_id=${category_id}&start_date=${start_date}&end_date=${end_date}&type=${type}&interval=${interval}&currency_id=${currency_id}&token=${token}`);
      const response = await fetch(
        `http://localhost:8000/api/transactions/create?title=${title}&description=${description}&amount=${amount}&category_id=${category_id}&start_date=${start_date}&end_date=${end_date}&type=income&interval=${interval}&currency_id=${currency_id}&token=${token}`, {
          headers: {
            'Accept': 'application/json',
          }
        }
      );
      const json = await response.json();
      if (json.success) {
        // we reproduce the user that was created in the database, locally
        const incomeY = json.data;
        const transactions = [...this.state.transactions, incomeY];
        this.setState({ transactions, error: "" });
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
    const income = this.state.items[index].data;

  // We need to check the type if its recurring or fixed
     
  if (income.type === 'fixed') {
    // On Fixed we validate the following: Title / category / amount / currency / start_date

    if(income.title=== ''){
      errors.push('Please fill the title');
    }
    if (income.category=== ''){
      errors.push('Please fill the category');
    }
    if(income.amount=== ''){
      errors.push('Please fill the amount');
    }
    if (income.currency=== ''){
      errors.push('Please fill the currency');
    }
    if(income.start_date=== ''){
      errors.push('Please fill the start_date');
    }


    
  } else if (income.type === 'recurring') {
  
    // on Recurring we validate the following: Title / Category / amount / currency / start_date / interval
    if(income.title=== ''){
      errors.push('Please fill the title');
    }
    if (income.category=== ''){
      errors.push('Please fill the category');
    }
    if(income.amount=== ''){
      errors.push('Please fill the amount');
    }
    if (income.currency=== ''){
      errors.push('Please fill the currency');
    }
    if(income.interval=== ''){
      errors.push('Please fill the interval');
    }
    if (income.currency=== ''){
      errors.push('Please fill the currency');
    }
    if(income.end_date!== ''){
      if (income.start_date > income.end_date) {
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
          [name] : date
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
debugger;
    if (errors.length === 0) {
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
     {JSON.stringify(this.state.items)}
      <IncomePage categories={this.state.categories} currencies={this.state.currencies} items={this.state.items} handleAddItem={handleAddItem}
        onOk={this.onOk} handleTypeChange={this.handleTypeChange} handleInputChange={this.handleInputChange}
        handleValidation={this.handleValidation} handleCancelItem={this.handleCancelItem}
        handleSubmitNewItem={handleSubmitNewItem} handleSwitchToUpdate={handleSwitchToUpdate} handleUpdateItem={handleUpdateItem}
      />
     </>
    )
  }

}

export default Transaction_income;