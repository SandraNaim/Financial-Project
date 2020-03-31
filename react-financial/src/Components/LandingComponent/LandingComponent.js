import React from 'react';
import './LandingComponent.css';

class LandingComponent extends React.Component {

    constructor(props){
        super(props);
            
    }
    
    render() {
        return (
            <div >
            <div className="row justify-content-between"  >
                <div className="col-md-6 text-center" >
                    <h4>It's Time to Track your Financial</h4>
                </div>
                <div className="col-md-6 text-right" >
                    <img src="land1.jpg" width="100%" className="rounded" style={{marginLeft:"auto"}}/>
                </div>
                
            </div>
            </div>
        )
    }
}
export default LandingComponent;