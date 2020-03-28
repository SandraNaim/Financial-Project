import React from 'react';
import './CircleComponent.css';

const INITIAL_OFFSET = 25;
const circleConfig = {
  viewBox: '0 0 38 38',
  x: '19',
  y: '19',
  radio: '15.91549430918954'
};

class CircleComponent extends React.Component {

    constructor(props){
        super(props);
        this.state={
            realValue : '',
            titleCircle : '',
            bothnb : [],
            restnb : '',
        }
    }
    
    render() {
        return (


            <figure>
                <svg viewBox={circleConfig.viewBox}>
                    <circle
                    className="ring"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke="gray"
                    />

                    <circle
                    className="path"
                    cx={circleConfig.x}
                    cy={circleConfig.y}
                    r={circleConfig.radio}
                    fill="transparent"
                    stroke="teal"
                    strokeDasharray={this.props.bothnb}
                    strokeDashoffset={this.props.restnb}
                    />
                    <g className="circle-label">
                    <text x="22%" y="50%" className="circle-percentage">
                        {this.props.realValue}
                    </text>
                    <text x="18%" y="70%" className="circle-text">
                        Percentage of {this.props.titleCircle} left
                    </text>
                    </g>
                </svg>
            </figure>

        )
    }
}
    export default CircleComponent;