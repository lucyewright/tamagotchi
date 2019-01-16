import React from 'react';
import Eye from './Eye';
import './styling.css';

import { FACE_SIZE } from './config.js';
const MOUTH = FACE_SIZE / 5;

const Face = (props) => (
  <svg className="face" width={FACE_SIZE} height={FACE_SIZE}>
    <circle
      r={FACE_SIZE / 3}
      cx={FACE_SIZE / 2}
      cy={FACE_SIZE / 2}
      fill="orange"
      stroke="black"
      strokeWidth={4}
    />
    <Eye
      side="right"
      look={props.look}
      droopyEyes={props.droopyEyes}
      dead={props.dead}
    />
    <Eye
      side="left"
      look={props.look}
      droopyEyes={props.droopyEyes}
      dead={props.dead}
    />
    <rect
      className="mouth"
      width={MOUTH}
      fill="black"
      height={FACE_SIZE / FACE_SIZE}
      x={FACE_SIZE / 2 - MOUTH / 2}
      y={FACE_SIZE / 2 + FACE_SIZE / 7.5}
      rx={0.5}
    />
  </svg>
);

export default Face;
