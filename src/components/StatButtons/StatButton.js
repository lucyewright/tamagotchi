import React from 'react';

const StatButton = (props) => (
  <div
    onClick={props.increase}
    style={{
      //   backgroundColor: 'turquoise',
      resize: 'both',
      background: `url(${props.image}) 50%`,
      backgroundSize: '100% 100%',
      height: '15px',
      width: '15px',
      borderRadius: '20%'
    }}
  />
);

export default StatButton;
