import React from 'react';
import StatButton from '../StatButtons/StatButton';

const getColor = (num) => {
  if (num >= 66) {
    return 'green';
  } else if (num >= 33 && num < 66) {
    return 'orange';
  } else {
    return 'red';
  }
};

const StatBar = (props) => (
  <div>
    <StatButton image={props.image} increase={props.increase} />
    <div
      style={{
        backgroundColor: getColor(props.stat),
        width: props.stat,
        height: '10px',
        margin: '1px'
      }}
    />
  </div>
);

export default StatBar;
