import React from 'react';
import IncomePage from '../../Components/IncomePage/IncomePage';



class Transaction_income extends React.Component {

    constructor(props){
        super(props);

    }
    
    render() {
        return (
            <div style={{marginTop:"50px"}}>
                <IncomePage></IncomePage>
            </div>
        )
    }
}
export default Transaction_income;





