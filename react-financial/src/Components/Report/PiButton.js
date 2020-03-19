import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import React from 'react';

class PiButton extends React.Component {

   
    render() {
        return (
        <AwesomeButton type={this.props.styleBtn}>{this.props.Btntype}</AwesomeButton>
        );
    }
}
export default PiButton;