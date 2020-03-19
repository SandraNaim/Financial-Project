import React from 'react';
import moment, { max } from 'moment';

class MonthPicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            month: moment(),
        }


    }

    _decreaseMonth = () => {
        return this.setState(
            prevState => ({ month: prevState.month.subtract(1, 'month') }),
            this._filterByMonth
        )

    }

    _increaseMonth = () => {
        return this.setState(prevState => ({ month: prevState.month.add(1, 'month') }), this._filterByMonth)
    }


    _filterByMonth = () => {
        const month = this.state.month.clone()
     /**/   this._runFilter({
            minDate: month.startOf('month').format(),
            maxDate: month.endOf('month').format(),
        })
        /**/
    }

    _runFilter = ({ minDate, maxDate }) => {
       // alert(minDate + ' ----- ' + maxDate)
    }
    render() {

        return (
            <h2>
                <span onClick={this._decreaseMonth}>{'< '}</span>
                <span>{this.state.month.format('MMM YYYY')}</span>
                <span onClick={this._increaseMonth}>
                    {this.state.month.clone().add(1, 'hour') > moment().add(12, 'month') ? '' : ' >'}
                </span>
            </h2>
        )
    }
}

export default MonthPicker;