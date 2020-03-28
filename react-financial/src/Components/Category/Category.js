import React from 'react';


function Category() {
    return (
        
    <div className="row" style={{marginTop:"3%"}}>
        <div className=" col-md-7 mx-auto">
            <div class="card card-signin">
                <div className="card-body shadow-lg">
                    <h3 className="card-title text-center">Add your Categories Here</h3>
	                 <hr/>
                        <br/>
                    <form>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <h6>Incomes/Expenses Category</h6>
                                    <div className="input-group">
                                        
                                        <input name="" className="form-control" placeholder="Add your Incomes" type="text" required/>
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)', }}>+ ADD Category</button>
 
                                </div> 
                            </div>
                            
                        </div>
                        <br/><br/>
                        <div className="row" style={{textAlign:"center"}}>
                            <div className="col-md-12">
                            <div>
                            <p className="text-center">Click continue to start adding your incomes and expenses</p>
                            </div>
                        
                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-primary">Continue</button>
                            </div> 
                            </div>
                        </div>


                        
                        
                    </form>
                </div>
            </div>
        </div>
    </div> 
        
    )
}

export default Category;

