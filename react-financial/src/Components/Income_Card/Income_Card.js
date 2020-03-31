import React from "react";
import "./Income_Card.css";
import { DatePicker } from 'antd';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


class Income_Card extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      show_result: false, // for testing purpose ( later on to be removed)
      items: [
        {
          title: '',
          description: '',
          type: 'fixed',
          interval: 0,
          amount: '',
          category: '',
          currency: '',
          start_date: '',
          end_date: ''
        },
        {
          title: '',
          description: '',
          type: 'fixed',
          interval: 0,
          amount: '',
          category: '',
          currency: '',
          start_date: '',
          end_date: ''
        },
        {
          title: '',
          description: '',
          type: 'fixed',
          interval: 0,
          amount: '',
          category: '',
          currency: '',
          start_date: '',
          end_date: ''
        },
        {
          title: '',
          description: '',
          type: 'fixed',
          interval: 0,
          amount: '',
          category: '',
          currency: '',
          start_date: '',
          end_date: ''
        },

      ]
    }
  }


  onOk = (date, index, name) => {
    const newItems = this.state.items;

    newItems[index] = {
      ...newItems[index], [name]: date
    }

    this.setState(
      {
        items: newItems
      }
    );

  }

  handleTypeChange = (value, index) => {
    console.log('handleTypeChange', value, index)

    const newItems = this.state.items;

    newItems[index] = {
      ...newItems[index], 'type': value
    }

    this.setState(
      {
        items: newItems
      }
    );
  }


  handleInputChange(event, index) {
    const target = event.target;
    const value = target.name === 'type' ? target.checked : target.value;
    const name = target.name;

    const newItems = this.state.items;

    newItems[index] = {
      ...newItems[index], [name]: value
    }

    this.setState(
      {
        items: newItems
      }
    );
  }

  handleContinue = () => {
    const incomes = this.state.items;

    const incomesWithErrors = incomes.filter(income => {

      // validate that the income row wasn't changed by the user
      if (income.title === '' && income.description === '' && income.interval === 0 && income.start_date === '' &&
        income.end_date === '' && income.category === '' && income.currency === '' && income.amount === '') {
        return false;
      }
      // Now we know that the user have edited the row


      // We need to check the type if its recurring or fixed

      if (income.type === 'fixed') {
        // On Fixed we validate the following: Title / category / amount / currency / start_date

        if (income.title !== '' && income.category !== '' && income.amount > 0 && income.currency !== '' && income.start_date !== '') {
          return false;
        }
      } else if (income.type === 'recurring') {
        debugger;
        // on Recurring we validate the following: Title / Category / amount / currency / start_date / interval
        if (income.title !== '' && income.category !== '' && income.amount > 0 && income.currency !== '' && income.start_date !== ''  && income.interval > 0 ) {
          return false;
        }
        // We want to validate if the user filled all the inputs

        // We want to validate if the start date < end date / if the end date was specified
        if(income.end_date !== ''){
          if (income.start_date < income.end_date) {

            return false;
          }
        }
      
      }

      return true
      // end

    })

    if(incomesWithErrors.length > 0){
      alert('Please fill the correct criteria')
    }

    if (incomesWithErrors.length === 0) {
      // redirect to new page
      // search: how to redirect user programmaticaly with react-router-dom

      // send data to backend fetch

    }
  }

  renderAddMode = (data, index) => {

    return (
      <>
        <tr className="first" >
          <th scope="row">
            <input type="text" name="title" onChange={event => this.handleInputChange(event, index)} className="form-control" placeholder="Title" aria-describedby="emailHelp" />
          </th>
          <td>
            <ToggleButtonGroup type="radio" value={this.state.items[index].type} onChange={values => this.handleTypeChange(values, index)} name="type" defaultValue={1}>

              <ToggleButton value="recurring">Recurring</ToggleButton>
              <ToggleButton value="fixed">Fixed</ToggleButton>
            </ToggleButtonGroup>
          </td>
          <td><DatePicker showTime onOk={date => {
            this.onOk(date, index, 'start_date')
          }} /></td>
          <td>
            <div className="form-group">

              <select onChange={event => this.handleInputChange(event, index)} name="category" className="form-control" id="exampleFormControlSelect1">
                <option value="housing" >Housing</option>
                <option value="food" > Food</option>
                <option value="car" >Car</option>
                <option value="entertainment">entertainment</option>
                <option value="taxes">Taxes</option>
              </select>
            </div>
          </td>
          <td>
            <div className="form-group">

              <select onChange={event => this.handleInputChange(event, index)} name="currency" className="form-control" id="exampleFormControlSelect1">
                <option value="$">$</option>
                <option value="aed">AED</option>
                <option value="l.l">L.L</option>
                <option value="yen">Yen</option>
                <option value="shekels">shekels</option>
              </select>
            </div>
          </td>
          <td><input onChange={event => this.handleInputChange(event, index)} type="text" name="amount" className="form-control" placeholder="Amount" aria-describedby="emailHelp" /></td>


        </tr>
        <tr className={'second'}>
          <td>
            <div className="form-group">

              <textarea onChange={event => this.handleInputChange(event, index)} name="description" className="form-control" placeholder="Description" ></textarea>
            </div>
          </td>
          <td>
            <div className="form-group">
              <input onChange={event => this.handleInputChange(event, index)} name="interval" className="form-control" type="number" style={{ maxWidth: '80px' }} min="0" defaultValue='0' />
            </div>
          </td>
          <td>
            <DatePicker showTime onChange={this.onChange} onOk={date => {
              this.onOk(date, index, 'end_date')
            }} />
            <p>(only fill if recurring)</p>
          </td>
          <td></td>
          <td>

          </td>
          <td>

          </td>
        </tr>

      </>
    )
  }

  render() {
    return (
      <div className="container" >
        <div className="row">
          <div className="col-1"></div>
          <div className="col-sm-10 ">
            <div className="card mt-20">
              <h5 className="card-header text-center " style={{ backgroundColor: 'Green', color: 'white' }}>Income Card</h5>
              <div className="card-body">
                <table className="table">
                  <thead className="" style={{ backgroundColor: '', border: '2px solid #dee2e6' }}>
                    <tr>
                      <th scope="col">Title <br /> Description</th>
                      <th scope="col">Type<br />Interval (weeks) &nbsp;</th>
                      <th scope="col">Star Date<br /> End Date</th>
                      <th scope="col">Categary<br /> &nbsp;</th>
                      <th scope="col">Currency<br /> &nbsp;</th>
                      <th scope="col">Amount<br /> &nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      this.state.items.map((item, index) => {
                        return this.renderAddMode(item.data, index)
                      })
                    }

                  </tbody>
                </table>

                <div className="form-group">
                  <button type="button" onClick={this.handleContinue} className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', }}>Continue </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {
          //  this.state.show_result ? JSON.stringify(this.state.items) : 'No data'
        }

      </div>

    )
  }

}

export default Income_Card;