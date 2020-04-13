import React from 'react';
import './Setting_component.css';


class Setting_component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderUserEditMode = (data) => {

    return (
      <form onSubmit={this.props.onUserUpdate} >
        {/* {JSON.stringify(data)} */}
        <div className="row" style={{ marginLeft: "3%" }}>
          <div className="col-md-10 setting_one">
            <h6>Your First Name</h6>
            <div className="form-group" style={{ marginLeft: "15%", marginRight: "15%" }}>

              <input onChange={event => this.props.onHandleChange(event)} name="first_name" style={{ width: "300px" }} type="text" class="form-control" id="username" placeholder="Enter your first name" />
            </div>

          </div>
        </div>
        <br />

        <div className="row" style={{ marginLeft: "3%" }}>
          <div className="col-md-10 setting_one">
            <h6>Your Last Name</h6>
            <div className="form-group" style={{ marginLeft: "15%", marginRight: "15%" }}>

              <input onChange={event => this.props.onHandleChange(event)} name="last_name" style={{ width: "300px" }} type="text" class="form-control" id="username" placeholder="Enter your last name" />
            </div>

          </div>
        </div>

        <br />
        <div className="row" style={{ marginLeft: "3%" }}>
          <div className="col-md-10 setting_one">
            <h6>Your Password</h6>
            <div className="form-group " style={{ marginLeft: "16%", marginRight: "15%" }}>

              <input name="passwordd" onChange={event => this.props.onHandleChange(event)} style={{ width: "300px" }} type="text" class="form-control" id="userpassword" placeholder="Enter your password" />
            </div>

          </div>
        </div>

        <div className="row " style={{ marginTop: "3%", marginLeft: "3%" }}>
          <div className="col-md-10 setting_one">
            <h6>Base Currency</h6>
            <div className="form-group " style={{ marginLeft: "16.7%", marginRight: "15%" }}>

              <div className="input-group" style={{ width: "300px" }} >

                <select class="form-control" onChange={event => this.props.onHandleChange(event)} value={data.currency_id} name="currency_idd" id="currency">
                  <option value=""> --- </option>
                  {
                    this.props.currencies.map(currency => {
                      return <option key={currency.id} value={currency.id}>{currency.code}</option>
                    })
                  }
                  {/* <option>$</option>
                                <option>L.L</option>
                                <option>AED</option>
                                <option>Yen</option>
                                <option>Shekels</option> */}
                </select>
              </div>
            </div>

          </div>
        </div>

        <div className="row" >
          <div style={{ marginLeft: "35%", marginTop:"3%" }}>
            <button type="button" onClick={() => {
              this.props.handleSwitchUserToView()
            }} className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', height: "40px" }}>Cancel</button>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', height: "40px" }}>Save</button>

          </div>
        </div>

      </form>
    )
  }


  renderUserViewMode = (data) => {
    return (
      <form >


        <div className="row" style={{ marginLeft: "3%" }}>
          <div className="col-md-10 setting_one">
            <h6>Your First Name</h6>
            <div className="form-group" style={{ marginLeft: "15%", marginRight: "15%" }}>

              <input disabled="disabled" value={data.first_name} name="first_name" style={{ width: "300px" }} type="text" class="form-control" id="username" placeholder="Enter your first name" />
            </div>

          </div>
        </div>
        <br />

        <div className="row" style={{ marginLeft: "3%" }}>
          <div className="col-md-10 setting_one">
            <h6>Your Last Name</h6>
            <div className="form-group" style={{ marginLeft: "15%", marginRight: "15%" }}>

              <input disabled="disabled" value={data.last_name} name="last_name" style={{ width: "300px" }} type="text" class="form-control" id="username" placeholder="Enter your last name" />
            </div>

          </div>
        </div>

        <br />
        <div className="row" style={{ marginLeft: "3%" }}>
          <div className="col-md-10 setting_one">
            <h6>Your Password</h6>
            <div className="form-group " style={{ marginLeft: "16%", marginRight: "15%" }}>

              <input disabled="disabled" value="******" name="passwordd" style={{ width: "300px" }} type="text" class="form-control" id="userpassword" placeholder="Enter your password" />
            </div>

          </div>
        </div>

        <div className="row " style={{ marginTop: "3%", marginLeft: "3%" }}>
          <div className="col-md-10 setting_one">
            <h6>Base Currency</h6>
            <div className="form-group " style={{ marginLeft: "16.7%", marginRight: "15%" }}>

              <div className="input-group" style={{ width: "300px" }} >

                <select class="form-control" name="currency_idd" id="currency" disabled="disabled">
                  {
                    this.props.currencies.map(currency => {
                      return <option key={currency.id} selected={currency.id === parseInt(data.currency)} value={currency.id}>{currency.code}</option>
                    })
                  }
                  {/* <option>$</option>
                  <option>L.L</option>
                  <option>AED</option>
                  <option>Yen</option>
                  <option>Shekels</option> */}
                </select>
              </div>
            </div>

          </div>
        </div>

        <div className="row" >
          <div style={{ marginLeft: "6%", width:"100%", marginTop:"3%"}}>If you want to update your first-name, last-name, password or your base currency please click on UPDATE</div> 
          <br/>
          <div style={{ marginLeft: "35%", marginTop:"1%" }}>
            <button type="button" onClick={() => {
              this.props.handleSwitchUserToUpdate()
            }} className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', height: "40px" }}>Update</button>
          </div>
        </div>

      </form>
    )
  }


  renderCategoryEditMode = (data, index) => {
    return (
      <form onSubmit={(event)=> {
        this.props.onCategoryUpdate(event, index)
      }} >
        <div className="row" style={{ marginLeft: "3%" }}>
          <div className="col-md-10 setting_one">
            <h6>Income/Expenses Category</h6>
            <div className="form-group " style={{ marginLeft: "8%" }}>

              <input name='name' onChange={event => this.props.handleCategoryInputChange(event,index)} value={data.name} style={{ width: "300px" }} type="text" class="form-control" id="category" placeholder="Enter your category" />


            </div>

          </div>
        </div>
        <div className="row">
          <div style={{ marginLeft: "31%" }}>
            <button type="button" onClick={() => {
              this.props.handleSwitchCategoryToView(index)
            }} className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', height: "40px" }}>Cancel</button>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', height: "40px" }}>Save</button>
          </div>
        </div>
      </form>
    )
  }


  renderCategoryViewMode = (data, index) => {
    return (
      <form >
        <div className="row" style={{ marginLeft: "3%" }}>
          <div className="col-md-10 setting_one">
            <h6>Your Category</h6>
            <div className="form-group " style={{ marginLeft: "17%" }}>

              <input disabled="disabled" value={data.name} name="name" style={{ width: "300px" }} type="text" class="form-control" id="category" placeholder="Enter your category" />


            </div>
            <button type="button" onClick={() => {
              this.props.handleSwitchCategoryToUpdate(index)
            }} className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', height: "40px" }}>Update</button>


          </div>
        </div>
        {/* <div className="row">
          <div style={{ marginLeft: "31%" }}>
            <button type="button" onClick={() => {
              this.props.handleSwitchCategoryToUpdate(index)
            }} className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', height: "40px" }}>Update</button>

          </div>
        </div> */}
      </form>
    )
  }

  renderCategoryAddMode = (data, index) => {
    return (
      <form >
        <div className="row" style={{ marginLeft: "3%" }}>
          <div className="col-md-10 setting_one">
            <h6>Your Category</h6>
            <div className="form-group " style={{ marginLeft: "17%" }}>

              <input onChange={event => this.props.handleCategoryInputChange(event,index)} value={data.name} name="name" style={{ width: "300px" }} type="text" class="form-control" id="category" placeholder="Enter your category" />


            </div>

          </div>
        </div>
        <div className="row">
          <div style={{ marginLeft: "29%" }}>
            <button type="button" onClick={() => {
              this.props.createCategory(data, index)
            }} className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', height: "40px" }}>ADD</button>
            <button type="button" onClick={() => {
              this.props.handleCancelCategory(index)
            }} className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', height: "40px" }}>Cancel</button>

          </div>
        </div>
      </form>
    )
  }


  render() {
    return (

      <div className="container" style={{ marginBottom: "3%" }}>
        <h3>General Setting</h3><hr />
        <br /> <br />
        {/* {this.props.modeUser} */}
        {/* {this.props.modeUser == 'view' ? this.renderUserViewMode(this.props.user) : this.renderUserEditMode()}
       */}
        <h5 style={{marginLeft:"4%"}}><i>Your Personal Info</i></h5>
        <br/> <br/>

        {this.props.user !== null ? (this.props.modeUser == 'view' ? this.renderUserViewMode(this.props.user)
          : this.renderUserEditMode({
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            password: this.props.password,
            currency_id: this.props.currency_id,

          })) : null}


        <hr />


        <br />

        {/*         {this.props.modeCategory == 'view' ? this.renderCategoryViewMode() : this.renderCategoryEditMode({name: this.props.name})}
 */}

        {/*    {this.props.category !== null ? (this.props.modecategory == 'view' ? this.renderCategoryViewMode(this.props.category) 
        : this.renderCategoryEditMode({
          name: this.props.name,
        })) : null} */}
        <h5 style={{marginLeft:"4%"}}><i>Income and Expenses categories</i></h5>
        <br/> <br/>


        {
          this.props.categories.map((item, index) => {

            if (item.mode === 'add') {
              return this.renderCategoryAddMode(item.data, index)
            } else if (item.mode === 'edit') {
              return this.renderCategoryEditMode(item.data, index)
            } else if (item.mode === 'view') {
              return this.renderCategoryViewMode(item.data, index);
            }
          })
        }
        <br/>
        <div style={{width:"100%", marginLeft: "19%", marginTop:"3%"}}>If you want to add more categories, click on the Add button</div>
        <button type="button" onClick={this.props.handleAddCategory} className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', height: "40px", marginLeft: "35%", marginTop:"1%" }}>+ ADD</button>

        <hr />
        <br />



      </div>
    )
  }
}

export default Setting_component;

