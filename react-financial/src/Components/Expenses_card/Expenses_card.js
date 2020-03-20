import React from "react";
import "./Expenses_card.css";
import { DatePicker } from 'antd';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


class Expenses_card extends React.Component {
    onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }
    onOk = (value) => {
        console.log('onOk: ', value);
    }
    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-sm-10 ">
                        <div className="card mt-20">
                            <h5 className="card-header text-center " style={{ backgroundColor: 'red', color: 'white' }}>Expenses Card</h5>
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
                                        </tr>
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
                    </tr>
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
                    </tr>
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
                    </tr>

                                    </tbody>
                                </table>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', }}>+ ADD Expenses</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>

        )
    }

}




export default Expenses_card;