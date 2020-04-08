import React from 'react';
import PieChartPage from "../PiChartPage/PieChartPage";


class Pie2 extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            incomesCategoryName: [],
            incomesCategoryAmount: [],
            expensesCategoryName: [],
            expensesCategoryAmount: [],

            categories: [],
            transactions: [],
        }
    }

    /* 
          currentdata: json2.data.map((item) => {
            const currentdata = {
              categoryName: item.name,
              categoryAmount: item.amount,
            };
            return currentdata;
          }), */



    async componentDidMount() {

        const token = localStorage.getItem('token');
        const categoryresponse = await fetch(`http://localhost:8000/api/categories?token=${token}`);
        const categoryjson = await categoryresponse.json();
        if (categoryjson.status == 'success') {
            this.setState({
                categories: categoryjson.data
            })
        }

        const response = await fetch(`http://localhost:8000/api/transactions?token=${token}`);
        const json = await response.json();
        if (json.success == true) {
            const incomesCategoryName = [];
            let incomesCategoryAmount = [];

            const incomes = json.data.filter(transaction => {
                if(transaction.type === 'income') {
                    const category = categoryjson.data.find(cat => {

                        return cat.id === parseInt(transaction.category_id);
                    })
                    if(category && incomesCategoryName.indexOf(category.name) === -1){
                        incomesCategoryName.push(category.name);
                    }

                }
                return transaction.type === 'income';

            });
           
            incomesCategoryAmount = incomesCategoryName.map(catName => {
                debugger;
                let amount = 0;
                const category = categoryjson.data.find(cat => {

                    return cat.name === catName
                });

                const incomesByCategory = incomes.filter(income => {
                    if(parseInt(income.category_id) === category.id) {
                        amount = amount + parseInt(income.amount);

                    }
                    return parseInt(income.category_id) === category.id;
                });
                return amount;



            })


            const expensesCategoryName = [];
            let expensesCategoryAmount = [];

            const expenses = json.data.filter(transaction => {
                if(transaction.type === 'expense') {
                    const category = categoryjson.data.find(cat => {

                        return cat.id === parseInt(transaction.category_id);
                    })
                    if(category && expensesCategoryName.indexOf(category.name) === -1){
                        expensesCategoryName.push(category.name);
                    }

                }
                return transaction.type === 'expense';

            });
           
            expensesCategoryAmount = expensesCategoryName.map(catName => {
                debugger;
                let amount = 0;
                const category = categoryjson.data.find(cat => {

                    return cat.name === catName
                });

                const expensesByCategory = expenses.filter(expense => {
                    if(parseInt(expense.category_id) === category.id) {
                        amount = amount + parseInt(expense.amount);

                    }
                    return parseInt(expense.category_id) === category.id;
                });
                return amount;



            })

            this.setState({
                incomesCategoryAmount,
                incomesCategoryName,
                expensesCategoryAmount,
                expensesCategoryName
            })



            
        }
    }

    render() {
        return (
            <>
                <div >
                    <h5><b>Incomes</b> Pie Chart</h5>
                    <br />
                    <PieChartPage categoryName={this.state.incomesCategoryName} categoryAmount={this.state.incomesCategoryAmount} />
                </div>
                <br /><br />
                <div>
                    <h5><b>Expenses</b> Pie Chart</h5>
                    <br />
                    <PieChartPage categoryName={this.state.expensesCategoryName} categoryAmount={this.state.expensesCategoryAmount}/> 
                </div>

            </>
        )
    }
}
export default Pie2;