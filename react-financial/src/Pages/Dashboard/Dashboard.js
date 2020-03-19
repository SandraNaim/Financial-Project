import React from 'react';
import TotalIE from '../../Components/TotalIE/TotalIE';
import Report from '../../Components/Report/Report';



class Dashboard extends React.Component {

    constructor(props){
        super(props);

    }
    
    render() {
        return (
            <div>
                <TotalIE></TotalIE>
                <Report></Report>
            </div>
        )
    }
}
export default Dashboard;





