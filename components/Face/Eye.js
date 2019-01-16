import React from 'react';
import './styling.css';

import { FACE_SIZE } from './config';
const EYE_DISTANCE = FACE_SIZE / 7.5;
const EYE_SIZE = FACE_SIZE / 15;
const PUPIL_SIZE = EYE_DISTANCE / 3;

const getPupilX = (look) => {
  if (look === 'right') {
    return PUPIL_SIZE / 2;
  }
  if (look === 'left') {
    return -(PUPIL_SIZE / 2);
  }
  if (look === 'up') {
    return 0;
  }
  if (look === 'down') {
    return 0;
  } else {
    return 0;
  }
};

const getPupilY = (look) => {
  if (look === 'left') {
    return 0;
  }
  if (look === 'right') {
    return 0;
  }
  if (look === 'up') {
    return -(PUPIL_SIZE / 2);
  }
  if (look === 'down') {
    return PUPIL_SIZE / 2;
  } else {
    return 0;
  }
};

const Eye = (props) => (
  <g
    transform={`translate(${
      props.side === 'left'
        ? FACE_SIZE / 2 - EYE_DISTANCE
        : FACE_SIZE / 2 + EYE_DISTANCE
    } ${FACE_SIZE / 2 - EYE_SIZE})`}
  >
    {props.dead ? (
      <text textAnchor="middle" alignmentBaseline="middle">
        X
      </text>
    ) : (
      <React.Fragment>
        <circle r={EYE_SIZE} fill="white" stroke="black" strokeWidth={2} />
        <circle
          className="pupil"
          r={PUPIL_SIZE}
          cx={getPupilX(props.look)}
          cy={getPupilY(props.look)}
        />
        <path
          d={`M${EYE_SIZE},0 a1,1 0 1,0 -${EYE_SIZE * 2},0 z`}
          fill="orange"
          strokeWidth={2}
          stroke="black"
          style={{
            transformOrigin: `0px -${EYE_SIZE}px`
          }}
          className={`eyeLids ${props.droopyEyes ? 'droopy' : 'awake'}`}
        />
      </React.Fragment>
    )}
  </g>
);

export default Eye;
