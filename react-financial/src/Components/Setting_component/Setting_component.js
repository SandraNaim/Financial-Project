import React from 'react';
import './Setting_component.css';


class Setting_component extends React.Component {

    constructor(props){
        super(props);
        this.state={
            settings : [],
            settings2 : [],


            name:'',
            password:'',
            id_currency:'',
        }
            
    }


    onClick=(event)=>{
        event.preventDefault();
        const form=event.target;
        let name=form.namee.value;
        let password=form.passwordd.value;
        let id_currency=form.id_currencyy.value;
        this.updateSetting1({name, password, id_currency});
        form.namee.value="";
        form.passwordd.value="";
        form.id_currencyy.value="";
    
      } 


    onClick2=(event)=>{
        event.preventDefault();
        const form=event.target;
        let category=form.categoryy.value;
        this.updateSetting2({category});
        form.categoryy.value="";
       
      } 



    updateSetting1 = async (props) => {
        try {
          if (!props && !props.name && !props.password && !props.id_currency && !props.id) {
            throw new Error(
              `you need to update one variable at least`
            );
          }
          const { name, password, id_currency, id } = props;
    
          const response = await fetch(`http://localhost:8000/api/users/update?id=${id}&name=${name}&password=${password}&id_currency=${id_currency}`);
          const json = await response.json();
          if (json.success) {
            // we update the user, to reproduce the database changes:
            const settings = this.state.settings.map(settingY => {
              // if this is the contact we need to change, update it. This will apply to exactly
              // one contact
              if (settingY.id === id) {
                const new_setting = {
                  id: settingY.id,
                  name: props.name || settingY.name,
                  password: props.password || settingY.password,
                  id_currency: props.id_currency || settingY.id_currency,
                };
                return new_setting;
              }
              // otherwise, don't change the contact at all
              else {
                return settingY;
              }
            });
            this.setState({ settings, error: "" });
          } else {
            this.setState({ error: json.message });
          }
        } catch (err) {
          this.setState({ error: err });
        }
      };



      updateSetting2 = async (props) => {
        try {
          if (!props && !props.category && !props.id) {
            throw new Error(
              `you need to update the category`
            );
          }
          const { category, id } = props;
    
          const response = await fetch(`http://localhost:8000/api/categories/update?id=${id}&category=${category}`);
          const json = await response.json();
          if (json.success) {
            // we update the user, to reproduce the database changes:
            const settings2 = this.state.settings2.map(settingY => {
              // if this is the contact we need to change, update it. This will apply to exactly
              // one contact
              if (settingY.id === id) {
                const new_setting = {
                  id: settingY.id,
                  category: props.category || settingY.category,

                };
                return new_setting;
              }
              // otherwise, don't change the contact at all
              else {
                return settingY;
              }
            });
            this.setState({ settings2, error: "" });
          } else {
            this.setState({ error: json.message });
          }
        } catch (err) {
          this.setState({ error: err });
        }
      };


    render(){
    return (

    <div className="container"style={{ marginBottom:"3%"}}>
        <h3>General Setting</h3><hr/>
        <br/> <br/>
        <form onSubmit={this.onClick}>
            <div className="row" style={{ marginLeft:"3%"}}>
                <div className="col-md-10 setting_one">
                    <h6>Change your Name</h6>
                    <div className="form-group" style={{ marginLeft:"15%",marginRight:"15%"}}>

                        <input disabled="disabled" name="namee" style={{width:"300px"}} type="text" class="form-control" id="username" placeholder="Enter your name"/>
                    </div>
                    
                </div>
            </div>
            
            <br/>
            <div className="row" style={{ marginLeft:"3%"}}>
                <div className="col-md-10 setting_one">
                    <h6>Change your Password</h6>
                    <div className="form-group " style={{ marginLeft:"12%",marginRight:"15%"}}>

                        <input disabled="disabled" name="passwordd" style={{width:"300px"}} type="text" class="form-control" id="userpassword" placeholder="Enter your password"/>
                    </div>
                    
                </div>
            </div>
            
            <div className="row " style={{marginTop:"3%", marginLeft:"3%"}}>
                <div className="col-md-10 setting_one">
                    <h6>Base Currency</h6>
                    <div className="form-group " style={{ marginLeft:"20%",marginRight:"15%"}}>
                    
                        <div className="input-group"style={{width:"300px"}} >
                                            
                            <select class="form-control" name="id_currencyy" id="currency" disabled="disabled">
                                <option>$</option>
                                <option>L.L</option>
                                <option>AED</option>
                                <option>Yen</option>
                                <option>Shekels</option>
                            </select>
                        </div> 
                    </div>
                    
                </div>
            </div>

            <div className="row" >
                <div style={{marginLeft:"31%"}}>
                    <button type="submit" onClick="" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)',height:"40px" }}>Update</button>
                </div>
            </div>

        </form>
        <hr/>


        <br/>
        <form onSubmit={this.onClick2}>
            <div className="row" style={{ marginLeft:"3%"}}>
                <div className="col-md-10 setting_one">
                    <h6>Income/Expenses Category</h6>
                    <div className="form-group " style={{ marginLeft:"8%"}}>

                        <input disabled="disabled" name="categoryy" style={{width:"300px"}} type="text" class="form-control" id="category" placeholder="Enter your category"/>
                    
                    
                    </div>
                    
                </div>
            </div>
            <div className="row">
                    <div style={{ marginLeft:"31%"}}>
                        <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)',height:"40px" }}>+ ADD</button>
                        <button type="submit" onClick2="" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)',height:"40px" }}>Update</button>
                        <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)',height:"40px" }}>- Delete</button>
                    </div>
            </div>
        </form>
            <hr/>
            <br/>
            
                       
  
    </div> 
    )
    }
}

export default Setting_component;

