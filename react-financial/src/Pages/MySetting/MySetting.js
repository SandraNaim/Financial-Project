import React from 'react';
import Setting_component from '../../Components/Setting_component/Setting_component';




class MySetting extends React.Component {

    constructor(props){
        super(props);
            
    }
    
    render() {
        return (
            <div style={{marginTop:"50px"}}>
                <Setting_component />
            </div>
        )
    }
}
export default MySetting;





