import { useRef, useState } from 'react';
import Landmark from '../interfaces/Landmark';

interface Props {
    landmark: Landmark
  }

const Info = (props: Props) => {
    return (
        <>
            <h1>{props.landmark.name}</h1>
            <p>{props.landmark.description}</p>
        </>
    )
}

export default Info;