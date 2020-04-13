import React from 'react';
import moment from 'moment';
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

    async componentDidMount() {

        const token = localStorage.getItem('token');
        const categoryresponse = await fetch(`http://localhost:8000/api/categories?token=${token}`);
        const categoryjson = await categoryresponse.json();
        if (categoryjson.success === true) {
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
                if (transaction.type === 'income') {
                    const category = categoryjson.data.find(cat => {

                        return cat.id === parseInt(transaction.category_id);
                    })
                    if (category && incomesCategoryName.indexOf(category.name) === -1) {
                        incomesCategoryName.push(category.name);
                    }

                }
                return transaction.type === 'income';

            });

            incomesCategoryAmount = incomesCategoryName.map(catName => {
                let amount = 0;
                const category = categoryjson.data.find(cat => {

                    return cat.name === catName
                });

                const incomesByCategory = incomes.filter(income => {
                    if (parseInt(income.category_id) === category.id) {

                        if (parseInt(income.interval) === 0) {
                            amount = amount + parseInt(income.amount);
                        } else {
                            const { interval } = income;
                            income.start_date = income.start_date.replace(' GMT 0300', '');

                            if (income.end_date !== null) {
                                income.end_date = income.end_date.replace(' GMT 0300', '');
                            }
                            const convertDateToMoment = (date)=> {
                                date = date.replace(' GMT 0300', '');
                                // Fri Mar 25 2020 22:21:20
                                // 012345678901234567890234
                                const indexedMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                                const months = indexedMonths.indexOf(date.substring(4,7));
                                const day = parseInt(date.substring(8,10)) -1;
                                const years = date.substring(11, 15)
                                const hours = date.substring(16, 18)
                                const minutes= date.substring(19, 21)
                                const seconds = date.substring(23, 25)
                                const moment_date = moment({ years, months, date:day, hours, minutes, seconds});
                                return moment_date;

                            }
                            const start_date = convertDateToMoment(income.start_date)
                            const current_date = moment();

                            if (income.end_date !== null) {
                                const end_date = convertDateToMoment(income.end_date)

                                if (end_date > current_date) {
                                    const weeks_passed = Math.abs(start_date.diff(current_date, 'weeks'));

                                    const total_interval = parseInt(weeks_passed / interval)+1;

                                    amount = amount + total_interval * parseInt(income.amount);
                                } else {
                                    const weeks_passed = Math.abs(start_date.diff(end_date, 'weeks'));

                                    const total_interval = parseInt(weeks_passed / interval)+1;

                                    amount = amount + total_interval * parseInt(income.amount);
                                }
                            } else {
                                const weeks_passed = Math.abs(start_date.diff(current_date, 'weeks'));

                                const total_interval = parseInt(weeks_passed / interval)+1;

                                amount = amount + total_interval * parseInt(income.amount);
                            }
                        }

                    }
                    return parseInt(income.category_id) === category.id;
                });
                return amount;



            })


            const expensesCategoryName = [];
            let expensesCategoryAmount = [];

            const expenses = json.data.filter(transaction => {
                if (transaction.type === 'expense') {
                    const category = categoryjson.data.find(cat => {

                        return cat.id === parseInt(transaction.category_id);
                    })
                    if (category && expensesCategoryName.indexOf(category.name) === -1) {
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
                    if (parseInt(expense.category_id) === category.id) {

                        if (parseInt(expense.interval) === 0) {
                            amount = amount + parseInt(expense.amount);
                        } else {
                            const { interval } = expense;
                            expense.start_date = expense.start_date.replace(' GMT 0300', '');

                            if (expense.end_date !== null) {
                                expense.end_date = expense.end_date.replace(' GMT 0300', '');
                            }
                            const convertDateToMoment = (date)=> {
                                date = date.replace(' GMT 0300', '');
                                // Fri Mar 25 2020 22:21:20
                                // 012345678901234567890234
                                const indexedMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                                const months = indexedMonths.indexOf(date.substring(4,7));
                                const day = parseInt(date.substring(8,10)) -1;
                                const years = date.substring(11, 15)
                                const hours = date.substring(16, 18)
                                const minutes= date.substring(19, 21)
                                const seconds = date.substring(23, 25)
                                const moment_date = moment({ years, months, date:day, hours, minutes, seconds});
                                return moment_date;

                            }
                            const start_date = convertDateToMoment(expense.start_date)
                            const current_date = moment();

                            if (expense.end_date !== null) {
                                const end_date = convertDateToMoment(expense.end_date)

                                if (end_date > current_date) {
                                    const weeks_passed = Math.abs(start_date.diff(current_date, 'weeks'));

                                    const total_interval = parseInt(weeks_passed / interval)+1;

                                    amount = amount + total_interval * parseInt(expense.amount);
                                } else {
                                    const weeks_passed = Math.abs(start_date.diff(end_date, 'weeks'));

                                    const total_interval = parseInt(weeks_passed / interval)+1;

                                    amount = amount + total_interval * parseInt(expense.amount);
                                }
                            } else {
                                const weeks_passed = Math.abs(start_date.diff(current_date, 'weeks'));

                                const total_interval = parseInt(weeks_passed / interval)+1;

                                amount = amount + total_interval * parseInt(expense.amount);
                            }
                        }

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
                    <PieChartPage categoryName={this.state.expensesCategoryName} categoryAmount={this.state.expensesCategoryAmount} />
                </div>

            </>
        )
    }
}
export default Pie2;