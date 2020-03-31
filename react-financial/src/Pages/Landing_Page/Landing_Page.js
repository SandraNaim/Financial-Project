import React from 'react';
import LandingComponent from '../../Components/LandingComponent/LandingComponent';
import Landing_Navbar from '../../Components/Landing_Navbar/Landing_Navbar';

class Landing_Page extends React.Component {

    constructor(props){
        super(props);
            
    }
    
    render() {
        return (
            <div >
                <header>
                    <Landing_Navbar/>
                </header>
                <body>
                    <LandingComponent />
                </body>
              
            </div>
        )
    }
}
export default Landing_Page;