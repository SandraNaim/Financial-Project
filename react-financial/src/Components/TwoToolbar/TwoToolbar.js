import React from 'react';
import NewToolbar from '../NewToolbar/NewToolbar';
import moment, { min } from 'moment';

const convertDateToMoment = (date) => {
    date = date.replace(' GMT 0300', '');
    // Fri Mar 25 2020 22:21:20
    // 012345678901234567890234
    const indexedMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const months = indexedMonths.indexOf(date.substring(4, 7));
    const day = parseInt(date.substring(8, 10)) - 1;
    const years = date.substring(11, 15)
    const hours = date.substring(16, 18)
    const minutes = date.substring(19, 21)
    const seconds = date.substring(23, 25)
    const moment_date = moment({ years, months, date: day, hours, minutes, seconds });
    return moment_date;

}
class TwoToolbar extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            incomesData: [],
            expensesData: [],
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
            let minimum_month = moment();
            let maximum_month = moment();
            const data = [];
            const incomes = json.data.filter(transaction => {
                return transaction.type === 'income';
            });

            incomes.forEach(income => {
                const start_date = convertDateToMoment(income.start_date);

                if (start_date.isBefore(minimum_month)) {
                    minimum_month = start_date
                }


                if (income.end_date !== null) {
                    const end_date = convertDateToMoment(income.end_date);

                    if (end_date.isAfter(maximum_month)) {
                        maximum_month = end_date
                    }
                }
            })

            for (let index = 1; index < 10; index++) {
                const month_date = minimum_month.add(1, 'M');
                const current_month = month_date.month();
                const current_month_incomes = incomes.filter(income => {
                    const start_date = convertDateToMoment(income.start_date);
                    const start_date_month = start_date.month();

                    if (start_date_month === current_month) {
                        return true;
                    }

                    if (parseInt(income.interval) > 0) {
                        if (start_date.isBefore(month_date, 'month')) {
                            if (income.end_date === null) {
                                return true;
                            } else {
                                const end_date = convertDateToMoment(income.end_date);
                                if (end_date.isAfter(month_date, 'month')) {
                                    return true;
                                }
                            }
                        }
                    }


                });

                const categories = [];
                current_month_incomes.forEach(income => {
                    if (categories.indexOf(income.category_id) === -1) {
                        categories.push(income.category_id)
                    }
                });

                categories.forEach(category_id => {

                    let amount = 0;
                    debugger;
                    const current_category = categoryjson.data.find(cat => cat.id === parseInt(category_id))
                    debugger;
                    current_month_incomes.forEach(income => {
                        debugger;
                        if (current_category.id === parseInt(income.category_id)) {
                            const start_date = convertDateToMoment(income.start_date);
                            const start_date_month = start_date.month();

                            if (parseInt(income.interval) === 0) {
                                amount += parseInt(income.amount);
                            } else {
                                if (income.end_date === null) {
                                    amount += parseInt(income.amount);
                                } else {
                                    const end_date = convertDateToMoment(income.end_date);
                                    const end_date_month = end_date.month();
                                    amount += parseInt(income.amount);
                                }
                            }

                        }
                    })
                    data.push({
                        type: current_category.name,
                        time: month_date.format('MMM YY'),
                        value: amount
                    })


                })
            }


            this.setState({
                incomesData: data
            })

        }
    }


    render() {
        return (
            <>
                <div >
                    <h5><b>Incomes</b> Bar Chart</h5>
                    <br />
                    <NewToolbar data={this.state.incomesData} />
                </div>
                <br /><br />
                <div>
                    <h5><b>Expenses</b> Bar Chart</h5>
                    <br />
                    {/* <NewToolbar categoryName={this.state.expensesCategoryName} categoryAmount={this.state.expensesCategoryAmount}/> */}
                </div>

            </>
        )
    }
}
export default TwoToolbar;