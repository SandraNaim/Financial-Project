import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import './PieChartComp.css';


function PieChartComp() {
    
    return (
        <div style={{width:"100px"}}>
            <PieChart
                data={[
                    { title: 'One', value: 40, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]}
            />
        </div>
       
    )
}
export default PieChartComp;
