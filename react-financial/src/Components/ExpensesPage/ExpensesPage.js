import React from "react";
import { DatePicker } from 'antd';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

import "./ExpensesPage.css";


class ExpensesPage extends React.Component {


  renderAddMode = (data, index) => {
    return (
      <>
        <tr className="first">
          <th scope="row">
            <input type="title" defaultValue={data.title} className="form-control" placeholder="Title" aria-describedby="emailHelp" />
          </th>
          <td>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>

              <ToggleButton value={2}>Recurring</ToggleButton>
              <ToggleButton value={3}>Fixed</ToggleButton>
            </ToggleButtonGroup>
          </td>
          <td><DatePicker showTime onChange={this.onChange} onOk={this.onOk} /></td>
          <td>
            <div className="form-group">

              <select className="form-control" id="exampleFormControlSelect1">
                <option>Housing</option>
                <option>Food</option>
                <option>Car</option>
                <option>Entertainmnet</option>
                <option>Taxes</option>
              </select>
            </div>
          </td>
          <td>
            <div className="form-group">

              <select className="form-control" id="exampleFormControlSelect1">
                <option>$</option>
                <option>AED</option>
                <option>L.L</option>
                <option>Yen</option>
                <option>shekels</option>
              </select>
            </div>
          </td>
          <td><input type="title" className="form-control" placeholder="Amount" aria-describedby="emailHelp" /></td>


        </tr>
        <tr className={'second'}>
          <td>
            <div className="form-group">

              <textarea className="form-control" placeholder="Description" ></textarea>
            </div>
          </td>
          <td>
            <div className="form-group">
              <input className="form-control" type="number" style={{ maxWidth: '80px' }} min="0" defaultValue='0' />
            </div>
          </td>
          <td>
            <DatePicker showTime onChange={this.onChange} onOk={this.onOk} />
            <p>(only fill if recurring)</p>
          </td>
          <td></td>
          <td>

          </td>
          <td>
            <button onClick={() => {
              this.props.handleSubmitNewItem(index)
            }}>Add</button>
          </td>
        </tr>

      </>
    )
  }

  renderEditMode = (data, index) => {

    return (
      <>
        <tr className="first">
          <th scope="row">
            <input type="title" className="form-control" placeholder="Title" aria-describedby="emailHelp" />
          </th>
          <td>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>

              <ToggleButton value={2}>Recurring</ToggleButton>
              <ToggleButton value={3}>Fixed</ToggleButton>
            </ToggleButtonGroup>
          </td>
          <td><DatePicker showTime onChange={this.onChange} onOk={this.onOk} /></td>
          <td>
            <div className="form-group">

              <select className="form-control" id="exampleFormControlSelect1">
                <option>Housing</option>
                <option>Food</option>
                <option>Car</option>
                <option>Entertainmnet</option>
                <option>Taxes</option>
              </select>
            </div>
          </td>
          <td>
            <div className="form-group">

              <select className="form-control" id="exampleFormControlSelect1">
                <option>$</option>
                <option>AED</option>
                <option>L.L</option>
                <option>Yen</option>
                <option>shekels</option>
              </select>
            </div>
          </td>
          <td><input type="title" className="form-control" placeholder="Amount" aria-describedby="emailHelp" /></td>
        </tr>
        <tr className={'second'}>
          <td>
            <div className="form-group">

              <textarea className="form-control" placeholder="Description" ></textarea>
            </div>
          </td>
          <td>
            <div className="form-group">
              <input className="form-control" type="number" style={{ maxWidth: '80px' }} min="0" defaultValue='0' />
            </div>
          </td>
          <td>
            <DatePicker showTime onChange={this.onChange} onOk={this.onOk} />
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
    return (
      <>
        <tr className="first">
          <th scope="row">
            <input type="title" defaultValue={data.title} disabled="disabled" className="form-control" placeholder="Title" aria-describedby="emailHelp" />
          </th>
          <td>
            <ToggleButtonGroup disabled="disabled" type="radio" name="options" defaultValue={1}>
              <ToggleButton disabled="disabled" value={2}>Recurring</ToggleButton>
              <ToggleButton disabled="disabled" value={3}>Fixed</ToggleButton>
            </ToggleButtonGroup>
          </td>
          <td><DatePicker disabled="disabled" showTime onChange={this.onChange} onOk={this.onOk} /></td>
          <td>
            <div disabled="disabled" className="form-group">
              <select disabled="disabled" className="form-control" id="exampleFormControlSelect1">
                <option>Housing</option>
                <option>Food</option>
                <option>Car</option>
                <option>Entertainmnet</option>
                <option>Taxes</option>
              </select>
            </div>
          </td>
          <td>
            <div disabled="disabled" className="form-group">
              <select disabled="disabled" className="form-control" id="exampleFormControlSelect1">
                <option>$</option>
                <option>AED</option>
                <option>L.L</option>
                <option>Yen</option>
                <option>shekels</option>
              </select>
            </div>
          </td>
          <td><input disabled="disabled" type="title" className="form-control" placeholder="Amount" aria-describedby="emailHelp" /></td>
        </tr>
        <tr className={'second'}>
          <td>
            <div className="form-group">

              <textarea disabled="disabled" className="form-control" placeholder="Description" ></textarea>
            </div>
          </td>
          <td>
            <div className="form-group">
              <input disabled="disabled" className="form-control" type="number" style={{ maxWidth: '80px' }} min="0" defaultValue='0' />
            </div>
          </td>
          <td>
            <DatePicker disabled="disabled" showTime onChange={this.onChange} onOk={this.onOk} />
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
      <div className="container" >
        <div className="row">
          <div className="col-1"></div>
          <div className="col-sm-10 ">
            <div className="card mt-20">
              <h5 className="card-header text-center " style={{ backgroundColor: 'red', color: 'white' }}>Expense Card</h5>
              <div className="card-body">
                <table className="table">
                  <thead className="" style={{ backgroundColor: '', border: '2px solid #dee2e6' }}>
                    <tr>
                      <th scope="col">Title <br /> Description</th>
                      <th scope="col">Recurring<br />Interval (weeks) &nbsp;</th>
                      <th scope="col">Star Date<br /> End Date</th>
                      <th scope="col">Categary<br /> &nbsp;</th>
                      <th scope="col">Currency<br /> &nbsp;</th>
                      <th scope="col">Amount<br /> &nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      this.props.items.map((item, index) => {

                        if (item.mode === 'add') {
                          return this.renderAddMode(item.data, index )
                        } else if (item.mode === 'edit') {
                          return this.renderEditMode(item.data, index)
                        } else if (item.mode === 'view') {
                          return this.renderViewMode(item.data , index);
                        }
                      })
                    }
                   
                  </tbody>
                </table>

                <div className="form-group">
                  <button type="button" onClick={this.props.handleAddItem} className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', }}>+ ADD </button>
                </div>

              </div>
            </div>
          </div>
        </div>



      </div>

    )
  }

}

export default ExpensesPage;