import React from "react";
import { DatePicker } from 'antd';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import moment from 'moment';
import "./IncomePage.css";


class IncomePage extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
     

    }
  }
 

  renderAddMode = (data, index) => {
    return (
      <>

        <tr className="first">
          <th scope="row">
            <input type="text" name="title" defaultValue={data.title} onChange={event => this.props.handleInputChange(event, index)} className="form-control" placeholder="Title" aria-describedby="emailHelp" />
          </th>
          <td>
            <ToggleButtonGroup type="radio" name="type" defaultValue={1}>

              <ToggleButton value="recurring">Recurring</ToggleButton>
              <ToggleButton value="fixed">Fixed</ToggleButton>
            </ToggleButtonGroup>
          </td>
          <td><DatePicker showTime onOk={date => {
            this.props.onOk(date, index, 'start_date')
          }} /></td>
          <td>
            <div className="form-group">

              <select onChange={event => this.props.handleInputChange(event, index)} className="form-control" name="category" id="exampleFormControlSelect1">
                <option value=""> --- </option>
              {
                  this.props.categories.map(category => {
                    return <option key={category.id} value={category.id}>{category.name}</option>
                  })
                }
                {/* <option value="housing">Housing</option>
                <option value="food">Food</option>
                <option value="car">Car</option>
                <option value="entertainment">Entertainmnet</option>
                <option value="taxes">Taxes</option> */}
              </select>
            </div>
          </td>
          <td>
            <div className="form-group">

              <select onChange={event => this.props.handleInputChange(event, index)} name="currency" className="form-control" id="exampleFormControlSelect1">
                <option value=""> --- </option>
              {
                  this.props.currencies.map(currency => {
                    return <option key={currency.id} value={currency.id}>{currency.code}</option>
                  })
                }
                {/* <option value="$">$</option>
                <option value="aed">AED</option>
                <option value="l.l">L.L</option>
                <option value="yen">Yen</option>
                <option value="shekels">shekels</option> */}
              </select>
            </div>
          </td>
          <td><input onChange={event => this.props.handleInputChange(event, index)} type="text" name="amount" className="form-control" placeholder="Amount" aria-describedby="emailHelp" /></td>



          <td>
            <div className="form-group">

              <textarea onChange={event => this.props.handleInputChange(event, index)} name="description" className="form-control" placeholder="Description" ></textarea>
            </div>
          </td>
          <td>
            <div className="form-group">
              <input onChange={event => this.props.handleInputChange(event, index)} name="interval" type="number" className="form-control" type="number" style={{ maxWidth: '80px' }} min="0" defaultValue='0' />
            </div>
          </td>
          <td>
            <DatePicker showTime onOk={date => {
            this.props.onOk(date, index, 'end_date')
          }} />
            <p>(only fill if recurring)</p>
          </td>
          <td></td>
          <td>

          </td>
          <td>
            <button onClick={() => {
              this.props.handleSubmitNewItem(index)
            }}>Add</button>

             <button onClick={() => {
             this.props.handleCancelItem(index)
            }}>cancel</button>
          </td>
        </tr>

      </>
    )
  }

  renderEditMode = (data, index) => {
    const start_date =  moment(data.start_date, 'ddd MMM DD YYYY kk:mm:ss ZZ 0300')
    const end_date =  moment(data.end_date, 'ddd MMM DD YYYY kk:mm:ss ZZ 0300')
    return (
      <>
        <tr className="first">
          <th scope="row">
            <input type="text" onChange={event =>  this.props.handleInputChange(event, index)} className="form-control" name="title" placeholder="Title" aria-describedby="emailHelp" />
          </th>
          <td>
            <ToggleButtonGroup type="radio" name="options" value={data.type} onChange={values => this.props.handleTypeChange(values, index)} name="type" defaultValue={1}>

              <ToggleButton value="recurring">Recurring</ToggleButton>
              <ToggleButton value="fixed">Fixed</ToggleButton>
            </ToggleButtonGroup>
          </td>
          <td><DatePicker showTime defaultValue={start_date} onOk={date => {
            this.props.onOk(date, index, 'start_date')
          }} /></td>
          <td>
            <div className="form-group">

              <select onChange={event => this.props.handleInputChange(event, index)}  value={data.category}  name="category"  className="form-control" id="exampleFormControlSelect1">
                <option value=""> --- </option>
                {
                  this.props.categories.map(category => {
                    return <option key={category.id} selected={category.id === data.category} value={category.id}>{category.name}</option>
                  })
                }
               {/*  <option>Housing</option>
                <option>Food</option>
                <option>Car</option>
                <option>Entertainmnet</option>
                <option>Taxes</option> */}
              </select>
            </div>
          </td>
          <td>
            <div className="form-group">

              <select  onChange={event => this.props.handleInputChange(event, index)} value={data.currency} className="form-control" name="currency" id="rexampleFormControlSelect1">
                <option value=""> --- </option>
                {
                  this.props.currencies.map(currency => {
                    return <option key={currency.id}  value={currency.id}>{currency.code}</option>
                  })
                }
                {/* <option>$</option>
                <option>AED</option>
                <option>L.L</option>
                <option>Yen</option>
                <option>shekels</option> */}
              </select>
            </div>
          </td>
          <td><input onChange={event => this.props.handleInputChange(event, index)} name="amount" type="text" className="form-control" placeholder="Amount" aria-describedby="emailHelp" /></td>

          <td>
            <div className="form-group">

              <textarea onChange={event => this.props.handleInputChange(event, index)} name="description" className="form-control" placeholder="Description" ></textarea>
            </div>
          </td>
          <td>
            <div className="form-group">
              <input onChange={event => this.props.handleInputChange(event, index)} name="interval" className="form-control" type="number" style={{ maxWidth: '80px' }} min="0" defaultValue='0' />
            </div>
          </td>
          <td>
            <DatePicker showTime  defaultValue={data.end_date !== null ? end_date : null } onOk={date => {
            this.props.onOk(date, index, 'end_date')
          }} />
            <p>(only fill if recurring)</p>
          </td>
          <td></td>
          <td>

          </td>
          <td>
            <button onClick={() => {
              this.props.handleUpdateItem(index)
            }}>Update</button>
          </td>
        </tr>
      </>
    )
  }

  renderViewMode = (data, index) => {
    const start_date =  moment(data.start_date, 'ddd MMM DD YYYY kk:mm:ss ZZ 0300')
    const end_date =  moment(data.end_date, 'ddd MMM DD YYYY kk:mm:ss ZZ 0300')
    return (
      <>
      
        <tr className="first">
          <th scope="row">
            <input type="title" defaultValue={data.title} disabled="disabled" className="form-control" placeholder="Title" aria-describedby="emailHelp" />
          </th>
          <td>
            <ToggleButtonGroup disabled="disabled" type="radio" name="options" defaultValue={data.type}>
              {
                data.type === 'recurring' ?  <ToggleButton disabled="disabled" value="recurring">Recurring</ToggleButton> : <ToggleButton disabled="disabled" value={3}>Fixed</ToggleButton> 
              }
             
              
            </ToggleButtonGroup>
          </td>
          <td><DatePicker disabled="disabled" defaultValue={start_date} showtime onOk={date => {
            this.props.onOk(date, index, 'start_date')
          }} /></td>
          <td>
            <div disabled="disabled" className="form-group">
              <select disabled="disabled" className="form-control" id="exampleFormControlSelect1">
                <option  value=""> ---- </option> 
                 {
                  this.props.categories.map(category => {
                    return <option key={category.id} selected={category.id === parseInt(data.category)} value={category.id}>{category.name}</option>
                  })
                }

                {/* <option>Housing</option>
                <option>Food</option>
                <option>Car</option>
                <option>Entertainmnet</option>
                <option>Taxes</option> */}
              </select>
            </div>
          </td>
          <td>
            <div disabled="disabled" className="form-group">
              <select disabled="disabled"  className="form-control" id="exampleFormControlSelect1">
              {
                  this.props.currencies.map(currency => {
                    return <option key={currency.id} selected={currency.id === parseInt( data.currency)} value={currency.id}>{currency.code}</option>
                  })
                }

               {/*  <option>$</option>
                <option>AED</option>
                <option>L.L</option>
                <option>Yen</option>
                <option>shekels</option> */}
              </select>
            </div>
          </td>
          <td><input disabled="disabled" type="title" className="form-control" defaultValue={data.amount} placeholder="Amount" aria-describedby="emailHelp" /></td>

          <td>
            <div className="form-group">

              <textarea disabled="disabled" className="form-control" defaultValue={data.description} placeholder="Description" ></textarea>
            </div>
          </td>
          <td>
            <div className="form-group">
              <input disabled="disabled" className="form-control" defaultValue={data.interval} type="number" style={{ maxWidth: '80px' }} min="0" />
            </div>
          </td>
          <td>
            <DatePicker disabled="disabled" defaultValue={data.end_date !== null ? end_date : null }  showTime onOk={date => {
            this.props.onOk(date, index, 'end_date')
          }} />
            <p>(only fill if recurring)</p>
          </td>
          <td></td>
          <td>

          </td>
          <td>
            <button onClick={() => {
              this.props.handleSwitchToUpdate(index)
            }}>Edit</button>
          </td>
        </tr>
      </>
    )
  }

  render() {
    return (

      <div className="fluid-container" className="wide_IncomePage" style={{margin:"5px"}}>
        <div className="row">



          <div className="col-sm-10 " >
            <div className="card mt-20">
              <h5 className="card-header text-center " style={{ backgroundColor: 'Green', color: 'white' }}>Income Card</h5>
              <div >
                <table className="table">
                  <thead className="" style={{ backgroundColor: '', border: '2px solid #dee2e6' }}>

                    <tr>
                      <th scope="col">Title </th>
                      <th scope="col">Type</th>
                      <th className="sizeStartDate_IncomePage" scope="col">Start-Date</th>
                      <th scope="col">Category</th>
                      <th scope="col">Currency</th>
                      <th scope="col">Amount </th>
                      <th className="sizeDes_IncomePage " scope="col"> Description</th>
                      <th scope="col"> Interval</th>
                      <th scope="col"> End-Date</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      this.props.items.map((item, index) => {

                        if (item.mode === 'add') {
                          return this.renderAddMode(item.data, index)
                        } else if (item.mode === 'edit') {
                          return this.renderEditMode(item.data, index)
                        } else if (item.mode === 'view') {
                          return this.renderViewMode(item.data, index);
                        }
                      })
                    }

                  </tbody>
                </table>

                <div className="form-group">
                  <button  type="button" onClick={this.props.handleAddItem} className="btn btn-primary b9_IncomePage" style={{ backgroundColor: 'rgb(54, 54, 112)', }}>+ ADD Income</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default IncomePage;