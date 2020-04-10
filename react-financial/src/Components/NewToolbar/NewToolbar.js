import { Chart, Tooltip, Axis, StackBar, Legend, StackArea } from 'viser-react';
import * as React from 'react';

/* const data = [{
  time: '16 Q1',
  type: 'type1',
  value: 0
}, {
  time: '16 Q1',
  type: 'type2',
  value: 17.8
}, {
  time: '16 Q1',
  type: 'type3',
  value: 69.4
}, {
  time: '16 Q1',
  type: 'type4',
  value: 12.8
}, {
  time: '16 Q2',
  type: 'type1',
  value: 0
}, {
  time: '16 Q2',
  type: 'type2',
  value: 18.1
}, {
  time: '16 Q2',
  type: 'type3',
  value: 70.7
}, {
  time: '16 Q2',
  type: 'type4',
  value: 11.2
}, {
  time: '16 Q3',
  type: 'type1',
  value: 0
}, {
  time: '16 Q3',
  type: 'type2',
  value: 20.8
}, {
  time: '16 Q3',
  type: 'type3',
  value: 67.4
}, {
  time: '16 Q3',
  type: 'type4',
  value: 11.8
}, {
  time: '16 Q4',
  type: 'type1',
  value: 0.1
}, {
  time: '16 Q4',
  type: 'type2',
  value: 20.3
}, {
  time: '16 Q4',
  type: 'type3',
  value: 69.2
}, {
  time: '16 Q4',
  type: 'type4',
  value: 10.4
}, {
  time: '17 Q1',
  type: 'type1',
  value: 0.4
}, {
  time: '17 Q1',
  type: 'type2',
  value: 17.3
}, {
  time: '17 Q1',
  type: 'type3',
  value: 68.3
}, {
  time: '17 Q1',
  type: 'type4',
  value: 14
}, {
  time: '17 Q2',
  type: 'type1',
  value: 1.2
}, {
  time: '17 Q2',
  type: 'type2',
  value: 18.3
}, {
  time: '17 Q2',
  type: 'type3',
  value: 68.6
}, {
  time: '17 Q2',
  type: 'type4',
  value: 11.9
}];
 */
const scale = [{
  dataKey: 'value',
  alias: '占比',
  max: 100,
  min: 0,
  nice: true
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const tickLine = {
  alignWithLabel: false,
  length: 0
}

const stackLabel = ['value', function(val) {
  if (val < 10) {
    return false;
  }
  return {
    position: 'middle',
    offset: 0,
    textStyle: {
      fill: '#fff',
      fontSize: 12,
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)'
    },
    formatter: function formatter(text) {
      return text ;
    }
  };
}]

const color = ['type', [ "#2ea674","#dc3f76","#2e9ca6" , "#f96232","#2e9ca6"]]

 class NewToolbar extends React.Component {
  constructor(props){
    super(props);
  }
  render() {

const data=[{
  time: '17 Q2',
  type: 'type1',
  value: 1.2
}, {
  time: '17 Q2',
  type: 'type2',
  value: 18.3
},{
  time: '17 Q2',
  type: 'type2',
  value: 18.3
}
  
/*   time:[],
  type:[...this.props.categoryName],
  value:[...this.props.categoryAmount],

  color:color,
  label:label */

]
    return (
      <>
      {JSON.stringify(data)}

      <Chart forceFit height={400} data={data} padding='auto' scale={scale}>
        <Tooltip/>
        <Axis dataKey="time" label={label} tickLine={tickLine}/>
        <Axis dataKey="value" show={false}/>
        <Legend position='right-center'/>
        <StackBar position="time*value" opacity={1} label={stackLabel} color={color}/>
      </Chart>
      </>
    );
  }
}
export default NewToolbar;

