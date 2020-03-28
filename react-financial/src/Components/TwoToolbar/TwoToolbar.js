import React from 'react';
import NewToolbar from '../NewToolbar/NewToolbar';


class TwoToolbar extends React.Component {


    render(){
        return(
            <>
              <div >
                    <h5><b>Incomes</b> Bar Chart</h5> 
                    <br/>
                    <NewToolbar />
                </div>
                <br/><br/>
                <div>
                    <h5><b>Expenses</b> Bar Chart</h5> 
                    <br/>
                    <NewToolbar />
                </div>

            </>
        )
    }
}
export default TwoToolbar;