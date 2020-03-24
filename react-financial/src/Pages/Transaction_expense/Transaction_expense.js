import React from 'react';
import ExpensesPage from '../../Components/ExpensesPage/ExpensesPage';




class Transaction_expense extends React.Component {

    constructor(props){
        super(props);
            
    }
    
    render() {
        return (
            <div style={{marginTop:"50px"}}>
                <ExpensesPage></ExpensesPage>
            </div>
        )
    }
}
export default Transaction_expense;





