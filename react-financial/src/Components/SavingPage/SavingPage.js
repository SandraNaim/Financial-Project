import React from "react";
import { DatePicker } from 'antd';

import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

class SavingPage extends React.Component {
    onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }
    onOk = (value) => {
        console.log('onOk: ', value);
    }
    render() {

        return (
            <div className="container" style={{marginBottom:"5px"}}>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-sm-10 ">
                        <div className="card mt-20">
                            <h5 className="card-header text-center " style={{ backgroundColor: 'yellow', color: 'white' }}>Saving Card</h5>
                            <div className="card-body">
                                <table className="table">
                                    <thead className="" style={{ backgroundColor: '', border: '2px solid #dee2e6' }}>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Currency</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">End Date</th>
                                            <th scope="col">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="first">
                                            <th scope="row">
                                                <input type="title" className="form-control" placeholder="Title" aria-describedby="emailHelp" />
                                            </th>
                                            <th scope="row">
                                                <div className="form-group">

                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option>$</option>
                                                        <option>AED</option>
                                                        <option>L.L</option>
                                                        <option>Yen</option>
                                                        <option>shekels</option>
                                                    </select>
                                                </div>
                                            </th>
                                            <td>
                                                <input type="title" className="form-control" placeholder="Amount" aria-describedby="emailHelp" />
                                            </td>
                                            <td> <DatePicker showTime onChange={this.onChange} onOk={this.onOk} />
                                            </td>
                                            <td>
                                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                                    
                                                    <ToggleButton value={2}>Weekly</ToggleButton>
                                                    <ToggleButton value={3}>Monthly</ToggleButton>
                                                </ToggleButtonGroup>
                                            </td>

                                        </tr>
                                        <tr className="first">
                                            <th scope="row">
                                                <input type="title" className="form-control" placeholder="Title" aria-describedby="emailHelp" />
                                            </th>
                                            <th scope="row">
                                                <div className="form-group">

                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option>$</option>
                                                        <option>AED</option>
                                                        <option>L.L</option>
                                                        <option>Yen</option>
                                                        <option>shekels</option>
                                                    </select>
                                                </div>
                                            </th>
                                            <td>
                                                <input type="title" className="form-control" placeholder="Amount" aria-describedby="emailHelp" />
                                            </td>
                                            <td> <DatePicker showTime onChange={this.onChange} onOk={this.onOk} />
                                            </td>
                                            <td>
                                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                                    
                                                    <ToggleButton value={2}>Weekly</ToggleButton>
                                                    <ToggleButton value={3}>Monthly</ToggleButton>
                                                </ToggleButtonGroup>
                                            </td>

                                        </tr>
                                        <tr className="first">
                                            <th scope="row">
                                                <input type="title" className="form-control" placeholder="Title" aria-describedby="emailHelp" />
                                            </th>
                                            <th scope="row">
                                                <div className="form-group">

                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option>$</option>
                                                        <option>AED</option>
                                                        <option>L.L</option>
                                                        <option>Yen</option>
                                                        <option>shekels</option>
                                                    </select>
                                                </div>
                                            </th>
                                            <td>
                                                <input type="title" className="form-control" placeholder="Amount" aria-describedby="emailHelp" />
                                            </td>
                                            <td> <DatePicker showTime onChange={this.onChange} onOk={this.onOk} />
                                            </td>
                                            <td>
                                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                                    
                                                    <ToggleButton value={2}>Weekly</ToggleButton>
                                                    <ToggleButton value={3}>Monthly</ToggleButton>
                                                </ToggleButtonGroup>
                                            </td>

                                        </tr>
                                        <tr className="first">
                                            <th scope="row">
                                                <input type="title" className="form-control" placeholder="Title" aria-describedby="emailHelp" />
                                            </th>
                                            <th scope="row">
                                                <div className="form-group">

                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option>$</option>
                                                        <option>AED</option>
                                                        <option>L.L</option>
                                                        <option>Yen</option>
                                                        <option>shekels</option>
                                                    </select>
                                                </div>
                                            </th>
                                            <td>
                                                <input type="title" className="form-control" placeholder="Amount" aria-describedby="emailHelp" />
                                            </td>
                                            <td> <DatePicker showTime onChange={this.onChange} onOk={this.onOk} />
                                            </td>
                                            <td>
                                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                                    
                                                    <ToggleButton value={2}>Weekly</ToggleButton>
                                                    <ToggleButton value={3}>Monthly</ToggleButton>
                                                </ToggleButtonGroup>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', }}>+ ADD SAVING</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>

        )
    }

}

export default SavingPage;
